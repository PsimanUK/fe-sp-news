import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';

class Articles extends Component {

    state = {
        articles: [{
            author: '',
            title: '',
            article_id: '',
            topic: '',
            created_at: '',
            votes: '',
            comment_count: '',
        }],
        isMounted: false,
        currentTopic: ''
    }

    render() {
        if (this.state.isMounted === false) return <p>Fetching Articles...</p>
        return (
            <main >
                {this.state.articles.map((article) => {
                    return <ArticleCard key={article.article_id} article={article} />
                })}
            </main>
        );
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { topic_slug } = this.props;
        console.log(topic_slug, '<-- the slug topic')
        if (topic_slug !== this.state.currentTopic) {
            api.fetchArticles(topic_slug).then((response) => {
                console.dir(response, '<-- response in cDU')
                this.setState({ articles: response.articles, isMounted: this.state.isMounted, currentTopic: topic_slug })
            })
        }
    }

    componentDidMount = () => {
        console.log('Articles Mounted!')
        api.fetchArticles().then(({ articles }) => {
            console.log(articles, 'the mounted articles')
            this.setState({ articles, isMounted: true, currentTopic: 'all' })

        })
    };

}

export default Articles;

// { data: { articles } }