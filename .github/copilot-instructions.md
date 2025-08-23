# Copilot Instructions

## Overview

This document provides guidelines for AI agents contributing to the e-portfolio project. The goal is to ensure consistency, maintainability, and alignment with the project's design and functionality.

## Project Structure

- **Templates**: Located in `src/templates/`. Use Handlebars for dynamic content rendering.
- **Static Assets**: Images are in `img/`, styles in `css/`, scripts in `js/`.
- **Data**: Portfolio content is stored in `src/data/portfolio.json`.

## Development Workflow

1. Clone the repository and install dependencies:
   ```sh
   git clone https://github.com/gcoppola8/e-portfolio.git
   cd e-portfolio
   npm install
   ```
2. Use the development server for testing changes:
   ```sh
   npm run start
   ```
3. Build for production when changes are finalized:
   ```sh
   npm run build
   ```

## Coding Guidelines

- **HTML/Handlebars**: Ensure templates are modular and reusable. Use partials for shared components like headers and footers.
- **CSS**: Follow the existing style conventions. Use classes for styling and avoid inline styles.
- **JavaScript**: Write modular, ES6+ compliant code. Place vendor scripts in `js/vendor/`.
- **Data**: Update `portfolio.json` for any content changes. Ensure the structure remains consistent.

## Best Practices

- **Consistency**: Follow the established file structure and naming conventions.
- **Documentation**: Comment code where necessary, especially for complex logic.
- **Testing**: Test changes locally using the development server.
- **Version Control**: Commit changes with clear, descriptive messages.

## Common Tasks

- **Adding a New Project**:

  1. Update `src/data/portfolio.json` with the project details.
  2. Modify the relevant Handlebars template to display the new project.
  3. Test the changes locally.

- **Updating Styles**:

  1. Edit `css/style.css`.
  2. Ensure changes do not break existing layouts.
  3. Test across different screen sizes.

- **Adding a New Template**:
  1. Create the template in `src/templates/`.
  2. Use partials for shared components.
  3. Link the template in the appropriate route or script.

## Notes for AI Agents

- Always validate changes against the project's goals and design principles.
- When in doubt, refer to this document or the `README.md` file.
- Ensure all outputs are optimized for production before finalizing.

## Contact

For questions or further clarification, contact the repository owner.
