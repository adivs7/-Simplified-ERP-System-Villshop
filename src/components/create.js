import React, { useState } from 'react';
import { Button,  Form, } from 'semantic-ui-react'
import axios from 'axios';


const Create =()=> {
    const [name, setFirstName] = useState('');
    const [img, setimg] = useState('');
    const [Price, setprice] = useState('');
    const [stock, setstock] = useState('');
    const [Category, setcategory] = useState('')
  const postData = () => {
        axios.post(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/Product`, {
            name,
            img,
            Price,
            stock,
            Category

        })
    }
    return (
        <>

      <div className="main">

            <Form className='create-form' >

                <Form.Field>
                    <label  >Product</label>
                    <input placeholder='Product' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input placeholder='price' onChange={(e) => setprice(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Stock</label>
                    <input placeholder='stock' onChange={(e) => setstock(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Category</label>
                    <input placeholder='Category' onChange={(e) => setcategory(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <input placeholder='Image-url' onChange={(e) => setimg(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Add</Button>
            </Form>
            </div>

        </>
    )
}
export default Create;