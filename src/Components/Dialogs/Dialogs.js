import React  from "react";
import style from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({ dialogsData= [], messagesData= [] }) => {

	return (
		<React.Fragment>
			<h2>Сообщения</h2>
			<div className={style.dialogs}>
				<div>
					<ul>
						{dialogsData && dialogsData.map((item) => {
							return <DialogItem
								key={`${item.name}_${item.id}`}
								name={item.name}
								id={item.id}
								avaImg={item.avaImg}
							/>
						})}
					</ul>
				</div>
				<div>
					<ul>
						{messagesData && messagesData.map((item) => {
							return <MessageItem
								key={`${item.message}_${item.id}`}
								messageText={item.message}
							/>
						})}
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}

export  default  Dialogs;