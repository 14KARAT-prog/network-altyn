import React from "react";
import style from './Content.module.scss';
import Post from './Post/Post';
import Profile from "./Profile/Profile";

const Content = ({ postsData }) => {

	return (
		<React.Fragment>
			<Profile />
			{postsData.map((item) => {
				return <Post
					key={`${item.id}_${item.text}`}
					avaImg={item.avaImg}
					text={item.text}
					like={item.like}
				/>
			})}
		</React.Fragment>
	)
}

export default Content;