import '../pages/css/card.css'
import React from 'react';
const Fragment = React.Fragment;

const Card = ({ posts }) => {
    // console.log('posts - ', posts);
    return (
    <Fragment>
        {posts.map(post => (
            <div className="card">
                <div className="list-item">
                    <a href={post.link} target="blank">{post.content}</a>
                </div>
            </div>
        ))}
    </Fragment>
)};

export default Card;
