import React, { useEffect, useState } from 'react';
import styles from '../styles/CommitsHistoryButton.module.css';
import { Button, Modal, List, Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

function Test() {

    const [showCommit, setShowCommit] = useState([{author: '', message: '', date: '', url: ''}]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    async function getCommits () {

        await fetch('https://api.github.com/repos/AleSaezDH/fulltimeforce/commits')
          .then(data => data.json())
          .then(response => setShowCommit(response.map(value => {return {author: value.commit.author.name, message: value.commit.message, date: value.commit.author.date, url: value.html_url}})));
    }

    useEffect(() => {
        getCommits();
    }, [showCommit]);

    const handleClick = () => {
        setIsModalVisible(true);
    }
    
    const handleOk = () => {
    setIsModalVisible(false);
    };
    
    const handleCancel = () => {
    setIsModalVisible(false);
    };

    return (<>
    <footer id={styles.footer}>

    <Button type="primary" onClick={handleClick} id={styles.commitsButton}>Commits history</Button>
    </footer>
    <Modal title="Click to see the commit on GitHub" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{ top:20 }}>
        <List itemLayout="horizontal" dataSource={showCommit} renderItem={item => (
            <Card hoverable id={styles.modalCard}>
            <a target='_blank' rel="noreferrer" href={item.url}>
            <List.Item>
                <List.Item.Meta title={`Message: ${item.message}`} description={<><p>Author: {item.author}</p> <p>GitHub date: {item.date}</p></>} avatar={<GithubOutlined style={{fontSize: 25, paddingTop: 5}}/>} />
            </List.Item>
            </a>
            </Card>
        )}
        />
    </Modal>
    </>
    )
}

export default Test;
//<p>GitHub date: {value.date}</p>