import React from "react";
import {Link} from "react-router-dom";


const DialogItem = ({ name="", id=0 }) => {
	return (
		<li>
			<Link to={`/dialogs/${id}`}>{name}</Link>
		</li>
	)
}

export default DialogItem;

