const fetch = require('node-fetch');

exports.getPhotos = (req, res, next) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => res.json(json));
};
