import React, { Component } from 'react';
import * as api from '../utils/api';

class CommentPoster extends Component {

    state = { commentBody: null, commentSubmitted: false }

    render() {
        return (
            <form onSubmit={this.handleCommentSubmit} >
                <label >Comment:
                    <textarea onChange={this.handleChange} className="comment-input" type="text" name="body" placeholder='Enter your comment here...' required ></textarea>
                </label>
                <button>SUBMIT</button>
            </form>
        );
    }

    componentDidUpdate = (prevProps, PrevState) => {
        if (this.state.commentSubmitted === true) {
            this.setState({ commentBody: null });
        }

    }

    handleCommentSubmit = (event) => {
        event.preventDefault();
        const body = this.state.commentBody;
        const { username, article_id, updateComments } = this.props;
        console.log(username, article_id, '<-- username and id')

        return api.postComment(article_id, username, body).then((response) => {
            console.dir(response.data.comment, '<-- response from postComment in handleCommentSubmit');
            updateComments(response.data.comment);
            console.log(this.state.commentBody, '<-- the comment body')

        }).catch((err) => console.dir(err.response, '<-- error from postComment in handleCommentSubmit'))
    };

    handleChange = (event) => {
        this.setState({ commentBody: event.target.value })
    }
}

export default CommentPoster;