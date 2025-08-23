const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

// Load portfolio data from external JSON file
const portfolioData = require("./src/data/portfolio.json");

// Helper function to compile Handlebars template with layout
function compileTemplate(templateName, pageData) {
  const handlebars = require("handlebars");

  // Register partials
  const partialDir = path.join(__dirname, "src", "templates", "partials");
  const partials = fs.readdirSync(partialDir);
  partials.forEach((partial) => {
    const partialName = path.parse(partial).name;
    const partialContent = fs.readFileSync(
      path.join(partialDir, partial),
      "utf8"
    );
    handlebars.registerPartial(partialName, partialContent);
  });

  // Read layout and page content
  const layoutContent = fs.readFileSync(
    path.join(__dirname, "src", "templates", "layout.hbs"),
    "utf8"
  );
  const pageContent = fs.readFileSync(
    path.join(__dirname, "src", "templates", `${templateName}.hbs`),
    "utf8"
  );

  // Compile templates
  const layoutTemplate = handlebars.compile(layoutContent);
  const pageTemplate = handlebars.compile(pageContent);

  // Render page content first, then inject into layout
  const renderedPageContent = pageTemplate({ ...portfolioData, ...pageData });
  const finalHtml = layoutTemplate({
    ...portfolioData,
    ...pageData,
    content: renderedPageContent,
  });

  return finalHtml;
}

module.exports = {
  entry: {
    app: "./js/app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "./js/app.js",
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          partialDirs: [path.join(__dirname, "src", "templates", "partials")],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      templateContent: compileTemplate("index", {
        pageTitle: "Home",
        pageDescription: portfolioData.site.description,
        isHome: true,
      }),
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      templateContent: compileTemplate("about", {
        pageTitle: "About Me",
        pageDescription:
          "Learn more about my background, experience, and passion for web development",
        isAbout: true,
      }),
    }),
    new HtmlWebpackPlugin({
      filename: "projects.html",
      templateContent: compileTemplate("projects", {
        pageTitle: "My Projects",
        pageDescription:
          "Explore my work and the projects I've been involved in",
        isProjects: true,
      }),
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      templateContent: compileTemplate("contact", {
        pageTitle: "Contact Me",
        pageDescription: "Get in touch with me for collaboration or inquiries",
        isContact: true,
      }),
    }),
  ],
};
