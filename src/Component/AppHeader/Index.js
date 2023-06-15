import React from 'react'
import {HomeFilled} from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate  } from 'react-router-dom'

const AppHeader = () => {
    const navigate = useNavigate();

    const onMenuClick = (item) =>{
        navigate(`/${item.key}`);
    }
  return (
    <div className='appHeader'>
        <Menu 
        onClick={onMenuClick}
        mode="horizontal"
        items={[
            {
                label:<HomeFilled/>,
                key: "home",
            },
            {
                label:"Men",
                key: "man",
                children:[
                    {
                    label:"Man's shirts",
                    key:"mans-shirts",
                    },
                    {
                    label:"Man's Pant",
                    key:"mans-pant",
                    },
              ],
            },
            {
                label:"Women",
                key: "women",
                children:[
                    {
                    label:"Women's shirts",
                    key:"womens-shirts",
                    },
                    {
                    label:"Women's Pant",
                    key:"womens-pant",
                    },
              ],
            },
            {
                label:"Fragrance",
                key: "fragrance",
            },
        ]}>

        </Menu>
    </div>
  )
}

export default AppHeader