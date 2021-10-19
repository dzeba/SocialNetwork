import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img src='data:image/jpeg;base64,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'/>
            {props.message}
        </div>
    </div>
}
export default Post;