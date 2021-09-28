import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import SingleUser from '../SingleUser/SingleUser'
import classes from './User.module.css'
const Users = ({ laoding, currentUser }) => {
    if (laoding) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    const singleData = currentUser.map((user,ind) => <SingleUser key={ind}  user={user}></SingleUser>)

    return (
        <div className={classes.userArea}>
            <div className="row">
                {singleData}
            </div>

        </div>
    );
};

export default Users;