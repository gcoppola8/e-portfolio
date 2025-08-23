# E-Portfolio

This project is a personal portfolio website built with HTML, CSS, JavaScript, and Handlebars templates. It showcases professional experience, education, projects, and personal interests.

## Project Structure

```
404.html                # Custom 404 error page
favicon.ico, icon.png   # Site icons
index.html              # Main entry point
LICENSE.txt             # License information
package.json            # Project metadata and scripts
robots.txt              # Search engine instructions
site.webmanifest        # PWA manifest
webpack.*.js            # Webpack configuration files

css/
  style.css             # Main stylesheet
img/
  *.jpg, *.png          # Images used throughout the site
js/
  app.js                # Main JavaScript file
  vendor/               # Third-party JS libraries
src/
  data/
    portfolio.json      # Data for portfolio content
  templates/
    about.hbs           # About page template
    index.hbs           # Home page template
    layout.hbs          # Main layout template
    partials/
      header.hbs        # Header partial
      footer.hbs        # Footer partial

```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/gcoppola8/e-portfolio.git
   cd e-portfolio
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development

To start the development server with hot reload:

```sh
npm run start
```

This will use `webpack.config.dev.js` and serve the site locally.

### Build for Production

To build the site for production:

```sh
npm run build
```

This will use `webpack.config.prod.js` and output optimized files.

### File Locations

- **Templates**: All Handlebars templates are in `src/templates/`.
- **Static Assets**: Images are in `img/`, styles in `css/`, scripts in `js/`.
- **Data**: Portfolio content is in `src/data/portfolio.json`.

### Customization

- Update your personal info, experience, and projects in `src/data/portfolio.json`.
- Edit templates in `src/templates/` for layout changes.
- Add images to `img/` and reference them in your data/templates.

### Useful Commands

- `npm run start` — Start development server
- `npm run build` — Build for production
- `npm run lint` — Run linter (if configured)

## Contributing

Feel free to fork and submit pull requests. Please follow the code style and add comments where necessary.

## License

See `LICENSE.txt` for details.

---

For any questions, contact the repository owner.
