import React from 'react'
import { HomeFilled } from "@ant-design/icons"
import { Menu, Typography } from "antd"
import {ShoppingCartOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const AppHeader = () => {
    const navigate = useNavigate();

    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
    }
    return (
        <div className='appHeader'>
            <Menu
                onClick={onMenuClick}
                mode="horizontal"
                items={[
                    {
                        label: <HomeFilled />,
                        key: "",
                    },
                    {
                        label: "Men",
                        key: "man",
                        children: [
                            {
                                label: "Man's shirts",
                                key: "mens-shirts",
                            },
                            {
                                label: "Man's shoes",
                                key: "mens-shoes",
                            },
                        ],
                    },
                    {
                        label: "Women",
                        key: "women",
                        children: [
                            {
                                label: "Women's dresses",
                                key: "womens-dresses",
                            },
                            {
                                label: "Women's shoes",
                                key: "womens-shoes",
                            },
                        ],
                    },
                    {
                        label: "Fragrance",
                        key: "fragrances",
                    },
                ]}>

            </Menu>
            <Typography.Title>RP Store</Typography.Title>
            <ShoppingCartOutlined className='shoppingCartItem'/>
        </div>
    )
}

export default AppHeader