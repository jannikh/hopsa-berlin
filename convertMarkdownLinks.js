module.exports = function (content) {
    // Regular expression to match Markdown links
    const markdownLinkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
  
    // Replace Markdown links with HTML <a> links
    const htmlContent = content.replace(markdownLinkRegex, '<a href="$2">$1</a>');
  
    return htmlContent;
  };
  