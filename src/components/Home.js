import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { 
    BrowserRouter as Router,
    Link
 } from 'react-router-dom'

const Home = () => {

    const [posts, setPosts] = useState([])
    const [postsToShow, setPostsToShow] = useState(5)
    useEffect(() => {
        axios.get('http://localhost:3000/posts').then(res => {
            setPosts(res.data)
        })
    }, [])

    const handleMorePost = () => {
        setPostsToShow((prevValue) => prevValue + 3)
    }

    return (posts ?
        <div className="home">
            {posts.slice(0, postsToShow).map((posts, index) => (
                <div className="home__item" key={index}>
                    <img src={posts.img} className="home__img"/>
                    <div className="home__content">
                        <div className="text--heading">{posts.heading}</div><div className="space__5"></div>
                        <span className="text--a text--date">
                            {posts.date}
                        </span>
                        <span className="text--a">
                            {posts.category}
                        </span>
                        <div className="text--a"> 
                            {posts.details}
                            <Link 
                                to={`/posts/${posts.id}`}
                                className="home__link"
                            >Read more...
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            <button className="btn" onClick={handleMorePost}>
                 More posts <i className="fas fa-long-arrow-alt-right icon__arrow"></i>
            </button>
        </div> : <> </>
        
    )
}

export default Home
