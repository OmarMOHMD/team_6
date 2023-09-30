import Shape_06 from '../images/Shape.png';
import hamburger_img from '../images/hamburger.png';
// import setting from '../components/settings.js';


export default function Header() {
    const toggleNav = () => {
        const nav = document.getElementById("nav");
        nav.classList.toggle("openNav");
    }

    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={Shape_06} alt="Logo Shape" />
                    <a href="#" >BlueRex</a>
                </div>
                <ul className="navbar" id="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><a href="">Faq</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <li id="hamburger_button" onClick={toggleNav}><img src={hamburger_img} alt="open settings" /></li>
                <li id="close_button" onClick={toggleNav}><img src={hamburger_img} alt="open settings" /></li>
            </nav>
        </header>
    );
}
