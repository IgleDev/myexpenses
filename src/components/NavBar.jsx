import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; 
import { FaSolidSun } from "../assets/FaSolidSun";
import { HeroiconsMoon } from "../assets/HeroiconsMoon";
import { TwemojiFlagEngland } from "../assets/flags/TwemojiFlagEngland";
import { TwemojiFlagSpain } from "../assets/flags/TwemojiFlagSpain";

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
        <nav className="flex justify-between items-center p-10">
            <div className="flex items-center">
                <p className="dark:text-white text-2xl">{month || "Mes no disponible"}</p>
            </div>
            <div className="flex space-x-4">
                <button onClick={handleChangeTheme} className="text-2xl">
                    {theme === 'dark' ? <FaSolidSun /> : <HeroiconsMoon />}
                </button>
                <select className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleLanguageChange} value={i18n.language}>
                    <option value="es">{t("Spanish")}</option>
                    <option value="en">{t("English")}</option>
                </select>
                <div className="mt-2 text-2xl">
                {i18n.language === 'es' ? <TwemojiFlagSpain /> : <TwemojiFlagEngland />}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;