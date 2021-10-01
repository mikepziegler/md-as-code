const fs = require('fs-extra');
const _ = require('lodash')

const mdSearchExpression = new RegExp(/.*\.md$/)

function MD(path) {
    this.setFilePath(path)
    this.textLines = [];
}

/**
 * Syntax from MarkDown as Variables and Functions
 */

// Headers
MD.H1 = function(text) { return `# ${text}`};
MD.H2 = function(text) { return `## ${text}`};
MD.H3 = function(text) { return `### ${text}`};
MD.H4 = function(text) { return `#### ${text}`};
MD.H5 = function(text) { return `##### ${text}`};
MD.H6 = function(text) { return `###### ${text}`};

// Paragraph
MD.P = function(text) { return `${text}\n`}

// Italic, Bold and both
MD.Italic = function(text) { return `*${text}*`; }
MD.Bold = function(text) { return `**${text}**`; }
MD.BoldItalic = function(text) { return `***${text}***`; }

// BlockQuotes
MD.BlockQuotes = function(text) { return `> ${text}`; }

// OrderedList
MD.OrderedList = function (text) { return `1. ${text}`; }

// UnorderedList
MD.UnorderedListElement = function (text) { return `- ${text}`; }

// Codeblocks
MD.Code = function (code) { return `\`${code}\``; }
MD.CodeBlock = function (code) { return `\`\`\`${code}\`\`\``}

// Horizontal Rules
MD.Rules = function () { return "***";  }

// Link
MD.Link = function(title, url) { return `[${title}](${url})`}
MD.ImageLink = function(title, url) { return `!${this.ImageLink(title, url)}`}

/**
 * Text Management and manipulation
 */
MD.prototype.getText = function()  {return this.textLines; }

MD.prototype.addLine = function(line) { this.textLines = _.concat(this.textLines, line) }
MD.prototype.addLines = function(lines) {
    _.forEach(lines, function (line) {
        this.addLine(line);
    })
}


MD.prototype.insertLine = function(line, text) {
    this.textLines
}

MD.prototype.removeLine = function(line) {

}

MD.prototype.changeLine = function(line, text) {

}

/**
 *
 * More Complicated Syntax
 *
 */
MD.MultipleBlockQuotes = function (texts) {
    _.forEach(texts, function(text) {
        this.addLine(this.BlockQuotes(text));
    })
}
MD.NestedBlock = function(texts) {

}

MD.prototype.UnorderedList = function (texts) {
    const add = this.addLine("hallo");

    _.forEach(texts, function(text) {
        add()
    })
}

MD.NestedUnorderedList = function(texts) {

}

/**
 * Error handeling
 */
function sendError(message) {
    console.error(`Simple-MD error: ${message}`)
}

/**
 * file manipulation
 */
MD.prototype.setFilePath = function(path) {
    this.filePath = path.match(mdSearchExpression) ? path : `${path}.md`;
}
MD.prototype.getFilePath = function() {
    return this.filePath;
}
MD.prototype.readMD = function(path) {

}
MD.prototype.writeFile = function() {

    if (this.filePath === "") {
        sendError("No file path set.");
        return;
    }

    fs.outputFile(this.filePath, _.join(this.getText(), "\n"), function(err) {
        if (err != null) {
            console.log(err);
        }
    })
}

module.exports = MD;

