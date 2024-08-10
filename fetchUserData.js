const axios = require('axios');

async function fetchUserData(userId) {
    const userData = await axios.fetch(`https://jsonplaceholder.typicode.com/users/{userId}`);
    console.log(userData);
} 

fetchUserData(1).then(data => console.log(data));