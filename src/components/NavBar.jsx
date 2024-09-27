const NavBar = ({actualMonth, darkMode, lang}) => {
    return (
        <nav className="flex justify-between items-center p-10">
            <div className="flex items-center">
                <p>{actualMonth}</p>
            </div>
            <div className="flex space-x-4">
                <p>{darkMode}</p>
                <p>{lang}</p>
            </div>
        </nav>
    )
}

export default NavBar;