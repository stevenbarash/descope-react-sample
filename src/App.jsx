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
            <pre style={{ background: '#eee', padding: 8, borderRadius: 4 }}>{sessionToken}</pre>
          </div>
          <div>My Private Component</div>
          <button onClick={handleLogout} style={{ marginTop: 16 }}>Logout</button>
        </>
      )}
    </div>
  );
};

export default App;
