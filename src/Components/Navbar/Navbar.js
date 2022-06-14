import React, {useState} from "react";
import style from './Navbar.module.scss';
import {Link} from "react-router-dom";

const Navbar = ({navLink = []}) => {
	const [activeItem, setActiveItem] = useState(null)
	const handleClick = (index) => {
		// Добавляем в стейт активный тэг
		setActiveItem(index);
	}

	return (
		<nav className={style['nav-link']}>
			<ul>
				{navLink && navLink.map((item, index) => {
					return (<li key={`${item.id}_${item.textLink}`} >
						<Link className={activeItem === index ? style.active: ''}
							  to={item.link}
							  onClick={() => handleClick(index)}>
							{item.textLink}
						</Link>
					</li>)
				})}
			</ul>
		</nav>
	)
}

export default Navbar;