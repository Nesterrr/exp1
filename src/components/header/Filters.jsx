import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Filters extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
       const filterInput = event.target.value;

       this.props.filterAction(filterInput);
    }

    render() {
        return (
            <section className = "filters">
                <label>
                    <NavLink to={"/filters/" + this.props.authName}>auth name</NavLink>
                    <input type="text"  onInput={ this.handleChange } required/>
                </label>
                <NavLink to="/">all</NavLink>
                <NavLink to="/filters/month">month</NavLink>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { authName: state.filter};
}

const filterAction = (name) => {
    return {type: 'FILTERSTATE/NAME', name: name}
}
export default connect(mapStateToProps,{ filterAction })(Filters);