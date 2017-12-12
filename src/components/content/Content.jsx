import React from 'react';
import Article from './Article';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
let offset = 0;
class Content extends React.Component {
    constructor() {
        super();

        this.filter = this.filter.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.action();
    }

    filter(match) {
        this.data = Object.values(this.props.myState);

        switch(match.url) {
            case '/content/filters/month':
                return this.data.filter((item) => {
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
        this.props.actionNext(offset);
    }
    render() {
        return (
            <section className="mdc-card" onClick={ this.handleClick }>
                { this.filter(this.props.match).map((item, key) => <Article key={key} {...item}/>) }
            </section>
        );
    };
}

Content.propTypes ={
    myState: PropTypes.array.isRequired
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
export default connect(mapStateToProps, { action, actionNext })(Content);