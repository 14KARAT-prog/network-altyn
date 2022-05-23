import React from "react";
import style from './Content.module.scss';
import Post from './Post';

const Content = () => {
	return (
		<React.Fragment>
			<div className={style['img-container']}>
				<img src={'https://i.yapx.cc/QLJoy.jpg'} alt={'not picture'}/>
			</div>
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