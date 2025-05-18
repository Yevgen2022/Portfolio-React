# Developer Portfolio — Yevhen Oshkukov

A modern, responsive web portfolio to present my frontend and backend projects, resume, certificates, education, and contact form.

---

##  Live Demo

🔗 [View it here](https://yevgen2022.github.io/Portfolio-React/)

---

##  Features

- Clean UI with Tailwind CSS
- Dynamic routing via React Router
- Filterable project templates (Landing, Frontend-App, Backend)
- Certificate and education sections
- Contact form with success modal and Formspree integration
- Dark mode support

---

##  Tech Stack

- **React + Vite**
- Zustand for global state management
- Tailwind CSS for styling
- React Router DOM
- React Icons
- Formspree (form handling with fetch)
- GitHub Pages for deployment

---

##  Folder Structure (simplified)

```

src/
├── assets/img/ # Project, certificates, and profile images
├── components/ # Reusable UI components (Card, Footer, Modal, etc.)
├── pages/templates/ # Main route views (Home, Contact, Resume, etc.)
├── pages/projectsDetails # Dynamic project detail views
├── data/ # JSON/JS project and profile data
├── store/ # Zustand global state logic
├── routes/ # App routing configuration

public/
├── PaintCat.png # Favicon
├── vite.svg # Default vite icon (if used)
├── index.html # Base HTML file

docs/
├── Description.txt # Project purpose and stack (for internal/reference use)

```


---

##  How Routing Works

- Routing is handled by React Router v6
- `BrowserRouter` uses a `basename="/Portfolio-React"` for GitHub Pages
- Each project uses dynamic routes like `/projects/project-name`
- All unmatched routes show "No Match" fallback

---

[//]: # (##  Contact)

[//]: # ()
[//]: # (Feel free to reach out:)

[//]: # ()
[//]: # (- GitHub: [github.com/Yevgen2022]&#40;https://github.com/Yevgen2022&#41;)

[//]: # (- LinkedIn: [Yevhen Oshkukov]&#40;https://www.linkedin.com/in/yevhen-oshkukov-436973254/&#41;)

[//]: # (- Email: [sy.yevhen.lc@gmail.com]&#40;mailto:sy.yevhen.lc@gmail.com&#41;)

---
