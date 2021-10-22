import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPostAction = () =>{
        props.addPost()

    }
    let addPostChange = () =>{
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
            <textarea onChange={addPostChange}
                      ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPostAction}>Click me</button>
        </div>
        {postElements}
    </div>
}
export default MyPosts;