import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeaderBlog from '../HeaderBlog/HeaderBlog'
import QuizGroup from '../QuizGroup/QuizGroup';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <HeaderBlog></HeaderBlog>
            <QuizGroup topics={topics}></QuizGroup>
            
        </div>
    );
};

export default Home;