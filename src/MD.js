const fs = require('fs-extra');
const _ = require('lodash')

const syntax = require('./utils/MD-Syntax')
const throwError = require('./utils/MD-Error');

const mdSearchExpression = new RegExp(/.*\.md$/)

function MD(path) {

    path = path === "" || path === undefined ? "untitled.md" : path;

    this.setFilePath(path)
    this.textArray = [];
}

MD.H1 = syntax.H1;
MD.H2 = syntax.H2;
MD.H3 = syntax.H3;
MD.H4 = syntax.H4;
MD.H5 = syntax.H5;
MD.H6 = syntax.H6;

MD.P = syntax.P;

MD.Italic = syntax.Italic;
MD.Bold = syntax.Bold;
MD.BoldItalic = syntax.BoldItalic;

MD.BlockQuoteElement = syntax.BlockQuoteElement;

MD.OrderedList = syntax.OrderedList;
MD.UnorderedListElement = syntax.UnorderedListElement;

MD.Code = syntax.Code;
MD.CodeBlock = syntax.CodeBlock;

MD.Rules = syntax.Rules;

MD.Link = syntax.Link;
MD.ImageLink = syntax.ImageLink;


MD.prototype.addLine = function(obj) {
    this.textJSON = _.concat(this.textArray, obj);
}


MD.prototype.addParagraph = function(text) { this.addLine({ p: MD.P(text)}); }
MD.prototype.addParagraphs = function(texts) {
    if (Array.isArray(texts)) {
        for (var i = 0; i < texts.length; i++) {
            this.addParagraph(texts[i]);
        }
    } else {
        throwError(`function "addParagraphs" requires an array of strings`);
    }
    
}

MD.prototype.addTitle = function(text) { this.addLine(this.H1)};

MD.prototype.BlockQuotes = function(array) {
    for (var i = 0; i < texts.length; i++) {
        var arrayElement = texts[i];
        if (Array.isArray(arrayElement)) {
            this.BlockQuotes(_.map(arrayElement, (el) => {
                return Array.isArray(arrayElement) ? el : `> ${el}`;
            }));
        } else {
            this.addLine(`> ${arrayElement}`)
        }
    }
}

MD.prototype.UnorderedList = function(texts) {


    function mapping(prefix, array) {

    }

    mapping('', texts);

    for (var i = 0; i < texts.length; i++) {

    }
}


// File
MD.prototype.setFilePath = function(path) {
    this.filePath = path.match(mdSearchExpression) ? path : `${path}.md`;
}

MD.prototype.getFilePath = function() {
    return this.filePath;
}

MD.prototype.writeMD = function() {

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



var md = new MD();

module.exports = MD;
