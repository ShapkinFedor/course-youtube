import React from 'react';
import Postitem from "./Postitem";
import '../styles/App.css';

const PostLine = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>

                {
                    posts.map((post, index) => (
                            <Postitem key={post.id} remove={remove} number={index + 1} post={post}/>
                    ))
                }
        </div>
    );
};

export default PostLine;