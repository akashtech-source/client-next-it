import React from 'react';
import developer1 from '../../../images/developer1.jpg';
import developer2 from '../../../images/developer2.jpg';
import developer3 from '../../../images/developer3.jpg';
import developer4 from '../../../images/developer4.jpg';
import TeamMember from './TeamMember/TeamMember';

const Teams = () => {
    const teamMembers = [
        {
            img: developer1,
            name: 'Solvina D Naliz',
            position: 'WEB DEVELOPER'
        },
        {
            img: developer2,
            name: 'Jerry D.Silva',
            position: 'UI DESIGNER'
        },
        {
            img: developer3,
            name: 'Michel Z. Jones',
            position: 'CEO & FOUNDER'
        },
        {
            img: developer4,
            name: 'David Walillams',
            position: 'SR CONSULTANT'
        },
    ]
    return (
        <div>
          <div className="mt-5 ms-5 pt-5">
            <h4 className="text-primary">Our Team</h4>
            <h1>Meet Experience <br/> Team Member </h1> 
        </div>
            <div className="row team-main">
                {
                    teamMembers.map(teamMember => <TeamMember teamMember={teamMember}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Teams;