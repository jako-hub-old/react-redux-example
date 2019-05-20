import React from 'react';
import PropTypes from 'prop-types';
import {withGlobal} from '../providers';

class ComponenteB extends React.PureComponent {
    render() {
        const {onChangeInput, title} = this.props; 
        return (
            <div>
                <h2>Soy componente B</h2>
                <p>Y el título es: {title} </p>
                <input value = { title } onChange = {({target:{value}}) => onChangeInput(value)} />
            </div>
        );
    }
}

ComponenteB.propTypes = {
    title : PropTypes.string,
};

export default withGlobal(ComponenteB);