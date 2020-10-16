import React from 'react';

const ServiceTable = (props) => {
    const { name, email, project, projectInfo } = props.allService;
    return (
        <div>
            <table className="table table-borderless" >
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">ProjectInfo</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> {name} </td>
                        <td> {email} </td>
                        <td> {project} </td>
                        <td> {projectInfo} </td>
                    </tr>
                </tbody>



            </table>
        </div>

    );
};

export default ServiceTable;