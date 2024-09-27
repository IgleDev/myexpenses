import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; 
import { FaSolidSun } from "../assets/FaSolidSun";
import { HeroiconsMoon } from "../assets/HeroiconsMoon";

const NavBar = ({ darkMode }) => {
    const { t, i18n } = useTranslation();
    const [month, setMonth] = useState("");
    const [theme, setTheme] = useState(darkMode ? 'dark' : 'light');

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const monthNames = t('monthNames');
        if (Array.isArray(monthNames)) {
            const currentMonthIndex = new Date().getMonth();
            const actualMonth = monthNames[currentMonthIndex];
            setMonth(actualMonth);
        } else {
            setMonth("Mes no disponible");
        }
    }, [t]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <nav className="flex justify-between items-center p-10 bg-gray-100 dark:bg-zinc-900">
            <div className="flex items-center">
                <p className="dark:text-white">{month || "Mes no disponible"}</p>
            </div>
            <div className="flex space-x-4">
                <button onClick={handleChangeTheme}>
                    {theme === 'dark' ? <FaSolidSun /> : <HeroiconsMoon />}
                </button>
                <select onChange={handleLanguageChange} value={i18n.language}>
                    <option value="es">es</option>
                    <option value="en">en</option>
                </select>
            </div>
        </nav>
    );
};

export default NavBar;