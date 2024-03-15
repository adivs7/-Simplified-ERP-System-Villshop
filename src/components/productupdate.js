import React, { useState,useEffect } from 'react';
import { Button,  Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import axios from 'axios';


const Productupdate =()=> {
    const [name, setFirstName] = useState('');
    const [img, setimg] = useState('');
    const [Price, setprice] = useState('');
    const [stock, setstock] = useState('');
    const [Category, setcategory] = useState('');



    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('Id'))
     setFirstName(localStorage.getItem('Name'))
        setimg(localStorage.getItem('Img'));
        setprice(localStorage.getItem('Price'));
        setstock(localStorage.getItem('Stockss'));
        setcategory(localStorage.getItem('Categoryy'));


    }, []);
    const updateAPIData = () => {
        axios.put(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/Product/${id}`, {
            name,
             Price,
             Category,
             stock,
             img
        })
    }
    return (
        <>

      <div className="main">

            <Form className='create-form' >

                <Form.Field>
                    <label  >Product</label>
                    <input placeholder='Product' value={name} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input placeholder='price' value={Price} onChange={(e) => setprice(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Stock</label>
                    <input placeholder='stock' value={stock} onChange={(e) => setstock(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <input placeholder='Category' value={Category} onChange={(e) => setcategory(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <input placeholder='Image-url' value={img} onChange={(e) => setimg(e.target.value)}/>
                </Form.Field>
                <Button  type='submit' onClick={updateAPIData}>Update</Button>
                <Link to='/product' >Updated?Back to product page</Link>

            </Form>
            </div>

        </>
    )
}
export default Productupdate;