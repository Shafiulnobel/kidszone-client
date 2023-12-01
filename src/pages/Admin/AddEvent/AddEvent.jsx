import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddEvent = () => {
    const handleAddEvents = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const title = form.get('title');
        const date = form.get('date');
        const description = form.get('description');
        const image = form.get('image');

        const data = new FormData();
        data.append('image',image)
        fetch('https://api.imgbb.com/1/upload?key=e0f5e0e12cad4d44c19a8c06fe331736',{
            method:'POST',
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            const userData = {
                title,
                date,
                description,
                image: data.data.url
            }

            fetch('https://kidszone-server.vercel.app/events', {
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Info Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        })

      



    }
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddEvents} className="card-body"  encType="multipart/form-data">
                        <div className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Event Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Enter Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Event Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered" name='description' placeholder="Enter Description" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Banner</span>
                                </label>
                                <input name='image' type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;