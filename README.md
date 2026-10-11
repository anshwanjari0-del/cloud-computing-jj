# CloudLearn – Cloud Computing Academy

> An open-access, responsive educational web platform designed to teach foundational to intermediate cloud computing concepts, provider comparisons (AWS, Azure, GCP), hands-on projects, and interactive quizzes.

---

## 📖 Overview

**CloudLearn** (Cloud Computing Academy) is a comprehensive, framework-free web platform built using pure standards-based **HTML5**, **CSS3**, and **Vanilla JavaScript**. It provides students, educators, and cloud enthusiasts with clear educational modules, practical project guides, cloud service matrix comparisons, and self-assessment tools.

> ℹ️ **Detailed Documentation**: For in-depth architectural notes, curriculum module breakdowns, local development server options, and deployment guides, please see [cloudlearn/README.md](cloudlearn/README.md).

---

## 🚀 Quick Start: Opening the Website

Because CloudLearn is built strictly with standard web technologies and relative paths, no package manager, compiler, or build step is required.

### 1. Direct Browser Access (Simplest)
- Double-click the root [`index.html`](index.html) or open [`cloudlearn/index.html`](cloudlearn/index.html) directly in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
- The root `index.html` automatically redirects to the full academy experience in `cloudlearn/index.html`.

### 2. Local HTTP Server (Optional)
If you prefer running via a local development server:
- **Python 3**:
  ```bash
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

- **Node.js**:
  ```bash
  npx serve .
  ```

- **VS Code Live Server**:
  Right-click `index.html` or `cloudlearn/index.html` in VS Code and select **"Open with Live Server"**.

---

## 📁 Project Structure

```text
ccclpp/
├── index.html                  # Root landing page (auto-redirects to cloudlearn/index.html)
├── README.md                   # Repository overview and quick start guide
└── cloudlearn/                 # Main application directory
    ├── index.html              # CloudLearn home page with roadmap & curriculum highlights
    ├── learn.html              # 12 comprehensive cloud learning modules & search
    ├── providers.html          # AWS vs Azure vs GCP comparison profiles & service matrix
    ├── projects.html           # 5 step-by-step hands-on beginner cloud projects
    ├── quiz.html               # 15-question interactive assessment quiz
    ├── README.md               # Detailed project documentation & deployment guide
    ├── css/
    │   └── style.css           # Responsive design system & styling
    ├── js/
    │   ├── main.js             # Shared navigation, drawer, toast, & checklist logic
    │   ├── learn.js            # Topic search, category filter pills, & accordions
    │   └── quiz.js             # Interactive quiz engine & scoring system
    └── assets/
        └── images/
            └── cloudlearn-logo.svg # Vector logo asset
```

---

## 🌟 Key Features

- **12 Comprehensive Curriculum Modules**: Covers NIST cloud definitions, service models (IaaS, PaaS, SaaS), deployment architectures, virtualization, containerization, VPC networking, security/IAM, serverless, and FinOps.
- **Provider Comparisons**: Detailed side-by-side analysis of AWS, Microsoft Azure, and Google Cloud Platform (GCP).
- **Hands-on Projects**: Step-by-step beginner guides with copyable snippets and completion checklists.
- **Interactive Quiz**: Knowledge checks with instant scoring, feedback, and category breakdowns.
- **Zero Dependencies**: 100% lightweight Vanilla HTML, CSS, and JS with fast load times.

---

## 📚 Detailed Documentation

For full documentation, local server setup guides, and step-by-step GitHub Pages deployment instructions, refer to **[cloudlearn/README.md](cloudlearn/README.md)**.
