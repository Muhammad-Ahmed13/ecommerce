 import React from 'react';
import '../App.css';



const Header = (props) => {
    return (
        <div className='flex header' >
            <div onClick={() => props.handleShow(false)}>  Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}>Cart
                <sup>{props.count}</sup>
            </div>
        </div>
    )
}

export default Header;

/* import '../App.css';

function Header(props) {
    return (
        <div className='flex header'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div > Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header; */