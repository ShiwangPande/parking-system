import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Route, Link } from 'react-router-dom'

const PrivateRoute = ({ component: RouteCompenent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
            <Route {...rest} render={routeProps => {
                !!currentUser ?( <RouteCompenent {...routeProps} />) : (<Link to="/login" />)
            }} />
    )
}

export default PrivateRoute