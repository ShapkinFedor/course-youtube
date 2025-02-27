import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

const About = () => {
    return (
        <div>
            <h1>
                Это приложение создано в качестве показателя труда Феди
            </h1>
            <Link to={"/posts"}>
                <MyButton>To posts</MyButton>
                </Link>
        </div>
    );
};

export default About;