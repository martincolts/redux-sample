import React from 'react';
import { deleteElement } from '../actions/actions';
import { connect } from 'react-redux';

const List = (props) => {
    const { elements } = props;
    if (elements) {
        return props.elements.map(element => {
            return (
                <div key={element}>
                    <div> { element } </div>
                    <button onClick={() => props.deleteElement(element)}>x</button>
                </div>
            )
        });
    } else return null;
};

const mapStateToProps = state => {
    return {
        elements: state.elements
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteElement(element) {
            dispatch(deleteElement(element))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
