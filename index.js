"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.ID;
    var title = todo.Title;
    var completed = todo.finished;
    console.log("\n        The Todo with ID: " + id + "\n        Has a title of: " + title + "\n        It is finished? " + completed + "\n    ");
});
