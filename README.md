# Descope React Sample App

This is a super simple React + Vite sample app demonstrating authentication with [Descope](https://descope.com) using [`@descope/react-sdk`](https://www.npmjs.com/package/@descope/react-sdk).

## Features
- Login and signup with Descope flows
- Displays authenticated user info and session token
- Logout functionality

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy the sample environment file and set your Descope project ID and Flow ID:
```bash
cp .env.sample .env
```
Edit `.env` and set your project and flow IDs:
```
VITE_DESCOPE_PROJECT_ID=your-descope-project-id-here
VITE_DESCOPE_FLOW_ID=your-descope-flow-id-here
```

### 3. Run the app
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## How it works
- The app uses `<AuthProvider>` from `@descope/react-sdk` to provide authentication context.
- The main screen shows a Descope login/signup flow if not authenticated.
- After login, the app displays the user's name/email and the session token.
- A logout button is provided to end the session.
- The authentication flow and project are determined by the `flowId` and `projectId` set in your environment variables.

## Customization
- To change the authentication flow, edit the `VITE_DESCOPE_FLOW_ID` in your `.env` file or the `flowId` prop in `src/App.jsx`.
- To use a different Descope project, edit the `VITE_DESCOPE_PROJECT_ID` in your `.env` file.
- For more advanced usage, see the [Descope React SDK docs](https://docs.descope.com/build/guides/react/).

---

This project was bootstrapped with [Vite](https://vitejs.dev/) and [React](https://react.dev/).
