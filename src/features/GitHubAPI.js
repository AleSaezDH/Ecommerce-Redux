import React, { useEffect, useState } from 'react';

function Test() {

    const [showCommit, setShowCommit] = useState([{author: '', message: '', date: ''}]);

    async function getCommits () {

        const response = await fetch('https://api.github.com/repos/AleSaezDH/fulltimeforce/commits')
          .then(data => data.json())
          .then(response => setShowCommit(response.map(value => {return {author: value.commit.author.name, message: value.commit.message, date: value.commit.author.date}})));
    }

    useEffect(() => {
        getCommits();
    }, [showCommit]);

    return (
        <div>
            <h1>Test</h1>
            {showCommit.map(value => {
                return <>
                <h2>Author: {value.author}</h2>
                <h2>Message: {value.message}</h2>
                <h2>GitHub date: {value.date}</h2>
                </>
            })}
        </div>
    )
}

export default Test;
