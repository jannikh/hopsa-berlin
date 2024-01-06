module.exports = function(eleventyConfig) {
    // Read the redirects data
    const redirects = require('./_data/redirects');
  
    // Ensure each redirect path starts and ends with a '/'
    const formattedRedirects = redirects.map(redirect => {
      let { from, to } = redirect;
  
      // Ensure it starts with '/'
      if (!from.startsWith('/')) {
        from = '/' + from;
      }
  
      // Ensure it ends with '/'
      if (!from.endsWith('/')) {
        from = from + '/';
      }
  
      return { from, to };
    });
  
    // Create a collection for redirects
    eleventyConfig.addCollection("redirects", function(collectionApi) {
      // Return the array of formatted redirect objects
      return formattedRedirects;
    });
    
    return {
        dir: {
            input: "src", // or whatever your input directory is
            output: "docs" // your desired output directory
        }
    };
};
