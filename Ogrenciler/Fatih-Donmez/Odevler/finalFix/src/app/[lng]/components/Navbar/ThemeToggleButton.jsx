"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setTheme } from "../../../lib/theme/themeSlice";
import { useEffect } from "react";

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, [dispatch]);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(toggleTheme());
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div
      className="toggle-theme"
      onClick={handleToggle}
      data-theme={theme}
    ></div>
  );
};

export default ThemeToggleButton;
