import React from 'react';
import { addElement } from '../actions/actions';
import { connect } from 'react-redux';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: ""
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput (e){
        this.setState({name: e.target.value});
    }

    render (){
        const { addElement } = this.props;
        return (
            <div>
                <label>Name: </label>
                <input name="name" value={this.state.name} onChange={this.handleInput}></input>
                <button onClick={() => addElement(this.state.name)}>Add element</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addElement(element){
            dispatch(addElement(element));
        }
    }
}

export default connect (null,mapDispatchToProps)(Form)