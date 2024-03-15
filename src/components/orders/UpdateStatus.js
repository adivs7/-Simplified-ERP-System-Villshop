import React, { useState,useEffect } from 'react';
import { Button,  Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import axios from 'axios';


const UpdateStatus =()=> {
    const [status, setstatus] = useState('');



    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('Id'))
     setstatus(localStorage.getItem('status'))

    }, []);
    const updateAPIData = () => {
        axios.put(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/order/${id}`, {
            status
        })
    }
    return (
        <>

      <div className="main">

            <Form className='create-form' >

                <Form.Field>
                    <label  >Product</label>
                    <input placeholder='Status' value={status} onChange={(e) => setstatus(e.target.value)}/>
                </Form.Field>
                
                <Button  type='submit' onClick={updateAPIData}>Update</Button>
                <Link to='/order' >Updated?Back order page</Link>

            </Form>
            </div>

        </>
    )
}
export default UpdateStatus ;