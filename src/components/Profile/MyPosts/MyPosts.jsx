import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";




const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let addPostAction = () =>{
        props.dispatch(addPostActionCreator())
    }
    let updateNewPost = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text))
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
            <textarea onChange={updateNewPost}
                      ref={newPostElement}
                      value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPostAction}>Click me</button>
        </div>
        {postElements}
    </div>
}
export default MyPosts;

