module.exports = function(eleventyConfig) {

    eleventyConfig.setBrowserSyncConfig({
        serveStaticOptions: {
          extensions: ["html"], // pretty URLs
        }
    });

    eleventyConfig.addPassthroughCopy("src/assets");
  
    // // Add a shortcode for converting Markdown links to HTML <a> links
    // eleventyConfig.addShortcode('convertMarkdownLinks', require('./convertMarkdownLinks'));

    // Custom collection for individual page redirects
    // Custom collection for individual page redirects
    eleventyConfig.addCollection("pageRedirects", function(collectionApi) {
        return collectionApi.getAll().flatMap(item => {
            if (item.data.redirect) {
                let redirects = Array.isArray(item.data.redirect) ? item.data.redirect : [item.data.redirect];
                
                return redirects.map(redirectPath => {
                    // Ensure redirectPath is a string
                    redirectPath = String(redirectPath);
        
                    // Normalize the paths to ensure they start and end with '/'
                    const from = `/${redirectPath.replace(/^\/|\/$/g, "")}/`;
                    
                    // Handling special case for index.html
                    let toPath = item.filePathStem.replace(/^\/|\/$/g, "");
                    if(toPath === "index" || toPath.endsWith('/index')) {
                        toPath = toPath.replace(/\/?index$/, ""); // Remove 'index' from the path
                    }

                    // Ensure root path translates to single '/'
                    if(toPath === "") {
                        toPath = "/"; 
                    } else {
                        toPath = `/${toPath}/`;
                    }
                    const to = toPath;

                    return { from, to };
                });
            } else {
                // No redirect, return an empty array
                return [];
            }
        });
    });

    // Handling global redirects
    eleventyConfig.addCollection("redirects", function() {
      // Assuming redirects.json is in the _data directory
      const globalRedirects = require('./_data/redirects.json');
      // Return the array of global redirect objects
      return globalRedirects.map(redirect => {
        // Normalize the paths to ensure they start and end with '/'
        redirect.from = `/${redirect.from.replace(/^\/|\/$/g, "")}/`;
        redirect.to = redirect.to; // Assuming this is already a full URL
        return redirect;
      });
    });
    
    return {
        dir: {
            input: "src",
            output: "docs"
        },

        // Remove the trailing slash for each permalink
        pathPrefix: "/",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        passthroughFileCopy: true
    };
};