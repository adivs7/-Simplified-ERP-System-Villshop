import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import './header.css'
import axios from 'axios'


const Header = () => {
  const [orderdata, setorderData] = useState([]);
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
      axios.get(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/order`)
          .then((response) => {
            setorderData(response.data);
          })
          axios.get(`https://65f05071da8c6584131b697d.mockapi.io/api/v1/Product`)
            .then((response) => {
                setAPIData(response.data);
            })
  }, [])
  // console.log(APIData)
  const totalAmount = APIData.reduce((total, product) => total + (+product.stock), 0);
  const numberOfOrders = orderdata.length;
  const prodetcategory=APIData.length;
  console.log(numberOfOrders)

  console.log(totalAmount)

  return (
    
    <>
    <Layout/>
    <div className='header-container'>
    <div className='box'>
          <h2>Total Products</h2>
          <p>{totalAmount}</p>
        </div>
        <div className='box'>
          <h3>Number of Orders</h3>
          <p>{numberOfOrders}</p>
        </div>
    <div className='box'>
          <h2>Product Category</h2>
          <p>{prodetcategory}</p>
          </div>
        </div>
    </>
  )
}

export default Header