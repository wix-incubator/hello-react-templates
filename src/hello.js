define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';
    var Playground = React.createClass({
        displayName: 'Hello',
        render: function () {
            return template.apply(this);
        }
    });

    return Playground;
});
