import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const useHandleCart = () => {
    const{user} = useContext(AuthContext)
    const handleCart = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const image = form.image.value;
        const new_price = form.new_price.value;
        const newCart = {title,email,image,new_price};

         if(user){
            fetch('https://kidszone-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify(newCart)
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data)
                  if (data.insertedId) {
                    Swal.fire({
                      title: 'Success!',
                      text: 'Your Product Successfully Added to the cart',
                      icon: 'success',
                      confirmButtonText: 'Ok'
                    })
                    refetch();
                  }
                })
         }
 }
    return [handleCart]
};

export default useHandleCart;