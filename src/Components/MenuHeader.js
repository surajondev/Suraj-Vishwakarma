import React,{useState} from 'react'
import {Button, Menu} from 'antd'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const MenuHeader = ()=>{
    const [collapsed, setCollapsed] = useState(true)

    return(
        <div className="Menu">
            <Button type="primary" onClick={()=>setCollapsed(!collapsed)} style={{ marginTop:32 }}>
                {React.createElement(collapsed ? ()=>(<AiOutlineMenuFold size="30px" />) : ()=>(<AiOutlineMenuUnfold size="30px"/>))}
            </Button>
            <Menu style={{display:`${collapsed?"none":"block"}`}} className="menuHeader">
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/projects">Projects</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/blog">Blog</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="">Contact Us</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default MenuHeader