const fetch = require('node-fetch');

exports.getPosts = (req, res, next) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => res.json(json));
};
