import React, { useEffect, useState } from 'react';
const { Octokit } = require("@octokit/core");

function Test() {

    const [showCommit, setShowCommit] = useState([{title: ''}]);

    async function getCommits () {

        const octokit = new Octokit({ auth: `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` });

        const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: 'AleSaezDH',
            repo: 'fulltimeforce'
          });
          setShowCommit(response.data.map(value => {return {title : value.commit.message}}));
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
