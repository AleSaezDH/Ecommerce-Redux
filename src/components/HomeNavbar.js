import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import styles from '../styles/HomeNavbar.module.css';

function HomeNavbar() {
    return (
        <Menu mode="horizontal" id={styles.menu}>
            <Menu.Item icon={<SettingOutlined />}><Link to={`/categories/memory/ram/6`}>6 GB RAM</Link></Menu.Item>
            <Menu.Item icon={<SettingOutlined />}><Link to={`/categories/memory/internal/64`}>64 GB Internal Memory</Link></Menu.Item>
            <Menu.Item icon={<SettingOutlined />}><Link to={`/categories/camera/main/16`}>16 px Rear Camera</Link></Menu.Item>
            <Menu.Item icon={<SettingOutlined />}><Link to={`/categories/protection/waterproof/yes`}>Water Proof</Link></Menu.Item>
        </Menu>
    )
}

export default HomeNavbar;
