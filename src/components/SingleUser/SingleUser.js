import React from 'react';
import classes from './SingleUser.module.css'

const SingleUser = ({user}) => {
  const { avatar_url,login,type
} = user;

    return (
        <div className="col-xl-3 col-sm-6 ">
        <div className="mb-5 shadow-lg py-5 px-4  text-center">
        <div className="bg-white rounded   "><img src={avatar_url} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-2"> {login}</h5><h5 className="small text-uppercase text-muted  ">Type : {type}</h5>
            
        </div>
        <a href="#"  className="btn btn-danger  mt-3">Profile Link </a>
        </div>

        
    </div>

    );
};

export default SingleUser;