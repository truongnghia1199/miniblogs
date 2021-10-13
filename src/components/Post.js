import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Post = () => {
    const [posts, setPosts] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`).then(res => {
            setPosts(res.data)
            })
    }, [id])
    console.log(posts);
    return (posts?.id ?
        <div className="home__item">
            <img src={posts.img} alt="home__img" className="home__img"/>
            <div className="home__content">
                <div className="text--heading">{posts.heading}</div><div className="space__5"></div>
                <span className="text--a">
                    {posts.date}
                </span>
                <span className="text--a">
                    {posts.category}
                </span>
                <div className="text--a"> 
                    {posts.details}
                </div>
            </div>
        </div> : <> </>
    )
}

export default Post
