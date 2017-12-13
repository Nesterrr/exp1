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
            <section className = "main-header__filters">
                <label for="#42"className="filter-select">
                    <select id="#42" name="auth-name" className="select">
                        <option value="val_1" onInput={ this.handleChange }>Значение 1</option>
                        <option value="val_2" onInput={ this.handleChange }>Значение 2</option>
                        <option value="val_3" onInput={ this.handleChange }>Значение 3</option>
                        <option value="val_4" onInput={ this.handleChange }>Значение 4</option>
                    </select>
                </label>
                <NavLink to={"/content/filters/" + this.props.authName} className="filter-content"><span>auth_name</span></NavLink>
                <NavLink to="/content" className="filter-content"><span>all</span></NavLink>
                <NavLink to="/content/filters/month" className="filter-content"><span>month</span></NavLink>
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