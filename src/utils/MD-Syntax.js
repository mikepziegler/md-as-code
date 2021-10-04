
module.exports = {
    // Headers
    H1: function(text) { return `# ${text}`},
    H2: function(text) { return `## ${text}`},
    H3: function(text) { return `### ${text}`},
    H4: function(text) { return `#### ${text}`},
    H5: function(text) { return `##### ${text}`},
    H6: function(text) { return `###### ${text}`},

    // Paragraph
    P: function(text) { return `${text}\n`},

    // Italic, Bold and both
    Italic: function(text) { return `*${text}*`; },
    Bold: function(text) { return `**${text}**`; },
    BoldItalic: function(text) { return `***${text}***`; },

    // BlockQuotes
    BlockQuoteElement: function(text) { return `>`; },

    // UnorderedList
    UnorderedListElement: function (text) { return `- ${text}`; },

    // OrderedList
    OrderedListElement: function (text) { return `1. ${text}`; },

    // Codeblocks
    Code: function (code) { return `\`${code}\``; },
    CodeBlock: function (code) { return `\`\`\`${code}\`\`\``},

    // Horizontal Rules
    Rules: function () { return "***";  },

    // Link
    Link: function(title, url) { return `[${title}](${url})`},
    ImageLink: function(title, url) { return `!${this.ImageLink(title, url)}`},

    //TaskList
    taskList: function(done, text) { return ` - [${done ? 'x': ' '}] `}
}


