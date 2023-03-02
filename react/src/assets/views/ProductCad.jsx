import React from 'react'
import { Navbar } from './Navbar'

export const ProductCad = ({ product }) => {

    return (

        <div className='col-3'>
            <div className="card">
                <img src={product.product_image_url} className="card-img-top" alt="" />
                <div className="card-body">
                    <h6 className="card-title">{product.product_name}</h6>
                    <h5 className="card-text w-full">Name: {product.author_name} </h5>
                    <h5 className="card-text w-full">Mobile: {product.author_contact_number} </h5>
                    <a href={`/productDetails/${product.id}`} className="btn btn-primary mt-3">View Details</a>
                </div>
            </div>
        </div>

    )
}
