import React from "react";
import style from './Content.module.scss';
import Post from './Post/Post';
import Profile from "./Profile/Profile";

const Content = () => {
	return (
		<React.Fragment>
			<Profile />
			<Post avaImg={'https://i.yapx.cc/QLJoy.jpg'} text={'blablabla'} like={30}/>
			<Post avaImg={'https://i.yapx.cc/QLJoy.jpg'} text={'blablabla'} like={30}/>
			<Post avaImg={'https://i.yapx.cc/QLJoy.jpg'} text={'blablabla'} like={30}/>
			<Post avaImg={'https://i.yapx.cc/QLJoy.jpg'} text={'blablabla'} like={30}/>
			<Post avaImg={'https://i.yapx.cc/QLJoy.jpg'} text={'blablabla'} like={30}/>
			<Post avaImg={'https://i.yapx.cc/QLJoy.jpg'} text={'blablabla'} like={30}/>
			<Post avaImg={'https://i.yapx.cc/QLJoy.jpg'} text={'blablabla'} like={30}/>
			<Post avaImg={'https://i.yapx.cc/QLJoy.jpg'} text={'blablabla'} like={30}/>
		</React.Fragment>
	)
}

export default Content;