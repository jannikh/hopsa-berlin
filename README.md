# [hopsa-berlin.de](https://hopsa-berlin.de) - Official website of Hopsa

This is the source code of the official website of the improv comedy theatre group Hopsa from Berlin, Germany.

This website is available at [https://hopsa-berlin.de](hopsa-berlin.de).

## Technical details

This website is built with [11ty](https://www.11ty.dev/) and [tailwind](https://tailwindcss.com/), a static site generator written in JavaScript and compiled with [npm](https://www.npmjs.com/). Templating is compiled from `.njk` files with [nunjucks](https://mozilla.github.io/nunjucks/).

## Installation and Setup (as suggested by ChatGPT)

Based on the excerpt from the README.md file, here are the steps to install and setup the project on a completely new computer:

1.  **Clone the repository**: Use `git clone` to clone the repository to your local machine.

2.  **Install Node.js and npm**: Node.js is a JavaScript runtime that's required to run the project. npm (Node Package Manager) is used to manage the project's dependencies. You can download Node.js and npm from the [official website]("https://nodejs.org/").

3.  **Install project dependencies**: Navigate to the project directory in your terminal and run `npm install` to install the project's dependencies.

4.  **Install Tailwind CSS CLI**: The project uses Tailwind CSS, a utility-first CSS framework. The Tailwind CSS CLI is used to generate the Tailwind CSS file. You can install it globally with `npm install tailwindcss -g`.

5.  **Install Eleventy**: The project uses Eleventy, a static site generator. You can install it globally with `npm install @11ty/eleventy -g`.

6.  **Setup the project**: Run the batch script to setup the project. This script performs the following tasks:

    -   Copies the `CNAME` file from the `src` directory to the `docs` directory.
    -   Mirrors the directory structure from `./src/styles` to `./docs/styles`.
    -   Generates the Tailwind CSS file.
    -   Runs Eleventy in serve mode.
7.  **Access the project**: Open your web browser and navigate to `http://localhost:8080` to view the project.

8.  **For deployment**: Commit your changes to the `main` branch. The changes will be published to the public website (with a few minutes delay). If you want to test changes before they are published, you can create a new branch and commit your changes there. This branch can then be merged into the `main` branch once you are happy with the changes.

Please note that these steps are based on the provided excerpt from the README.md file. There might be additional setup steps not covered in this excerpt. Always refer to the full README.md file for complete setup instructions.

## File structure *(Development and Deployment is mentioned further below)*

### Docs / Hosting
This repository is automatically hosted on github pages and connected via DNS to the domain `hopsa-berlin.de`. The files that are hosted are in the folder **docs**. This folder is automatically generated during deployment and completely mirrors the content of the hosted website (sometimes also called dist / public / output / ...) Anything that should be accessible on the public website needs to copied to this folder (don't only store it there, the folder is volatile and may be cleared and overwritten at any point.)

### Assets
The **assets** folders contains all larger items, such as images, videos and audios that are hosted on the website. During deployment this is automatically copied to *docs/assets*. Please note that the github file size limit is 100MB, so larger files should be hosted elsewhere.

### Source files
The **src** folder contains all source files that are used to generate the website. The main landing page (accessible via `hopsa-berlin.de/`) is *src/index.md*. All other pages are in the root of *src* and are accessible via `hopsa-berlin.de/[filename]`. The file *src/404.md* is the 404 error page.

Source files can be either defined in markdown language (*.md) or html (*.html), or mix of both (again *.md file ending). Any markdown is automatically converted to html during deployment (this happens in the *default.njk* template via the `{{ content | safe }}` line).

The folder **src/styles** contains css stylesheets that are imported by the *html-wrapper.njk* template.

The *CNAME* file is here to ensure on every commit that github pages keeps the connection to the domain name and DNS config, as this was a problem earlier. (Same with the *CNAME* on repository root level)

### Templates
The **src/_includes** folder contains all templates that are used to generate the website:

The **html-wrapper.njk** template is used to generate the html files that are hosted on the website, it has a barebones body, but contains all the header information used throughout each html page.

The **default.njk** template is the main template that is used for all pages (thus appearing as `layout: default.njk` at the top of every page definition) and loads the *header.njk* and *footer.njk* template, adding those elements and wrapping everything in the *html-wrapper.njk* template.

The **redirect.njk** template is used to generate the html files that are used for redirects (see further below).

The **embeddings.md** section covers all social media iframe embeddings of post feeds that we can display on they website. This file does responsive design and imports the iframe codes from the various *...-embed.html* files.

The *termine.njk* template is used to generate the html elements that are used for the termine page. The *links.njk* template is used to generate the html elements that are used for the links page. (Those two are reused on the landing page for a modern long-scroll version, that is why they exist as a template to be loaded into multiple html files.) The *landingpage.md* is the upper part of the first homepage (*src/index.html* on root level).

Also, just a `#` in a single line in a markdown file creates some vertical space between elements.

### Redirects
**_data/redirections.json** contains a list of all redirects. The from is the URL relative to `hopsa-berlin.de/[from]`, the to can be anything, either relative to this domain as well or an external URL. This file mostly contains external redirects, as internal redirects can be handled another way:

Within each file in `src` (and subfolders of `src`, *excluding _includes* and *styles*), in the upper section between the `---` we can define a `redirect:` that is either a string or an array of multiple strings. For each of these paths relative to `hopsa-berlin.de/`, a new subfolder is created that contains an `index.html` with a redirect to the current file. This way, we can have many aliases and synonyms pointing to the same page.

The template for the redirect page is *src/_includes/redirect.njk*. The files *src/redirects.njk* and *src/individual-redirects.njk* are helper files used to generate the redirects.

### Eleventy config
**.eleventy.js** is the configuration file for Eleventy, a simpler static site generator that allows you to write your templates in multiple languages. Here's what each part of this file does:

- *setBrowserSyncConfig* sets the configuration for BrowserSync, a tool that synchronizes file changes and interactions across multiple devices. It's set to serve static HTML files.

- *addPassthroughCopy* tells Eleventy to copy the src/assets directory directly to the output without any transformations.

- *addCollection("pageRedirects")* creates a custom collection of page redirects. For each page that has a redirect property in its front matter, it creates a redirect from the specified path to the page's path (or multiple redirects if the redirect property is an array).

- *addCollection("redirects")* This creates a global collection of redirects from a redirects.json file. Each redirect in the file should have a from property (the path to redirect from) and a to property (the full external URL or path relative to this domain to redirect to).

The *return* statement at the end specifies the input and output directories for Eleventy, the template engines to use for different types of files, the formats of templates to process, and whether to copy files that aren't processed by Eleventy directly to the output.

The functions in this file are executed when Eleventy builds the site. They configure how Eleventy processes files and generates the site.

### Development and Deployment
**run.bat** is a batch script that is used to run the website locally. It should be called once before deploying via committing changes to the website, as it fills the *docs* with all relevant files. It is also used to run the website locally, as it starts a local server that automatically updates the website when changes are made to the source files.

1. `xcopy src\CNAME docs\ /y`: This command copies the CNAME file from the src directory to the docs directory. The /y flag suppresses the prompt to confirm you want to overwrite an existing destination file. This is not necessary if the CNAME file in docs is kept. This command just ensures that it will be there, even if the docs directory has been cleared or deleted.

2. `robocopy ./src/styles ./docs/styles /MIR`: This command uses robocopy, a robust file copy command for Windows, to mirror the directory structure from ./src/styles to ./docs/styles. The /MIR flag ensures that the destination directory (./docs/styles) exactly mirrors the source directory (./src/styles), deleting files in the destination if they don't exist in the source. This is to copy any .css files other than *tailwind.css* (which is overwritten anyways by the next step)

3. call `npx tailwindcss -i ./src/styles/tailwind.css -o ./docs/styles/tailwind.css`: This command uses npx to run the tailwindcss CLI. The -i flag specifies the input file (./src/styles/tailwind.css), and the -o flag specifies the output file (./docs/styles/tailwind.css). This command generates the Tailwind CSS file with all necessary classes that are used in the codebase. The `call` command is just necessary in the batch file and would be ommitted when executing the command manually.

4. `eleventy --serve`: This command runs Eleventy, a static site generator, in serve mode. This builds the site, starts a local web server, and automatically rebuilds the site when files change. It is important to run before publishing commits, as otherwise the changes are not properly propagated to the `docs` folder and therefore not shown on the final website. The `--serve` flag is necessary to start the local web server, which can be opened on [http://localhost:8080](http://localhost:8080) and automatically updates when changes are made to the source files (except for some CSS tailwind stuff which needs steps 2 and 3 to be rerun).

Normally all of these commands would be only for the dev environment and not for deployment, but as the website is hosted on github pages, the *docs* folder is tracked and pushed via gits version control the only folder that is hosted and therefore needs to contain all relevant files and newest changes.

For deployment, the ***main* branch** is used, to keep the steps needed for deployment to a minimum. Therefore, any changes committed to the *main* branch (after being tested and generated in the `docs` folder), will show up on the public website (sometimes with a few minutes delay). If you want to test changes before they are published, you can create a new branch and commit your changes there. This branch can then be merged into the *main* branch once you are happy with the changes.

### Miscellaneous files
The folder *node_modules* contains all the modules used for this project, as further defined in the *package.json* file. It is automatically generated during development and deployment. *package-lock.json* is a file that is automatically generated and should not be edited manually.

*convertMarkdownLinks.js* was an attempt to enable markdown links (such as [https://google.com](Google Search) in an .md file) to work as well and be transformed to html code. This didn't work yet, but is kept here for future reference.

*postcss.config.js* is a configuration file for postcss, a tool that allows you to use modern css features and automatically transforms them to a format that is compatible with all browsers. This is used to generate the css files in *src/styles*.

*tailwind.config.js* is a configuration file for tailwind, a css framework that allows you to use utility classes to quickly style your website. This is used to generate the css files in *src/styles*. Somehow I never got the extra colors to work, that is why all the button in links still have the same hover background color.

The **README.md** file contains all information about this repository and its file structure and contents. If you were not reading it right now, I would suggest you do in case there is confusion about anything (or just ask ChatGPT, it knows the code in this repo very well).

## Tips and Advice
### Markdown conversion
To easily convert a preformatted document (e.g. Word / Google Docs / Richtext / E-mail) into markdown, you can use [https://euangoddard.github.io/clipboard2markdown/](https://euangoddard.github.io/clipboard2markdown/). Just copy the text from the source and paste it into the box, then copy the code that appears. If all goes well, only minimal changes and fixes are necessary to align the code (e.g. converting links to html `<a href="...`). VS Code has great markdown preview and editing capabilities.

With your markdown content, create a new file in the *src* folder (or a subfolder if you want to use a subdomain like `hopsa-berlin.de/auftritte/weihnachten`), name it accordingly and paste the code into it. Then add the following lines to the top of the file:
```
layout: default.njk
title: *(Page title, gets shown as the tab an window title)*
redirect: [..., ..., ...] *(alternative URLs, always relative to the root domain, this line is optional)*
```

Finally, link to this page from any other page, or add it to the navigation bar in *src/_includes/header.njk* - or just leave it as a secret page that is only accessible via the direct link (or by anyone who reads through the public github repository code).

If you want to store secret information on a static site, you can use [https://github.com/robinmoisson/staticrypt](Staticrypt) or [https://github.com/Greenheart/pagecrypt](pagecrypt) to encrypt the page with a password on your local machine. (security may not be 100% guaranteed, and make sure to do this locally and to not commit or push the original data or password)

## Contact

If you have any questions, please contact us at [mailto:hopsaberlin@gmail.com](hopsaberlin@gmail.com)
