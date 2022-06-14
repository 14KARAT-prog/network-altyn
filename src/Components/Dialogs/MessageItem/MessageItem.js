import React from "react";
import style from './MessageItem.module.scss';

const MessageItem = ({ messageText }) => {
	return (
		<li className={style.message}>
			{messageText}
		</li>
	)
}

export default MessageItem;