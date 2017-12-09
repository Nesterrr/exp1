import React from 'react';
import Article from './Article';

import { connect } from 'react-redux'
import data from '../../fakeData';


class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props.getdata);
    }
    render() {
        return(
        <section className="mdc-card" onClick = {
            () => {
                console.log(this)
                ;}
        }>
            {
                data.results.map((item, key) => <Article key={key} {...item}/>)
            }
        </section>
        );
    };
}
/*{ list.map(article =>
                    <Article {...article}/>
                )}*/

// mapStateToProps(state, ownProps) => object; Вызывается при каждом изменении в store

function mapStateToProps (state) {
   // console.log(state);
    return state;
}

const GETDATA = () => {
    return {type: 'GET_DATA_FROM_API'};
};

export default connect(mapStateToProps, {GETDATA})(Content);