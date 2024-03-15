import React,{ useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Layout from '../Pages/Layout';

import axios from 'axios';

const Orderpage=()=>{
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/order`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <>
        <Layout/>
            <Table singleLine className='product-container'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>

                        <Table.HeaderCell>Amount</Table.HeaderCell>
                         <Table.HeaderCell>Quantity</Table.HeaderCell>
                         <Table.HeaderCell>Date</Table.HeaderCell>
                         <Table.HeaderCell>Status</Table.HeaderCell>
                         <Table.HeaderCell>Update-Status</Table.HeaderCell>
                         <Table.HeaderCell>Delete</Table.HeaderCell>




                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
                    const getData = () => {
                        axios.get(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/order`)
                            .then((getData) => {
                                 setAPIData(getData.data);
                             })
                    }

                    const setData = (data) => {
                        let { status, id } = data;
                        localStorage.setItem('Id', id);
                        localStorage.setItem('status', status);

                                      }

                                      const onDelete = (id) => {
                                        axios.delete(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/order/${id}`)
                                        .then(() => {
                                            getData();
                                        })
                                      }
     return (
       <Table.Row>
          
           <Table.Cell>{data.name}</Table.Cell>
           <Table.Cell>{data.ProductName}</Table.Cell>
           <Table.Cell>{data.Amount}</Table.Cell>

           <Table.Cell>{data.Quantity}</Table.Cell>
           <Table.Cell>{data.createdAt}</Table.Cell>
           <Table.Cell>{data.status}</Table.Cell>
  <Table.Cell> 
  <Link to='/updateStatus'>
  <Button onClick={() => setData(data)}>Update</Button>
  </Link>
   </Table.Cell>
   <Table.Cell>
   <Button onClick={() => onDelete(data.id)}>Delete</Button>
</Table.Cell>
        </Table.Row>
   )})}
                </Table.Body>
            </Table>
        </>
    )
}
export default Orderpage;