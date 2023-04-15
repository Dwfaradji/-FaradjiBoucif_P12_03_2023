import React from 'react';
import "./MyKeyData.scss"
import PropTypes from 'prop-types'

/**
 * MyKeyData is a component that displays an icon, a title, and a value.
 * @param {Object} props - The properties of the component.
 * @param {String} props.icon - The path to the icon.
 * @param {String} props.color - The color of the icon.
 * @param {String} props.title - The title of the content.
 * @param {String|Number} props.value - The value of the content.
 * @returns {JSX.Element} - The MyKeyData component.
 */
const MyKeyData = ({icon, color, title, value}) => {
    return (
        <div className="content">
            <div className="icon-content" style={{backgroundColor: `${color}80`, opacity: 1}}>
                <img src={icon} alt=""/>
            </div>
            <div className="value">
                <div> {value}</div>
                <div> {title}</div>
            </div>
        </div>
    );
};

MyKeyData.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default MyKeyData;