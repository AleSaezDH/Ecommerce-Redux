import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Typography, Tag, Badge } from 'antd';
import styles from '../styles/ProductCard.module.css';
const { Title, Text } = Typography;

function ProductCard({data}) {

    let displayResolution = data.attributes.find(info => info.id === 'DISPLAY_RESOLUTION').value_name;
    let color = data.attributes.find(info => info.id === 'MAIN_COLOR');
    if (color) {
        var mainColor = color.value_name;
    }
    let operatingSystem = data.attributes.find(info => info.id === 'OPERATING_SYSTEM_ORIGINAL_VERSION').value_name;
    let displaySize = data.attributes.find(info => info.id === 'DISPLAY_SIZE').value_name;
    
    return (<>
    <Link to={`/products/${data.id}`}>
        <Badge count={<Tag color="#108ee9">{displayResolution}</Tag>} offset={[-50, 275]}>
            <Card hoverable cover={<img src={data.pictures[0].url} id={styles.img}/>} id={styles.card}>
                <Title level={5}>{data.name} {mainColor && <Text type="secondary">- {mainColor}</Text>}</Title>
                <div id={styles.tagsDiv}>
                    <Tag color="green">{operatingSystem}</Tag>
                    <Tag color="orange">{displaySize}</Tag>
                </div>
                <div id={styles.clickDetails}>
                    <h3>$ {data.price}</h3>
                    <p>Click for details</p>
                </div>
            </Card>
        </Badge>
    </Link>
        </>
    )
}

export default ProductCard;
