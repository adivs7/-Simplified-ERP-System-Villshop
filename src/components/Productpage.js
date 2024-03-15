import React,{ useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Layout from './Pages/Layout';

import axios from 'axios';

const Productpage=()=>{
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/Product`)
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
                        <Table.HeaderCell>Photo</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>

                        <Table.HeaderCell>Price</Table.HeaderCell>
                         <Table.HeaderCell>Stocks</Table.HeaderCell>
                         <Table.HeaderCell>Update</Table.HeaderCell>
                         <Table.HeaderCell>Delete</Table.HeaderCell>



                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
                    const getData = () => {
                        axios.get(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/Product`)
                            .then((getData) => {
                                 setAPIData(getData.data);
                             })
                    }

                    const setData = (data) => {
                        let { name, img, id, Price,stock,Category } = data;
                        localStorage.setItem('Id', id);
                        localStorage.setItem('Name', name);
                        localStorage.setItem('Img', img);
                        localStorage.setItem('Price', Price);
                        localStorage.setItem('Stockss', stock);
                        localStorage.setItem('Categoryy', Category);

                                      }

                                      const onDelete = (id) => {
                                        axios.delete(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/Product/${id}`)
                                        .then(() => {
                                            getData();
                                        })
                                      }
     return (
       <Table.Row>
<Table.Cell>{data.img && <img src={data.img} alt={data.name} style={{ width: '50px', height: '50px' }} />}</Table.Cell>
          
           <Table.Cell>{data.name}</Table.Cell>

           <Table.Cell>{data.Category}</Table.Cell>
           <Table.Cell>{data.Price}</Table.Cell>
           <Table.Cell>{data.stock}</Table.Cell>
  <Table.Cell> 
  <Link to='/update'>
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
            <Link to='/create' className='btn' ><Button>Add</Button></Link>
        </>
    )
}
export default Productpage;