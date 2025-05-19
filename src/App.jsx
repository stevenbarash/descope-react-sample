import { useCallback } from 'react';
import { useDescope, useSession, useUser } from '@descope/react-sdk';
import { Descope } from '@descope/react-sdk';
import { getSessionToken } from '@descope/react-sdk';

const App = () => {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user, isUserLoading } = useUser();
  const { logout } = useDescope();

  const sessionToken = getSessionToken();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const decodeJwtPayload = (token) => {
    if (!token) return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    try {
      const payload = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(payload);
    } catch {
      return null;
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 32, textAlign: 'center' }}>
      {!isAuthenticated && (
        <Descope
          flowId="sign-up-or-in-email-or-phone-input"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={() => console.log('Could not log in!')}
        />
      )}
      {(isSessionLoading || isUserLoading) && <p>Loading...</p>}
      {!isUserLoading && isAuthenticated && (
        <>
          <h2>Hello {user?.name || user?.email || 'User'}!</h2>
          <div style={{ margin: '16px 0', wordBreak: 'break-all' }}>
            <strong>Session Token:</strong>
            <pre style={{ background: '#eee', padding: 8, borderRadius: 4, fontSize: 12 }}>{sessionToken}</pre>
            <div style={{ textAlign: 'left', marginTop: 8 }}>
              <strong>Decoded Payload:</strong>
              <pre style={{ background: '#222', color: '#b5f4a5', padding: 12, borderRadius: 4, fontSize: 13, overflowX: 'auto' }}>
                {(() => {
                  const payload = decodeJwtPayload(sessionToken);
                  return payload ? JSON.stringify(payload, null, 2) : 'Invalid or missing token';
                })()}
              </pre>
            </div>
          </div>
          <button onClick={handleLogout} style={{ marginTop: 16 }}>Logout</button>
        </>
      )}
    </div>
  );
};

export default App;
