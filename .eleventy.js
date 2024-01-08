// Section of code that is used to process images, so that they are optimized for the web and don't load top to bottom

const Image = require("@11ty/eleventy-img");

// Example function to process an image
async function imageShortcode(src, alt, outputFormat = "jpeg") {
    let metadata = await Image(src, {
        widths: [null], // or specify other widths you want to generate
        formats: ["jpeg", "png", "webp"], // now includes WebP
        outputDir: "./docs/assets/",
        urlPath: "/src/assets/",
        sharpJpegOptions: {
            progressive: true, // enable progressive loading for JPEGs
            quality: 80 // optionally, adjust the quality
        },
        sharpPngOptions: {
            progressive: true, // enable interlacing for PNGs
            quality: 80 // optionally, adjust the quality
        },
        sharpWebpOptions: {
            quality: 80 // optionally, adjust the quality for WebP
        }
    });
}


module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        serveStaticOptions: {
            extensions: ["html"], // pretty URLs
        }
    });

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    
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