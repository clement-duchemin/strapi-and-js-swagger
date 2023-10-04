
    const articleForm = document.getElementById('articleForm');

    articleForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const articleData = {
            title: document.getElementById('title').value,
            description: document.getElementById('content').value
        };

        fetch('http://localhost:1337/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: articleData})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Article added successfully!');
            
            articleForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error adding the article. Please try again later.');
        });
    });








/* const articleForm = document.getElementById('articleForm');

    articleForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const articleData = {
            title: document.getElementById('title').value,
            content: document.getElementById('content').value
        };

        fetch('http://localhost:1337/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articleData)
        })
    }) */