# EKHIE Business Solutions Website

## Project Overview

**Live Website**: [https://nrenx.github.io/ekhie-company-website-redesign/](https://nrenx.github.io/ekhie-company-website-redesign/)

**Repository**: [https://github.com/nrenx/ekhie-company-website-redesign](https://github.com/nrenx/ekhie-company-website-redesign)

EKHIE Business Solutions provides comprehensive legal services, recruitment solutions, CSR event planning, internships, and corporate gifting services.

## Development Setup

To work on this project locally, you'll need Node.js and npm installed.

```sh
# Step 1: Clone the repository
git clone https://github.com/nrenx/ekhie-company-website-redesign.git

# Step 2: Navigate to the project directory
cd ekhie-company-website-redesign

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Editing the Code

**Local Development**

Use your preferred code editor to modify the files locally. After making changes, commit and push them to the repository.

**GitHub Web Interface**

- Navigate to the file you want to edit in the GitHub repository
- Click the pencil icon (Edit) at the top right of the file view
- Make your changes and commit them directly from the browser

**GitHub Codespaces**

For quick edits without local setup:
- Go to the repository on GitHub
- Press the "." key to open the web-based editor
- Or use Codespaces for a full development environment in the browser

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

This website is deployed using GitHub Pages. The deployment process is automated through GitHub Actions.

### Automatic Deployment

When changes are pushed to the `main` branch, GitHub Actions automatically:
1. Builds the project
2. Deploys it to GitHub Pages
3. Makes it available at [https://nrenx.github.io/ekhie-company-website-redesign/](https://nrenx.github.io/ekhie-company-website-redesign/)

### Manual Deployment

You can also manually deploy the site:

```sh
# Build and deploy to GitHub Pages
npm run deploy
```

## Custom Domain Setup

To use a custom domain with this website:

1. Go to the repository settings on GitHub
2. Navigate to the "Pages" section
3. Under "Custom domain", enter your domain name
4. Update the `public/CNAME` file in this repository with your domain name

For more information, see [GitHub's documentation on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
