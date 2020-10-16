import React, { useEffect, useState } from 'react';
import ServiceTable from '../ServiceTable/ServiceTable';

const AdminServiceListBody = () => {
    const [allService, setAllService] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-river-24454.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])
    return (
        <div >
            <h2>All Service List: {allService.length} </h2>
            <div className="row" >
                {
                    allService.map(allService => <ServiceTable allService={allService} ></ServiceTable>)
                }
            </div>
        </div>
    );
};

export default AdminServiceListBody;