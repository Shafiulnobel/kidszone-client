import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
const AllUsers = () => {
    const[volunteers,setVolunteers] = useState([])
    useEffect(()=>{
        fetch('https://kidszone-server.vercel.app/bookings')
        .then(res=>res.json())
        .then(data=>setVolunteers(data));
    },[])
    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://kidszone-server.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = volunteers.filter(volunteer => volunteer._id !== id)
                        setVolunteers(remaining)
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registration date</th>
                        <th>Volunteer list</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through volunteers and render rows */}
                    {volunteers.map(volunteer => (
                        <tr key={volunteer._id} className="bg-base-200">
                            <td>{volunteer.name}</td>
                            <td>{volunteer.email}</td>
                            <td>{volunteer.date}</td>
                            <td>{volunteer.title}</td>
                            <td>
                                {/* Add action buttons or other actions */}
                                <button onClick={()=>handleDelete(volunteer._id)}><MdDelete className='text-red-800 text-2xl'/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;