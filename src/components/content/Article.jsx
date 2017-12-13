import React from 'react';
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'

function Article({ byline, multimedia, display_title, id }) {
    const handleClick = () => {
        console.log();
    }
    const src = multimedia.src || '';
    return (
        <article className="mdc-card__primary">
            <h2 className="mdc-card__title mdc-card__title--large">{ display_title }</h2>
            <img src={ src } alt="here is stuff"/>
            <p>{ byline }</p>
            <Link to={ "/content/" + id } onClick={ handleClick }>Open</Link>
        </article>
    );

}
/*
Article.PropTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}*/
// Передать параметры через LINK ?
export default Article;