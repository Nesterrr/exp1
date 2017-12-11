import React from 'react';
import Article from './Article';
import { connect } from 'react-redux'


class Content extends React.Component {
    componentWillMount() {
        this.props.action();
    }

    render() {
        return (
            <section className="mdc-card">
                {
                    Object.values(this.props.myState).map((item, key) => <Article key={key} {...item}/>)
                }
            </section>
        );
    };
}
function mapStateToProps (state) {
    return {myState: state.toStore};
}

const GETDATA = () => {
    return {type: 'GET_DATA_FROM_API'};
};
const action = () => {
    return { type: 'CONTENT/FETCH' }
}
export default connect(mapStateToProps, { action })(Content);