import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import axios from 'axios'
import {useCart} from '../../../context/cart'
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const Category = () => {

    const [cart,setCart] = useCart()
    const  {categoryValue}  = useParams();
    console.log(categoryValue)
    let [loading,setLoading] = useState(false)
    let [items,setItems] = useState([])
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 8
    let fetchData = async()=>{
        setLoading(!loading)
        let {data} = await axios.get(`https://dummyjson.com/products/category/${categoryValue}`)
        console.log(data)
        setItems(data.products)
        setLoading(false)


    }

    let addToCart = ()=>{
      setCart(cart+1)
    }

    useEffect(()=>{
        fetchData()
       // eslint-disable-next-line 
    },[categoryValue])

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // const changePage = (pageNumber) => {
    //   setCurrentPage(pageNumber);
    // };
  return (
    <div className='main'>
    {loading && (
      <div className="loader-container">
        <Loader className="loader" />
      </div>
    )}
    <Fade right>
     <div className='row card-top-margin '>
   
     {
        items.map((item)=>(
    <div className='col-md-3 mt-5' key={item.id}>
    <div className="card" style={{width: "18rem", minHeight: "300px"}}>
  <img src={item.images[0]} className="card-img-top card-image" alt={item.title} />
  <div className="card-body">
    <h5 className="card-title">Name:{item.title}</h5>
    <p className="card-text">Description: {(item.description).substring(0, 60)}...</p>
    <button className="btn btn-warning" onClick={addToCart}>Add to Cart</button>
  </div>
</div>
    
     </div>
        ))
     }
    
     </div>
     </Fade>


    
     
  
    </div>
  )
}

export default Category
