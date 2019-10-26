import React, { Component } from 'react';
import Comment from '../comment/Comment';

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div className="post">
                <div className="postHeader">
                    <img src={post.author.avatar} />
                    <div className="postHeaderContent">
                        <label className="author">{post.author.name}</label>
                        <label className="date">{post.date}</label>
                    </div>
                </div>
                <div className="postContent">
                    <span>{post.content}</span>
                </div>
                {
                    post.comments.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                }

            </div>
        );
    }
}

export default Post;