import React from "react";
import style from './Navbar.module.scss';
import {Link} from "react-router-dom";

const Navbar = () => {
	const handleClick = (event) => {
		// li тэги, убираем класс active
		const ul = event.target.parentElement.parentElement.childNodes;
		for (let item of ul) {
			item.firstChild.classList.remove(style.active);
		}
		// добавляем класс active по элементу которому кликнули
		event.target.classList.add(style.active);
	}

	return (
		<nav className={style['nav-link']}>
			<ul onClick={(event) => handleClick(event)}>
				<li><Link className={style.active} to={"/profile"}>Профиль</Link></li>
				<li><Link  to={"/dialogs"}>Диалоги</Link></li>
				<li><Link  to={"/news"}>Новости</Link></li>
				<li><Link  to={"/music"}>Музыка</Link></li>
				<li><Link  to={"/settings"}>Настройки</Link></li>
			</ul>
		</nav>
	)
}

export default Navbar;