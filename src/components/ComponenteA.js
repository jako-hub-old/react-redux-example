import React from 'react';
import PropTypes from 'prop-types';
import {
    withGlobal,
} from '../providers';


class ComponenteA extends React.PureComponent {
    render() {
        const {onChangeInput, title} = this.props; 
        return (
            <div>
                <h2>Soy componente A</h2>
                <p>Y el título es: {title} </p>
                <input value = { title } onChange = {({target:{value}}) => onChangeInput(value)} />
            </div>
        );
    }
}

ComponenteA.propTypes = {
    title : PropTypes.string,
};

export default withGlobal(ComponenteA);