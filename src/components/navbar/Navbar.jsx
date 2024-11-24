import { useNavigate } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    const navigate = useNavigate()

    const menuList = [
        {
            name: "Home",
            url: "/" 
        },
        {
            name: "Arts",
            url: "/arts"
        },
        {
            name: "Codes",
            url: "/codes"
        },
        {
            name: "About",
            url: "/about"
        },
    ];

    return(
        <nav className="wrapper">
            <ul className="logo">
                <img src="./Emblem.png"/>
                <span>lantern elf</span>
            </ul>
            <ul className="menu">
                {menuList.map((item, index) => (
                    <button key={index} onClick={() => navigate(item.url)}>{item.name}</button>
                ))}
            </ul>
            {/* <ul className="interact">

            </ul> */}
        </nav>
    )
}

export default Navbar