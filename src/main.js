
const fs = require('fs-extra')
const path = require('path')
const os = require('os')

const _ = require('lodash')
const array = require('lodash')

console.log(process.cwd());

function MD(filePath) {

    this.filePath = filePath;
    this.content = [];
}

// Headers
MD.prototype.H1 = "# ";
MD.prototype.H2 = "## ";
MD.prototype.H3 = "### ";
MD.prototype.H4 = "#### ";
MD.prototype.H5 = "##### ";
MD.prototype.H6 = "###### ";

// Italic, Bold and both
MD.prototype.Italic = function(text) { return `*${text}*`; }
MD.prototype.Bold = function(text) { return `**${text}**`; }
MD.prototype.BoldItalic = function(text) { return `***${text}***`; }

// BlockQuotes
MD.prototype.BlockQuotes = function(text) { return `> ${text}`; }
MD.prototype.MultipleBlockQuotes = function (texts) {
    _.forEach(texts, function(text) {
        this.addLine(this.BlockQuotes(text));
    })
}
MD.prototype.NestedBlock = function(texts) {

}

// OrderedList
MD.prototype

// UnorderedList
MD.prototype.UnorderedListElement = function (text) { return `- ${text}`; }
MD.prototype.UnorderedList = function (texts) {
    _.forEach(texts, function(text) {
        this.addLine(this.UnorderedList(text));
    })
}
MD.prototype.NestedUnorderedList = function(texts) {

}

// Codeblocks
MD.prototype.Code = function (code) { return `\`${code}\``; }
MD.prototype.CodeBlock = function (code) { return `\`\`\`${code}\`\`\``}

// Horizontal Rules
MD.prototype.Rules = function () { return "***";  }

// Link
MD.prototype.Link = function(title, url) { return `[${title}](${url})`}
MD.prototype.ImageLink = function(title, url) { return `!${this.ImageLink(title, url)}`}


MD.prototype.getFile = function() {
    console.log(this.file)
}

MD.prototype.setFile = function(file) {
    this.filePath = file;
}

MD.prototype.addLine = function(line) {
    this.content = _.concat(this.content, line);
}



let file = new MD("hallo");
file.getFile();
file.setFile("bye");
file.getFile();