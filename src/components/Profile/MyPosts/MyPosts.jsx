import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData = [
        {
            id: 1,
            message: 'Hi how are you',
        },
        {
            id: 2,
            message: 'Its my first post'
        }
    ]
    return <div className={s.postBlock}>
        My posts
        <div>
            New Post
        </div>
        <Post message = {postData[0].message}/>
        <Post message = {postData[1].message}/>
    </div>
}
export default MyPosts;