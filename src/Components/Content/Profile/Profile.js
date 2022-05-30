import React, {useState} from "react";
import style from "./Profile.module.scss";

const Profile = () => {
	const [textPost, setTextPost] = useState('')
	const handleClick = (event) => {
		if (textPost === style.active) {
			setTextPost('')
		} else {
			setTextPost(style.active);
		}
	}
	return (
		<React.Fragment>
			<div className={style['img-container']}>
				<img src={'https://i.yapx.cc/QLJoy.jpg'} alt={'not picture'}/>
			</div>
			<button className={textPost} onClick={(e) => handleClick(e)}>Опубликовать новость</button>
			<textarea className={textPost}></textarea>
		</React.Fragment>
	)
}

export default Profile;