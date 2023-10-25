import './styles.css';
// import { Button } from 'bootstrap';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img alt="sostre" src={'./images/logosostre.jpg'} width={150} />
            </div>
            <div>
                <button as="Button" variant="primary">
                    Hola
                </button>
            </div>
            <div>
                <ul className='.list-container' >
                    <li>
                        <button className='category-button'>Pantalones</button>
                    </li>
                    <li>
                        <button className='category-button' >Vestidos</button>
                    </li>
                    <li>
                        <button className='category-button'>Remeras</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;