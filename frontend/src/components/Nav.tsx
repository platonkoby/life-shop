import React from 'react'
import {Link} from 'react-router-dom';
import BasketNavEl from './BasketNavEl';



function Nav() {
    return (
        <div className="nav">
            <ul className='nav-list'>
                <li>
                    <Link className="nav-link" to="/">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/rewards">
                        Rewards
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/fines">
                        Fines
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/balance">
                        Balance
                    </Link>
                </li>
            </ul>
            <BasketNavEl />
        </div>
    )
}

export default Nav
