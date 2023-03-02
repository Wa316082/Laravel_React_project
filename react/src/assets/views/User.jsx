import React, { useRef } from 'react'
import axiosClient from '../../axios-client';

export default function User() {
    const productNameRef = useRef();
    const barndNameRef = useRef()
    const authorNameRef = useRef()
    const authorContactNumberRef = useRef()
    const authorEmailRef = useRef()
    const productPriceRef = useRef()
    const productImageUrlRef = useRef()
    const productCategoryRef = useRef()
    const productDetailslRef = useRef()


    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            product_name: productNameRef.current.value,
            barnd_name: barndNameRef.current.value,
            author_name: authorNameRef.current.value,
            author_contact_number: authorContactNumberRef.current.value,
            author_email: authorEmailRef.current.value,
            product_price: productPriceRef.current.value,
            product_image_url: productImageUrlRef.current.value,
            product_category: productCategoryRef.current.value,
            product_details: productDetailslRef.current.value,
        }
        axiosClient.post('/createProduct', payload)
            .then(({ data }) => {
                console.log(data)
                productNameRef.current.value = ''
                barndNameRef.current.value = ''
                authorNameRef.current.value = ''
                authorContactNumberRef.current.value = ''
                authorEmailRef.current.value = ''
                productPriceRef.current.value = ''
                productImageUrlRef.current.value = ''
                productCategoryRef.current.value = ''
                productDetailslRef.current.value = ''
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })
    }

    return (
        <>
            <div className='card'>

                <form onSubmit={handleSubmit} className='row '>
                    <div className="mb-3 col-6">
                        <label htmlFor="name" className="form-label">Prouct Name</label>
                        <input ref={productNameRef} type="text" id='name'
                            placeholder='Enter Product Name' className="form-control" />

                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="brand" className="form-label">Brand Name</label>
                        <input ref={barndNameRef} type="text" className="form-control" placeholder='Enter Product Brand Name' id="brand" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="author" className="form-label">Author Name</label>
                        <input ref={authorNameRef} type="text" className="form-control" placeholder='Enter Product Author Name' id="author" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="author_contact" className="form-label">Author Contact Number</label>
                        <input ref={authorContactNumberRef} type="number" className="form-control" placeholder='Enter Author Contact Number' id="author_contact" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="author_email" className="form-label">Author Email</label>
                        <input ref={authorEmailRef} type="email" className="form-control" placeholder='Enter Author Email' id="author_email" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="product_price" className="form-label">Product Price</label>
                        <input ref={productPriceRef} type="number" className="form-control" placeholder='Enter Product Price' id="product_price" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="product_image" className="form-label">Product Image Url</label>
                        <input ref={productImageUrlRef} type="text" className="form-control" placeholder='Enter Product Image Url' id="product_image" />
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="product_image" className="form-label">Product Category</label>
                        <select ref={productCategoryRef} className="form-select " aria-label=".form-select-lg example">
                            <option value='' >Select One</option>
                            <option value="mobile">Mobile Phone</option>
                            <option value="t-shirt">T-shirt</option>
                            <option value="computer">Computer</option>
                        </select>

                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="product_details" className="form-label">Product Details</label>
                        <textarea ref={productDetailslRef} type="" className="form-control" placeholder='Enter Product Details' id="product_details" />
                    </div>
                    {/* <div className="mb-3 col-6">
                    <label htmlFor="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div> */}



                    <div className='col-2'> <button type="submit" className="btn btn-primary">Submit</button></div>
                </form>
            </div>
        </>
    )
}
