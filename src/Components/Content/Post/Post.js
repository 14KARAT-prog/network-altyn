import React from "react";
import style from './Post.module.scss';

const Post = ({ avaImg='', text='', like=0 }) => {
	return (
		<div className={style['content-post']}>
			<div>
				<img align={'top'} src={avaImg} alt={'error img'} />
			</div>
			<div className={style['post-text']}>
				<p>{text}</p>
			</div>
			<div className={style['post-like']}>
				<span>
					{like}
				</span>
				<button>like</button>
			</div>
		</div>
	)
}

export default Post;