import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CartLink from './CartLink';
import { Menu } from 'antd';
import styles from '../styles/NavBar.module.css';
import { SettingOutlined, CameraOutlined, DatabaseOutlined, ShoppingOutlined, HomeOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

function Navbar() {

    const [state, setState] = useState({current: ''});
    const { current } = state;

    const handleClick = e => {
        setState({ current: e.key });
      };

    return (
      
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" id={styles.menu}>
          <div id={styles.logoDiv}>
              <Menu.Item icon={<HomeOutlined />}><Link to='/'>Home</Link></Menu.Item>
          </div>

          <SubMenu key="RAM" icon={<DatabaseOutlined />} title="RAM Memory">
              <Menu.Item key="RAM:2"><Link to={`/categories/memory/ram/2`}>2 GB</Link></Menu.Item>
              <Menu.Item key="RAM:3"><Link to={`/categories/memory/ram/3`}>3 GB</Link></Menu.Item>
              <Menu.Item key="RAM:4"><Link to={`/categories/memory/ram/4`}>4 GB</Link></Menu.Item>
              <Menu.Item key="RAM:6"><Link to={`/categories/memory/ram/6`}>6 GB</Link></Menu.Item>
          </SubMenu>

                  <SubMenu key="INTERNAL" icon={<DatabaseOutlined />} title="Internal Memory">
              <Menu.Item key="INTERNAL:32"><Link to={`/categories/memory/internal/32`}>32 GB</Link></Menu.Item>
              <Menu.Item key="INTERNAL:64"><Link to={`/categories/memory/internal/64`}>64 GB</Link></Menu.Item>
          </SubMenu>
          
          <SubMenu key="CAMERA" icon={<CameraOutlined />} title="Camera">
              <Menu.Item key="CAMERA:13"><Link to={`/categories/camera/main/13`}>13 px</Link></Menu.Item>
              <Menu.Item key="CAMERA:16"><Link to={`/categories/camera/main/16`}>16 px</Link></Menu.Item>
          </SubMenu>

          <Menu.Item key="WP" icon={<SettingOutlined />}><Link to={`/categories/protection/waterproof/yes`}>Water Proof</Link></Menu.Item>

          <Menu.Item key="PRODUCTS"><Link to='/products'>Products</Link></Menu.Item>

          <Menu.Item icon={<ShoppingOutlined />} key="CART"><CartLink /></Menu.Item>
        </Menu>
      
    )
}

export default Navbar
