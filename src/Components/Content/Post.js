import React from "react";
import style from './Post.module.scss';

const Post = ({ avaImg='', text='', like=0 }) => {
	return (
		<div className={style['content-post']}>
			<img src={avaImg} />
			{text}
			{like}
		</div>
	)
}

export default Post;