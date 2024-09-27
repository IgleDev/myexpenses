import { useEffect, useState } from "react";
import { FaSolidSun } from "../assets/FaSolidSun";
import { HeroiconsMoon } from "../assets/HeroiconsMoon";

const NavBar = ({ initialMonth, darkMode, lang }) => {
    const [month, setMonth] = useState(initialMonth);
    const [theme, setTheme] = useState(darkMode ? 'dark' : 'light'); 

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const actualMonth = monthNames[new Date().getMonth()];
        setMonth(actualMonth); // Establece el mes actual
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, [theme]);

    // Seleccionar el icono basado en el estado del tema
    const text = theme === 'dark' ? <FaSolidSun /> : <HeroiconsMoon />;

    return (
        <nav className="flex justify-between items-center p-10 bg-gray-100 dark:bg-zinc-900">
            <div className="flex items-center">
                <p className="dark:text-white">{month}</p>
            </div>
            <div className="flex space-x-4">
                <button onClick={handleChangeTheme}>{text}</button>
                <p className="dark:text-white">{lang}</p>
            </div>
        </nav>
    );
};

export default NavBar;