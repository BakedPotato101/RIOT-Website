<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme && currentTheme === 'dark') {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div id="darkMode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
=======
const DarkMode = () => {
    function toggle() {
        var element = document.body;
        element.classList.toggle('darkMode');
    }

    return (
        <div id="darkMode" onClick={toggle}>
            <span>Dark Mode</span>
            <img
                id="darkModeIcon"
                width="17px"
                height="17px"
                src="Dark Mode Icon.png"
                alt=""
            ></img>
>>>>>>> upstream/main
        </div>
    );
};

<<<<<<< HEAD
export default DarkModeToggle;
=======
export default DarkMode;
>>>>>>> upstream/main
