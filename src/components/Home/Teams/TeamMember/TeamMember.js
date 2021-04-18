import React from 'react';
import './TeamMember.css'
const TeamMember = ({teamMember}) => {
    return (
        <div className="col-md-4 member-container">
            <img style={{width: "210px"}} src={teamMember.img} alt=""/>
            <div className="developer">
            <h4>{teamMember.name}</h4>
            <p>{teamMember.position}</p>
            </div>
        </div>
    );
};

export default TeamMember;