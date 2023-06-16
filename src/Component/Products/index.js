import React, { useEffect, useState } from 'react'
import { getAllProducts, addToCart, getProductsByCategory } from '../../API';
import { Card, List, Image, Typography, Badge, Rate, Button, message, Spin } from 'antd';
import { useParams } from 'react-router-dom';

const Products = () => {
    const param = useParams()
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (param?.categoryId 
            ? getProductsByCategory(param.categoryId)
            : getAllProducts()
        ).then((res) => {
            console.log(res)
            setItems(res.products);
            setLoading(false);
        });
    }, [[param]])


    if (loading) {
        return <Spin spinning />;
    }
    return (
        <div>
            <List
                grid={{ column: 4 }}
                renderItem={(product, index) => {
                    return <Badge.Ribbon
                        className='itemCardBadge'
                        text={`${product.discountPercentage} %`}
                        color='red'>

                        <Card
                            className='itemCard'
                            title={product.title}
                            key={index}
                            cover={
                                <Image className='itemCardImage' src={product.thumbnail} />
                            }
                            actions={[
                                <Rate allowHalf disabled value={product.rating} />,
                                <AddToCartButton item={product} />,
                            ]}
                        >
                            <Card.Meta
                                title={
                                    <Typography.Paragraph>
                                        Price: ${product.price}{" "}
                                        <Typography.Text delete type='danger'>
                                            ${parseFloat(product.price +
                                                (product.price * product.discountPercentage) / 100).toFixed(2)}
                                        </Typography.Text>
                                    </Typography.Paragraph>
                                }
                                description={<Typography.Paragraph ellipsis={{ rows: 2, expandable: true, Symbol: 'more' }}>{product.description}</Typography.Paragraph>}
                            ></Card.Meta>

                        </Card>
                    </Badge.Ribbon>
                }} dataSource={items}></List>
        </div>
    )
}

function AddToCartButton({ item }) {

    const [loading, setLoadin] = useState(false)
    const addProductToCart = () => {
        setLoadin(true)
        addToCart(item.id).then(res => {
            message.success(`${item.title} has been added to cart`)
            setLoadin(false)
        })
    }

    return <Button type='link' onClick={() => { addProductToCart() }}
        loading={loading}
    > Add to cart</Button>;
}
export default Products