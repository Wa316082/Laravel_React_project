import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import { Navbar } from './Navbar';
import { ProductCad } from './ProductCad'


export default function ProductView() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosClient.get('/getProducts')
            .then(({ data }) => {
                setProducts(data.products);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })
    }, []);

    return (
        <>
            <Navbar />

            <div className='w-full p-4 row m-0'>
                {products.map(product => (<ProductCad key={product.id} product={product} />))}
            </div>

        </>
    )
}
