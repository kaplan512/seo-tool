import React from 'react';
import PropTypes from 'prop-types';
// import {BRAND_COLOR} from "../constants";
// import './style.scss';

const Textarea = (props) => {
    const {
        title,
        titleClass,
        checkboxClass,
        brandColorTitle,
        titleStyle,
        contClass,
        required,
        onChanged,
        value,
        name
    } = props;

    let titleCss = {};
    // if (brandColorTitle) {
    //     titleCss = {color: BRAND_COLOR}
    // }
    // titleCss = {...titleCss, ...titleStyle};
    return (
        <div className={contClass}>
            <textarea
                onChange={(e) => onChanged(e)}
            />
            {/*<label className={`checkbox-label`}>*/}
            {/*    <span className={`checkbox-title ${titleClass}`}*/}
            {/*          style={titleCss}>{title}</span>*/}
            {/*    <textarea*/}
            {/*    />*/}
            {/*    <input type="checkbox"*/}
            {/*           onChange={(e) => onChange(e)}*/}
            {/*           className={checkboxClass}*/}
            {/*           checked={value}*/}
            {/*           name={name}*/}
            {/*           required={required}/>*/}
            {/*    <span className="checkmark"/>*/}
            {/*</label>*/}
        </div>
    )
};

Textarea.propTypes = {
    title: PropTypes.node.isRequired,
    titleClass: PropTypes.string,
    checkboxClass: PropTypes.string,
    brandColorTitle: PropTypes.bool,
    titleStyle: PropTypes.object,
    contClass: PropTypes.string,
    required: PropTypes.bool
};

export {Textarea};
