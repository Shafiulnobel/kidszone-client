import React from 'react';
import Swal from 'sweetalert2';

const AddCategory = () => {
    const handleAddCategories = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const title = form.get('title');
        const image = form.get('image');
        const data = new FormData();
        data.append('image',image)
        fetch('https://api.imgbb.com/1/upload?key=513f7edddf0a7e2cced65e9085374bfe',{
            method:'POST',
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            const userData = {
                title,
                image: data.data.url
            }

            fetch('https://kidszone-server.vercel.app/categories', {
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
                        text: 'Category Added Successfully',
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
                    <form onSubmit={handleAddCategories} className="card-body"  encType="multipart/form-data">
                        <div className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Enter Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Image</span>
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

export default AddCategory;