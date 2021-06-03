import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAunthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={ (props) => (
                ( !isAunthenticated )
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />) 
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}