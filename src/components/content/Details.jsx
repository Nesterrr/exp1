import React from 'react';
import createHistory from 'history/createBrowserHistory'
import { withRouter } from 'react-router-dom'
const history = createHistory();

class Details extends React.Component {
    handleClick() {
        history.goBack();
    }
    componentWillMount() {

    }
    render() {
        return (
            <article>
                <h2>{ 'Title' }</h2>
                <img src="" alt=""/>
                <p>{ 'summary_short' }</p>
                <button type="button" onClick={this.handleClick}>back</button>
            </article>
        );
    }
}


export default withRouter(Details);