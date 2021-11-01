import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'postText'}
                   placeholder={"Enter message post"} validate={[required,maxLength10]}
            />
        </div>
        <div>
            <button>Click me</button>
        </div>
        </form>
    </div>
}
const MyPostReduxForm = reduxForm ({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


const MyPosts = (props) => {


    let postElements = props.posts
        .map(post =>
            <Post message={post.message}/>
        )
    const onSubmit = (values) =>{
        props.addPost(values.postText)
    }

    return <div className={s.postBlock}>
        My posts
        <div>
            New Post
        </div>
        <MyPostReduxForm onSubmit ={onSubmit}
        />

        {postElements}
    </div>
}
export default MyPosts;

