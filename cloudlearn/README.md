# CloudLearn – Cloud Computing Academy

A modern, responsive, open-access educational web platform engineered to teach cloud computing concepts from beginner to intermediate level. Built with pure standards-based **HTML5**, **CSS3**, and **Vanilla JavaScript** with zero external frameworks or backend dependencies.

---

## 🌟 Project Highlights

- **12 Comprehensive Curriculum Modules (`learn.html`)**: Complete coverage from NIST definitions, history, and deployment models to IaaS/PaaS/SaaS, hypervisors/containers, VPC networking, security/IAM, serverless, and FinOps. Each module features a clear definition, practical example, core architectural principles, and summary.
- **Interactive Search & Category Filters**: Real-time topic search with keyboard shortcuts (`/`), category pill filtering, expand/collapse guides, and graceful empty states.
- **Objective Cloud Provider Comparison (`providers.html`)**: Factual breakdown of AWS, Microsoft Azure, and Google Cloud (GCP) with use cases, service categories, official documentation links, and an interactive side-by-side service comparison matrix.
- **5 Hands-On Beginner Project Guides (`projects.html`)**: Detailed step-by-step guides for static website hosting, PaaS deployment, 3-tier architecture diagramming, Linux VM web servers, and disaster recovery planning with code-copy blocks, safety warnings, and browser-persisted completion tracking.
- **Interactive 15-Question Assessment Quiz (`quiz.html`)**: Full-featured quiz engine with instant validation, explanations, progress tracking, category score breakdowns, and an in-depth answer review mode.
- **Clean Tech-Education Design System (`css/style.css`)**: Built strictly with modern CSS variables, responsive CSS Grid and Flexbox, accessible focus rings (`:focus-visible`), WCAG AA compliant contrast, subtle elevations, and mobile drawer navigation.

---

## 📁 Project Directory Structure

```text
cloudlearn/
├── index.html              # Home page with hero, SVG architecture diagram, roadmap, and highlights
├── learn.html              # 12 detailed educational modules with live search and filter pills
├── providers.html          # AWS vs Azure vs GCP comparison profiles & service matrix
├── projects.html           # 5 hands-on project tutorials with checklists & copyable snippets
├── quiz.html               # 15-question interactive quiz with explanations & scoring breakdown
├── css/
│   └── style.css           # Complete responsive design system, variables, and components
├── js/
│   ├── main.js             # Shared navigation, mobile drawer, back-to-top, toast, and checklists
│   ├── learn.js            # Topic live search, category filtering, and accordion toggles
│   └── quiz.js             # 15-question interactive quiz engine and result analytics
├── assets/
│   └── images/
│       └── cloudlearn-logo.svg # Vector logo asset and icon
└── README.md               # Documentation and deployment guide
```

---

## 🚀 Running the Project Locally

Because CloudLearn is built strictly with standard web technologies and relative paths, it requires no compilation, bundler, or package installation.

### Option 1: Direct Browser Opening
Simply double-click `cloudlearn/index.html` in your file explorer, or open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Python HTTP Server (Recommended)
If Python is installed on your computer:
```bash
# Navigate to the cloudlearn directory
cd cloudlearn

# Start local server (Python 3)
python -m http.server 8000
```
Open your browser and navigate to: `http://localhost:8000`

### Option 3: Node.js `serve` or `http-server`
```bash
# Run using npx (no global install needed)
npx serve cloudlearn
```

### Option 4: VS Code Live Server Extension
1. Open the project folder in Visual Studio Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Deploying to GitHub Pages (Free Static Hosting)

You can host CloudLearn on the internet for free using GitHub Pages in under two minutes:

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and click **New Repository**.
   - Name it `cloudlearn` and keep it Public.
2. **Push Your Files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CloudLearn Academy"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/cloudlearn.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository's **Settings** tab on GitHub.
   - Click on **Pages** in the left sidebar under "Code and automation".
   - Under **Build and deployment &rarr; Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)` (or `/cloudlearn` if hosted in a subdirectory), then click **Save**.
4. **Access Your Live Site**:
   - After 1-2 minutes, GitHub Pages will deploy your site at:  
     `https://YOUR-USERNAME.github.io/cloudlearn/`

---

## ♿ Accessibility & Quality Standards

- **Semantic HTML5**: Fully structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
- **Keyboard Navigation**: Complete tab order support with visible focus outlines and a skip link (`#main-content`).
- **Color Contrast**: Compliant with WCAG AA standard color contrast ratios for high readability.
- **Standards-Aligned Content**: Factual curriculum aligned with NIST SP 800-145 and foundational certification syllabi (AWS CLF-C02, Azure AZ-900, Google Cloud Digital Leader).

---

## 📄 License
Open Educational Resource. Free for students, educators, and technology learners worldwide.
