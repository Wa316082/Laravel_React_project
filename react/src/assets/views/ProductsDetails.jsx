import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axiosClient from '../../axios-client';
import { Navbar } from './Navbar';

export const ProductsDetails = () => {
    const [product, setproduct] = useState({})
    const url = useLocation();
    const id = url.pathname.split('/')[2];

    useEffect(() => {
        axiosClient.get(`/details/${id}`)
            .then(({ data }) => {
                setproduct(data.product);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })
    }, []);
    console.log(product);
    return (
        <>
            <Navbar />

            <div className="w-50 card mb-3 mt-3 mx-4">
                <img src={product.product_image_url} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {product.product_name} </h5>
                    <h5 className="card-title"> Product Brand: {product.barnd_name} </h5>
                    <h6 className="card-title"> Product Author Name:  {product.author_name} </h6>
                    <h6 className="card-title">Author Contact Number: {product.author_contact_number} </h6>
                    <h6 className="card-title">Product Price: {product.product_price} </h6>
                    <p className="card-text"> {product.product_details} </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </>
    )
}
