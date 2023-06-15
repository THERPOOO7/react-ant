import React, { useEffect, useState } from 'react'
import getAllProducts from '../../API'
import { Card, List, Image } from 'antd';

const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      getAllProducts().then((res) => {
            setItems(res.products);
      });

    }, [])
    
  return (
    <div>
        <List 
        grid={{column:3}}
        renderItem={(product,index) =>{
        return <Card title={product.title} key={index} cover={<Image className='itemCardImage' src={product.thumbnail}/>} ></Card>
        }} dataSource={items}></List>
    </div>
  )
}

export default Products