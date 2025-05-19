import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@descope/react-sdk';
import App from './App';

const projectId = import.meta.env.VITE_DESCOPE_PROJECT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider projectId={projectId}>
            <App />
        </AuthProvider>
    </React.StrictMode>
);
