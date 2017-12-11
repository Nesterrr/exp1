import React from 'react';
import PropTypes from 'prop-types'

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

Article.PropTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Article;