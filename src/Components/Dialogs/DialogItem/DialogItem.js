import React from "react";
import {Link} from "react-router-dom";
import style from './DialogItem.module.scss';


const DialogItem = ({ name="", id=0, avaImg = '' }) => {
	return (
		<li className={style.dialog}>
			<img src={avaImg} alt={'img error'}/>
			<Link to={`/dialogs/${id}`}>{name}</Link>
		</li>
	)
}

export default DialogItem;

