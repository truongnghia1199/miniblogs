import React from 'react'

const Author = () => {
    return (
        <div className="author">
            <img src="./images/author.jpg" className="author__img"/>
            <div className="text--3">
                Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.
            </div>
            <hr className="hr__1px"/>
            <div className="text--3">
                Featured Posts:
            </div>
            <div className="text--a">
                According a funnily until pre-set or arrogant well cheerful
            </div>
            <div className="text--a">
                Overlaid the jeepers uselessly much excluding
            </div>
            <hr className="hr__2px"/>
            <div className="text--a">
                <a href=" #">
                    <i className="fab fa-facebook-square icon"></i>
                    </a>
                <a href=" #">
                    <i className="fab fa-instagram icon"></i>
                    </a>
                <a href=" #">
                    <i className="fab fa-twitter icon"></i>
                </a>
                <a href=" #">
                    <i className="fab fa-linkedin-in icon"></i>
                </a>
            </div>
            <div className="text--a">
                BUILD WITH WEBFLOW
            </div>
        </div>
    )
}

export default Author
