
const fs = require('fs-extra')
const path = require('path')
const os = require('os')

const _ = require('lodash')
const array = require('lodash')

console.log(process.cwd());

function MD(file) {

    this.file = file;
    this.content
}

MD.prototype.getFile = function() {
    console.log(this.file)
}

MD.prototype.setFile = function(file) {
    this.file = file;
}


let file = new MD("hallo");
file.getFile();
file.setFile("bye");
file.getFile();