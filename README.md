# Task 10 March 2025

# What is Strict Mode?

- Strict Mode in React is a tool that helps detect potential issues in an application during development. It does not affect production and is mainly used to:
 Identify unsafe lifecycle methods.
 Warn about deprecated features.
 Detect unexpected side effects.
 Help with concurrent rendering in React.

 # What is jsx and tsx?

 - JSX stands for JavaScript XML, and it allows us to write HTML-like syntax inside JavaScript.

 JSX Features:
 - Uses JavaScript but looks like HTML.
 - Compiles to JavaScript using React.createElement().

 TSX stands for TypeScript XML, and it's JSX with TypeScript support. It allows us to use static typing for better error checking.

 TSX Features:
 - Supports TypeScript (static typing).
 - Catches type errors before running the app.
 - Recommended for large projects to prevent runtime errors.

 # What is Babel?

 - Babel is a JavaScript compiler that converts modern JavaScript (ES6+ and JSX) into older JavaScript that browsers can understand. React uses Babel to transform JSX into JavaScript before execution.

 # Difference between main.jsx and Main.jsx 
 # main.jsx
- main.jsx (React Entry Point)
- Used for rendering the main application.
- Handles ReactDOM rendering.
- Typically found in src/main.jsx.

# Example 

- import React from "react";
- import ReactDOM from "react-dom/client";
- import App from "./App";
- import "./index.css";  // Global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

# Main.jsx
- Main.jsx (React Component)
- Used as a component inside other files.
- Follows PascalCase (React’s naming convention).

# What is Layout and Outline?

# Layout
- A Layout is a wrapper component that provides a common structure (like a header, footer, and sidebar) for multiple pages.

# Outlet
- The Outlet <Outlet /> is a placeholder inside a layout. It tells React where to render the child components (like Home, About, Career etc.).


# What is Nextjs?

- Next.js is a popular and powerful React framework used for building full-stack web applications.
- Next.js allows developers to build both the front-end (what users see) and the back-end (server-side logic) of web applications.



 