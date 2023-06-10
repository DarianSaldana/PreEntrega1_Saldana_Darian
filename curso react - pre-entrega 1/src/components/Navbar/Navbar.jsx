import './Navbar.scss'

const Navbar = () => {

    return (
        <header className='header'>
            <div className="header__container">
                <img src="./ruku.png" alt="logo" className="header__img" />
                <nav className='header__nav'>
                    <a className='header__link' href="Destacados">Destacados</a>
                    <a className='header__link' href="Ofertas">Ofertas</a>
                    <a className='header__link' href="Info">¿Quienes Somos?</a>
                </nav>

            </div>
        </header>
    )
}

export default Navbar