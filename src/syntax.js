/**
 * Syntax from MarkDown as Variables and Functions
 */

function syntaxMD() {}

// Headers
syntaxMD.H1 = function(text) { return `# ${text}`};
syntaxMD.H2 = function(text) { return `## ${text}`};
syntaxMD.H3 = function(text) { return `### ${text}`};
syntaxMD.H4 = function(text) { return `#### ${text}`};
syntaxMD.H5 = function(text) { return `##### ${text}`};
syntaxMD.H6 = function(text) { return `###### ${text}`};

// Paragraph
syntaxMD.P = function(text) { return `${text}\n`}

// Italic, Bold and both
syntaxMD.Italic = function(text) { return `*${text}*`; }
syntaxMD.Bold = function(text) { return `**${text}**`; }
syntaxMD.BoldItalic = function(text) { return `***${text}***`; }

// BlockQuotes
syntaxMD.BlockQuotes = function(text) { return `> ${text}`; }

// OrderedList
syntaxMD.OrderedList = function (text) { return `1. ${text}`; }

// UnorderedList
syntaxMD.UnorderedListElement = function (text) { return `- ${text}`; }

// Codeblocks
syntaxMD.Code = function (code) { return `\`${code}\``; }
syntaxMD.CodeBlock = function (code) { return `\`\`\`${code}\`\`\``}

// Horizontal Rules
syntaxMD.Rules = function () { return "***";  }

// Link
syntaxMD.Link = function(title, url) { return `[${title}](${url})`}
syntaxMD.ImageLink = function(title, url) { return `!${this.ImageLink(title, url)}`}

module.exports = syntaxMD;