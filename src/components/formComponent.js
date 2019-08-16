import React, {useState} from 'react';
import { addElement } from '../actions/actions';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    }
}));

const Form = (props) => {
    const { addElement } = props;
    const style = useStyles();
    const {inputs, handleInputChange, handleSubmit} = useForm();

    return (
        <div>
            <label>Name: </label>
            <input name="name" value={inputs.name} onChange={handleInputChange} required/>
            <Button variant="contained" color="primary" className={style.button} onClick={() => {addElement(inputs.name)}}>Add element</Button>
        </div>
    )
};

const useForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        };
        callback();
    }; // I think that this function is to handle the required fields in the form

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return {
        handleInputChange,
        inputs,
        handleSubmit
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addElement(element){
            dispatch(addElement(element));
        }
    }
};

export default connect (null,mapDispatchToProps)(Form)
