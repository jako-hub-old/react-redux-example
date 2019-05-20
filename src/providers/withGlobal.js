import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeTitle } from '../store/actions/global.actions';

const mapStateToProps = ({global:{title}}) => ({
    title,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onChangeInput : changeTitle,
}, dispatch);

export default WrappedComponent => (connect(mapStateToProps, mapDispatchToProps)(
    class extends React.PureComponent {
        render () {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
));