import React, { useEffect, useState } from 'react';

function Test() {

    const [showCommit, setShowCommit] = useState([{author: '', message: '', date: '', url: ''}]);
    const [modal, setModal] = useState(false);

    async function getCommits () {

        const response = await fetch('https://api.github.com/repos/AleSaezDH/fulltimeforce/commits')
          .then(data => data.json())
          .then(response => setShowCommit(response.map(value => {return {author: value.commit.author.name, message: value.commit.message, date: value.commit.author.date, url: value.html_url}})));
    }

    useEffect(() => {
        getCommits();
    }, [showCommit]);

    const handleClick = () => {
        !modal ? setModal(true) : setModal(false);
    }

    return (
        <div>
            {modal && showCommit.map(value => {
                return <div style={{border:'1px solid black', marginBottom:10}}>
                <a target='_blank' href={value.url}>
                <p>Author: {value.author}</p>
                <p>Message: {value.message}</p>
                <p>GitHub date: {value.date}</p>
                </a>
                </div>
            })}
            <button onClick={handleClick}>Commits history</button>
        </div>
    )
}

export default Test;
