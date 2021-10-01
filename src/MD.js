const fs = require('fs-extra');
const _ = require('lodash')

const syntax = require('./syntax');
const throwError = require('./error');

const mdSearchExpression = new RegExp(/.*\.md$/)

function MD(path) {
    this.setFilePath(path)
    this.textLines = [];
}

MD = syntax;

MD.prototype.getText = function()  { return this.textLines; }

MD.prototype.addLine = function(line) { this.textLines = _.concat(this.textLines, line) }
MD.prototype.addLines = function(lines) {
    for (let i = 0; i < lines.length; i++) {
        this.addLine(lines[i]);
    }
}

MD.MultiLineBlockQuote = function (texts) {
    for (let i = 0; i < texts; i++) {
        this.addLine(MD.BlockQuotes(texts[i]))
    }
}

MD.prototype.NestedBlockQuote = function(texts) {
    for (let i = 0; i < texts; i++) {
        let text = texts[i];
        if (Array.isArray(text)) {
            let array = _.map(texts[text], function(el) {
                return `>${el}`;
            })

            this.NestedBlockQuote(array)
        } else {
            this.addLine(MD.BlockQuotes(text))
        }
    }
}

MD.prototype.UnorderedList = function(texts) {
    for (let i = 0; i < texts; i++) {
        let text = texts[i];
        this.addLine(MD.UnorderedListElement(text))
    }
}

MD.prototype.NestedUnorderedList = function(texts) {
    for (let i = 0; i < texts; i++) {
        let text = texts[i];
        if (Array.isArray()) {
            this.NestedUnorderedList(texts[text])
        } else {
            this.addLine()
        }
    }
}

MD.prototype.setFilePath = function(path) {
    this.filePath = path.match(mdSearchExpression) ? path : `${path}.md`;
}

MD.prototype.getFilePath = function() {
    return this.filePath;
}

MD.prototype.writeFile = function() {

    if (this.filePath === "") {
        throwError("No file path set.");
        return;
    }

    fs.outputFile(this.filePath, _.join(this.getText(), "\n"), function(err) {
        if (err != null) {
            throwError(err);
        }
    })
}

module.exports = MD;

