import React, { useEffect, useState } from 'react';

function Test() {

    const [showCommit, setShowCommit] = useState([{title: ''}]);

    async function getCommits () {

        const response = await fetch('https://api.github.com/repos/AleSaezDH/fulltimeforce/commits')
          .then(data => data.json())
          .then(response => setShowCommit(response.map(value => {return {title : value.commit.message}})));
    }

    useEffect(() => {
        getCommits();
    }, [showCommit]);

    return (
        <div>
            <h1>Test</h1>
            {showCommit.map(value => {
                return <h2>{value.title}</h2>
            })}
        </div>
    )
}

export default Test;
