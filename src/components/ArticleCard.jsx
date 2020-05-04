import React from 'react';
// import utils here

const ArticleCard = (props) => {
    const { author,
        title,
        article_id,
        topic,
        created_at,
        votes,
        comment_count }
        = props.article;

    // const formattedDate = utils.formatDate(created_at);
    console.log(created_at)
    return (
        <article className="card" key={article_id}>
            <div className="column-one">
                <p className="card__topic" >TOPIC: {topic}</p>
                <h3 className="card__title" >{title}</h3>
                <p className="card__date">{formattedDate}</p>
            </div>
            <div className="column-two">
                <p className="card__votes">VOTES: {votes}</p>
                <p className="card__comment-count">COMMENTS: {comment_count}</p>
            </div>
            <div className="column-three">
                <button className="card__button">HIDE</button>
                <p className="card__author" >{author}</p>
            </div>
        </article>
    );
};

export default ArticleCard;