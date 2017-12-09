import React from 'react';

function Article(props) {
     let src,
     text = props.byline,
        title = props.display_title;
    if(props.multimedia) {
             src = props.multimedia.src;
        } else {
            src = 'my_null';
        }
    return (
        <article className="mdc-card__primary">
            <h2 className="mdc-card__title mdc-card__title--large">{ title }</h2>
            <img src={ src } alt="here is stuff"/>
            <p>{ text }</p>
        </article>
    );
}

export default Article;