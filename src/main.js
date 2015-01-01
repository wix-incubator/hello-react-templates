requirejs.config({
//    baseUrl: '/',
    paths: {
        lodash: 'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
        react: 'http://fb.me/react-with-addons-0.12.2'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react', './hello'], function (React, hello) {
    'use strict';
    React.render(hello(), document.getElementById('container'));
});

