import React  from "react";
import style from "./Dialogs.module.scss";

import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";

const Dialogs = () => {
	const dialogsData = [
		{id: 1, name: "Sasha"},
		{id: 2, name: "Pasha"},
		{id: 3, name: "Hose"},
		{id: 4, name: "Rodrigas"},
		{id: 5, name: "Pol"},
		{id: 6, name: "Roy"},
		{id: 7, name: "Skywalker"},
	];

	return (
		<React.Fragment>
			<h2>Сообщения</h2>
			<div className={style.dialogs}>
				<div>
					<ul>
						<DialogItem name={"Sasha"} id={1}/>
						<DialogItem name={"Pasha"} id={2}/>
						<DialogItem name={"Hose"} id={3}/>
						<DialogItem name={"Rodrigas"} id={4}/>
						<DialogItem name={"Pol"} id={5}/>
						<DialogItem name={"Roy"} id={6}/>
						<DialogItem name={"Skywalker"} id={7}/>
					</ul>
				</div>
				<div>
					<ul>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
						<MessageItem messageText={'Hello'}/>
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}

export  default  Dialogs;