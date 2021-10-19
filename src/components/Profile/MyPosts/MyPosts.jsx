import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        {
            id: 1,
            message: 'Hi how are you',
        },
        {
            id: 2,
            message: 'Its my first post'
        }
    ]
    let postElements = posts
        .map(post =>
            <Post message = {post.message}/>
        )

    return <div className={s.postBlock}>
        My posts
        <div>
            New Post
        </div>
        {postElements}
    </div>
}
export default MyPosts;