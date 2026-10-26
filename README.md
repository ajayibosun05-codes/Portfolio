# Ajayi Olatunbosun Samuel: Personal Portfolio

A responsive, single-page portfolio for a technical project manager and front-end developer who is studying metallurgical engineering at the University of Lagos. It is built with plain HTML, CSS and JavaScript, so there is nothing to install and no build step.

## Project Overview

The portfolio presents three sides of one person: **engineer**, **developer** and **project manager**. Its signature feature is a hero section where a metal bar changes color as you raise its temperature, and the headline changes with it. This ties metallurgy to the interface and to the way I manage projects.

**Goals**
- Show recruiters and collaborators who I am and what I have built
- Present projects as short case studies (problem, what I did, outcome)
- Make contacting me easy
- Stay fast, accessible and usable on any device

## Features

- **Interactive heat-bar hero:** a temperature slider that changes the bar color (steel temper colors, then red heat) and the role headline
- **Responsive layout:** adapts from phones to wide desktops
- **Light and dark themes:** follows the system setting, with a manual toggle that remembers the choice
- **Expandable case studies:** project cards with Problem, What I did and Outcome
- **Sections:** About, Work, Skills, Journey, Now and Contact
- **Contact form:** validates input, then opens the visitor's email app with the message prefilled
- **Scroll animations:** gentle fade-ins that respect the "reduce motion" setting
- **Accessibility:** semantic HTML, keyboard focus styles, labelled controls and screen-reader-friendly status messages
- **SEO basics:** page title, meta description and a language attribute

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, Grid, Flexbox, media queries) |
| Behavior | Vanilla JavaScript (ES5-compatible, no frameworks) |
| Fonts | Bricolage Grotesque and IBM Plex Sans via Google Fonts |
| Hosting | Any static host (Netlify, GitHub Pages, Vercel) |

## Project Structure

```
portfolio/
├── index.html      # Content: text, sections, projects, links
├── css/
│   └── style.css   # Design: colors, fonts, layout
├── js/
│   └── main.js     # Behavior: heat bar, theme toggle, form
├── assets/         # Your photo, CAD renders, CV PDF
└── README.md
```

## Setup Instructions

**Requirements:** a modern web browser and a code editor such as VS Code. No Node.js or package installs.

1. **Get the files.** Unzip the project, or clone your repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```
2. **Open the folder** in VS Code (File > Open Folder).
3. **Run it.** Either double-click `index.html`, or install the *Live Server* extension, right-click `index.html` and choose **Open with Live Server** so the page refreshes as you edit.
4. **Make it yours** using the table below.

### What to edit where

| To change... | Open | Look for |
|---|---|---|
| Text, projects, skills, email | `index.html` | the section comments, e.g. `<!-- ===== WORK ===== -->` |
| Add a project | `index.html` | copy a `<details>...</details>` block inside the WORK section |
| Replace the cartoon avatar | `index.html` | `<!-- Placeholder avatar -->`; save your photo as `assets/avatar.png` |
| Colors (light and dark) | `css/style.css` | Section 1, DESIGN TOKENS |
| Fonts | `css/style.css` and `index.html` | `--display`, `--body`, and the Google Fonts `<link>` |
| Spacing, cards, chips | `css/style.css` | Sections 5 to 9 |
| Hero role lines and bar colors | `js/main.js` | Section A: `roles` and `stops` |
| Contact form email | `js/main.js` | Section D: `EMAIL` |

### Editing with an AI assistant
Paste only the file you want changed, with your request. Ask: *"Return the full updated file and keep the section comments."* Then paste the result over that file and refresh the browser.

## Deployment

- **Netlify Drop:** drag the whole `portfolio` folder onto the Netlify Drop page for an instant live link.
- **GitHub Pages:** push the project to a GitHub repository, then enable Pages in Settings > Pages and select the main branch.

After deploying, set a custom domain if you have one, and add your LinkedIn and GitHub links to the Contact section.

## Roadmap

- [ ] Replace the avatar with a real photo
- [ ] Add NutriScan screenshots and a live demo link
- [ ] Add CAD renders to the SolidWorks case study
- [ ] Add LinkedIn and GitHub links
- [ ] Upload a downloadable CV
- [ ] Connect the contact form to a form service such as Formspree

## Contact

**Ajayi Olatunbosun Samuel**
Email: [ajayibosun05@gmail.com](mailto:ajayibosun05@gmail.com)

## License

All content (text, projects and images) belongs to Ajayi Olatunbosun Samuel. The code structure may be reused as a template with credit.
