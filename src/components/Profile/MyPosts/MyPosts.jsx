import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";





const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let onAddPost = () =>{
        props.addPost();
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        }

    let postElements = props.posts
        .map(post =>
            <Post message = {post.message}/>
        )

    return <div className={s.postBlock}>
        My posts
        <div>
            New Post
        </div>
        <div>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}/>
        </div>
        <div>
            <button onClick={onAddPost}>Click me</button>
        </div>
        {postElements}
    </div>
}
export default MyPosts;

