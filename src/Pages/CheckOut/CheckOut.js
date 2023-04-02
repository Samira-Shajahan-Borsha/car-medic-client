import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const CheckOut = () => {

    const { _id, title, price } = useLoaderData();

    const { user } = useContext(AuthContext);

    console.log('inside checkout page', user);

    useTitle('Checkout');

    const handlePlaceOrder = event => {

        event.preventDefault();

        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        };

        //input validation
        /* if (phone.length > 10) {
            alert('Phone should be 10 characters or longer');
        }
        else {

        } */

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('car-medic-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order placed successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))



    }
    return (
        <div className='w-3/4 mx-auto my-14'>
            <h2 className='text-4xl font-normal'>You are about to order: <span className='font-semibold'>{title}</span></h2>
            <h2 className='text-3xl font-normal'>{price}</h2>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full mb-2 text-base" placeholder="Your Message" required></textarea>
                <input type="submit" className='btn border-0 w-full text-base bg-orange-600 hover:bg-orange-600 normal-case' value="Order Confirm" />
            </form>
        </div>
    );
};

export default CheckOut;