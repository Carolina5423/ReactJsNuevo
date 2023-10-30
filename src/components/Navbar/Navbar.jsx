import './styles.css';

import { Button } from 'bootstrap';
import CardWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img alt="sostre" src={'./public/lefties-logo.jpeg'} width={150} />
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
            <CardWidget />
        </div>
    );
};

export default Navbar;