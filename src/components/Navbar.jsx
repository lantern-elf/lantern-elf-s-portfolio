import './navbar.css'

const Navbar = () => {
    return(
        <nav>
            <img src="public/new_logo.svg" alt="" />
            <ul>
                <button><div className='btnImage'></div></button>
                <button><div className='btnImage'></div></button>
                <button><div className='btnImage'></div></button>
            </ul>
        </nav>
    )
}

export default Navbar