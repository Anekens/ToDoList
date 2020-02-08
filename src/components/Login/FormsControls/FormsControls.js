import React from 'react'
import s from './FormsControls.module.css'
import {Field} from "redux-form";
import {Input} from "antd";

const FormControl = ({ meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};


export const InputType = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><Input {...input} {...restProps}/></FormControl>
};

export const createField = (placeholder, name, validate, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validate}
               component={component}
               {...props}/>{text}
    </div>);



