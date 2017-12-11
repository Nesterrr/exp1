import React from 'react';
import Article from './Article';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Content extends React.Component {
    constructor() {
        super();

        this.filter = this.filter.bind(this);
    }

    componentWillMount() {
        this.props.action();
    }

    filter(match) {
        this.data = Object.values(this.props.myState);
        console.log(match.params.filter);
       // return this.data;

        switch(match.params.filter) {
            case '':
                return this.data;

            case '/filters/auth':
                return this.data.filter(item => item.byline === this.props.filterState);

            case '/filters/month':
                return this.data;

            default:
                return this.data;
        }

        //this.res = this.data.filter(item => hash.params.filter === filter);
    }

    render() {
        return (
            <section className="mdc-card">
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
export default connect(mapStateToProps, { action })(Content);