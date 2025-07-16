import React from "react";
import { useTheme } from "./ThemeContext";
import ProductList from "./ProductList";
import "./App.css";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Dashboard</h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          data-testid="toggle-theme"
        >
          Toggle Theme (Current: {theme})
        </button>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}
