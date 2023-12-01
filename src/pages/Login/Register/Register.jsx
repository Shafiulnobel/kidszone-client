import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_design_2.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';
const Register = () => {
    const{createUser} = useContext(AuthContext);
    useTitle('Register')
    const handleRegister = e =>{
        e.preventDefault();
          const form = new FormData(e.target)
          const name = form.get('name');
          const email = form.get('email');
          const password = form.get('password');
          const image = form.get('image');
  
          const data = new FormData();
          data.append('image',image)
          fetch('https://api.imgbb.com/1/upload?key=513f7edddf0a7e2cced65e9085374bfe',{
              method:'POST',
              body:data
          })
          .then(res=>res.json())
          .then(data=>{
            //   const userData = {
            //       title,
            //       date,
            //       description,
            //       image: data.data.url
            //   }
        createUser(email,password)
        .then((result) => {
            // Signed up 
            const user = result.user;
            console.log(user)
            updateUserData(user,name,data.data.url)
          })
          .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            console.error(error);
        });

          })
  

    }
    const updateUserData = (user,name,image) =>{
         updateProfile(user,{
            displayName:name,
            photoURL:image
         })
         .then(() => {
            console.log('user name & photo updated')
          }).catch((error) => {
           console.log(error)
          });
    }
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-5xl font-semibold text-gray-900 dark:text-white">
                <img className="  mr-2" src={logo} alt="logo"/>
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign up to your account
                    </h1>
                    <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""/>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div>
                            <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
                            <input type="file" name="image" id="image" placeholder="image" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 file-input file-input-bordered max-w-xs" />
                        </div>
                        <div className="flex items-center justify-end">

                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account yet? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;