import React, { Component } from 'react';
import Header from './header/Header';
import PostList from './postList/PostList';

import './Facebook.css';

class Facebook extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="content">
                    <PostList />
                </div>
            </>
        );
    }
}

export default Facebook;