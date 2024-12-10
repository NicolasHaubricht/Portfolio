import React, { useState } from "react";
import "./Darkmode.css"; 

const ToggleSwitch: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    return (
        <div className="toggle-switch">
            <label className="switch-label">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={darkMode}
                    onChange={toggleTheme}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ToggleSwitch;
