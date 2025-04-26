import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation-sidebar'>
            <nav>
        <ul>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/apresentation">Apresentation</Link>
            </li>
            <li>
            <Link to="/register">Register</Link>
            </li>
            <li>
            <Link to="/home">Home</Link>
            </li>
            <li>
            <Link to="/quiz">Quiz</Link>
            </li>
            <li>
            <Link to="/escolhasunidades">Escolhas Unidades</Link>
            </li>
            <li>
            <Link to="/apresentationatv">Apresentation ATV</Link>
            </li>
            <li>
            <Link to="/resultcongratulation">Result Congratulation</Link>
            </li>
            <li>
            <Link to="/resultinsufficient">Result Insufficient</Link>
            </li>        
        </ul>
        </nav>
        </div>
        
    );
}

export default Navigation;