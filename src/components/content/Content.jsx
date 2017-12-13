import React from 'react';
import Article from './Article';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

let offset = 0;
let flag = false;

class Content extends React.Component {
    constructor() {
        super();

        this.filter = this.filter.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        if(!flag) {
            this.props.action();
        }
        flag = true;
    }

    filter(match) {
        this.data = Object.values(this.props.myState);

        switch(match.url) {
            case '/content/filters/month':
                return this.data.filter((item) => {
                   // item.p
                    return item.byline;
                });

            case '/content/filters/' + match.params.filter:
                return this.data.filter((item) => {
                    return item.byline === match.params.filter;
                });

            case '/content/':
                return this.data;

            default:
                return this.data;
        }
    }
    handleClick() {
        offset = offset + 20;
        console.log(offset);
        this.props.actionNext(offset);
    }
    render() {
        return (
            <section className="mdc-card">
                { this.filter(this.props.match).map((item, key) => <Article key={ key } id={ key } {...item}/>) }
                <button type="button" onClick={ this.handleClick }>Next</button>
            </section>
        );
    };
}


function mapStateToProps (state) {
    return { myState: state.toStore, filterState: state.filter.name };
}

const action = () => {
    return { type: 'CONTENT/FETCH' }
}
const actionNext = () => {
    return { type: 'CONTENT/NEXT', offset: offset }
}

export default connect(mapStateToProps, { action, actionNext })(withRouter(Content));