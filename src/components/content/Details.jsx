import React from 'react';
import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
const history = createHistory();

class Details extends React.Component {
    handleClick() {
        history.goBack();
    }
    componentWillMount() {
        this.props.getDetails(0);
       // console.log(this.props.match.params.id);
        //this.details = Array.from(this.props.data.getState().toStore[this.props.match.params.id]);
        //console.log(this.details);

    }
    render() {
        return (
            <article>
                <h2>{ 'this.details.display_title' }</h2>

                <p>{'this.details.summary_short'}</p>
                <button type="button" onClick={this.handleClick}>back</button>
            </article>
        );
    }
}
// Link не подходит! Сбросит фильтры!
function mapStateToProps(state) {
    return { toStore: state.toStore }
}

const getDetails = (id) => {
    return {type: 'DETAILS/GETDATA', id: id };
}
export default connect(mapStateToProps,{ getDetails })(withRouter(Details));