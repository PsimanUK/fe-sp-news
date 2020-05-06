import axios from 'axios';

export const fetchArticles = (topic, sort_by, order) => {
    console.dir(`The topic is ${topic}, the sort_by is ${sort_by} and the order is ${order}.`)
    // WHY CAN"T I ACCESS AN OBJECT KEY ON PROPS WHEN I CAN LOG PROPS

    //const { topic, article_id } = props;
    //console.log(`The topic on the props is ${props.topic} and the article_id on the props is ${props.article_id}, which were received by fetchArticles`)

    return axios.get('https://sp-news.herokuapp.com/api/articles', { params: { topic, sort_by } }).then(({ data }) => {
        return { articles: data.articles };
    })
    // .catch((error) => {
    //     console.log(error, '<-- fetchArticles Error')
    // })
};

export const fetchIndividualArticle = (article_id) => {
    return axios.get(`https://sp-news.herokuapp.com/api/articles/${article_id}`).then(({ data }) => {
        return data.article;
    })
    // .catch((error) => {
    //     console.log(error, '<-- fetchIndividualArticle Error')
    // })
};

export const fetchComments = (article_id) => {
    return axios.get(`https://sp-news.herokuapp.com/api/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments;
    })
    // .catch((error) => {
    //     console.log(error, '<-- fetchComments Error')
    // })
};

export const fetchTopics = () => {
    return axios.get('https://sp-news.herokuapp.com/api/topics').then((response) => {
        return response;
    })
    // .catch((error) => {
    //     console.log(error, '<-- fetchTopics Error')
    // })
};

export const postComment = (article_id, username, body) => {

    return axios.post(`https://sp-news.herokuapp.com/api/articles/${article_id}/comments`, { username, body })
        .then((response) => {
            return response;
        })
};

export const updateArticleVote = (article_id, voteChange) => {
    console.log(article_id, '<-- the article needing vote change and ', voteChange, '<-- the requested vote change amount')
    return axios.patch(`https://sp-news.herokuapp.com/api/articles/${article_id}`, { inc_votes: voteChange })
        .then((response) => {
            return response;
        })
};

export const updateCommentVote = (comment_id, voteChange) => {
    //console.log(article_id, '<-- the article needing vote change and ', voteChange, '<-- the requested vote change amount')
    return axios.patch(`https://sp-news.herokuapp.com/api/comments/${comment_id}`, { inc_votes: voteChange })
        .then((response) => {
            return response;
        })
};

export const deleteComment = (comment_id) => {
    return axios.delete(`https://sp-news.herokuapp.com/api/comments/${comment_id}`)
        .then((response) => {
            return response;
        })
}