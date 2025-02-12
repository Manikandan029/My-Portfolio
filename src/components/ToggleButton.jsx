import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="fixed top-5 right-5">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="px-6 py-3 rounded-lg shadow-md transition duration-300
          bg-gray-200 text-black hover:bg-gray-300 dark-mode-btn"
      >
        {isDarkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default ToggleButton;
