# 🌍 WanderEdge: Adventure on the Horizon

## Travel Landing Page (React)

A responsive, production-ready landing page built with React, focusing on clean architecture, accessibility, and a functional contact form.

---

## 🚀 Live Demo

---

## 📌 Overview

This project recreates a travel-themed landing page based on a provided design.
The goal was not only to match the UI, but to implement it using **scalable frontend architecture and real-world engineering practices**.

Key focus areas:

- Component-driven design
- Responsive layout
- Accessible UI
- Functional contact form with validation
- Clean and maintainable codebase

---

## 🧠 Approach

Instead of building a static page, I approached this as a **production-ready frontend module**:

- Broke the UI into reusable components
- Structured the project for scalability
- Implemented form validation and submission states
- Ensured accessibility and semantic HTML
- Designed for responsiveness across devices

---

## 🏗️ Tech Stack

- **React (Vite)**
- **TypeScript**
- **CSS / Tailwind / CSS Modules**
- **React Hook Form** – form handling
- **Zod** – schema validation
- **Vitest + React Testing Library** – testing
- **GitHub Actions** – CI pipeline
- **Docker**

---

## 📂 Project Structure

```
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      Container.tsx
    sections/
      HeroSection.tsx
      FeaturesSection.tsx
      PromoSection.tsx
      ContactSection.tsx
    ui/
      Button.tsx
      Input.tsx
      TextArea.tsx
      Card.tsx
  data/
    content.ts
  hooks/
  utils/
  App.tsx
```

---

## ✨ Features

### 🎨 UI & Layout

- Fully responsive design (mobile → desktop)
- Reusable UI components
- Consistent spacing and typography system

### 📬 Contact Form (Functional)

- Input validation (required fields, email format)
- Real-time error feedback
- Loading state during submission
- Success and error handling
- Clean UX flow

> Note: In a real-world scenario, this would connect to a backend API or serverless function.

---

## ♿ Accessibility

- Semantic HTML (`header`, `main`, `section`, `footer`)
- Proper form labels and input associations
- Keyboard-friendly navigation
- Meaningful alt text for images
- Logical heading hierarchy

---

## 🧪 Testing

Basic test coverage is included for key behaviors:

- Form validation logic
- Submit flow
- UI rendering of important components

Run tests:

```bash
npm run test
```

---

## ⚙️ CI Pipeline

A simple CI workflow is configured using GitHub Actions:

- Install dependencies
- Run lint checks
- Execute tests
- Build the project

This ensures code quality and prevents broken builds.

---

## 🐳 Docker

The app can be containerized for consistent builds and deployment.

Build and run:

```bash
docker build -t travel-app .
docker run -p 3000:80 travel-app
```

---

## 🛠️ Setup & Installation

```bash
git clone <your-repo-url>
cd project-name

npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
npm run preview
```

---

## 🔍 Key Engineering Decisions

- **Component-driven architecture** → improves reusability and scalability
- **Data-driven rendering** → avoids hardcoding repeated UI elements
- **Form validation with schema (Zod)** → ensures predictable input handling
- **Separation of concerns** → UI, logic, and data are clearly divided
- **CI integration** → ensures reliability and maintainability

---

## 🚧 Future Improvements

If extended further, I would:

- Connect form to a real backend API
- Add end-to-end testing (Playwright / Cypress)
- Introduce Storybook for UI components
- Implement dark/light theme support
- Optimize performance (code splitting, lazy loading)

---

## 👨‍💻 Author

**Vishoodi Cooray**

---

## 💬 Final Note

This project demonstrates not just UI implementation, but how a frontend feature would be built in a real production environment — focusing on **maintainability, usability, and engineering quality**.

---
