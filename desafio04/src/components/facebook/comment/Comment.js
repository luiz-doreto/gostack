import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const { comment } = this.props;
        
        return (
            <div className="comment">
                <img src={comment.author.avatar}></img>
                <div className="commentBody">
                    <label className="author">{comment.author.name}</label>
                    <span>{comment.content}</span>
                </div>
            </div>
        );
    }
}

export default Comment;