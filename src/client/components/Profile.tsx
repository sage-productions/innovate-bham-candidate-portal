import React, { useState, useEffect } from 'react';


const Profile: React.FC<ProfileProps> = props => {
    return (
        <div className="row">
            <div className="col-10">
                <h1 className="text-center">Profile</h1>
            </div>
        </div>
    )
}

interface ProfileProps { }

export default Profile;
