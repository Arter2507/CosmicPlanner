# 🌌 Cosmic Planner | Trình quản lý kế hoạch chủ đề vũ trụ

**EN:**  
Cosmic Planner is an artistic web application for planning and task management inspired by cosmic aesthetics.  
It uses **Google Sheet** as a lightweight database and **Google Apps Script** for backend API.

**VI:**  
Cosmic Planner là ứng dụng web nghệ thuật giúp quản lý và lập kế hoạch theo chủ đề vũ trụ,  
sử dụng **Google Sheet** làm cơ sở dữ liệu và **Google Apps Script** làm API backend.

---

## 🚀 Tech Stack | Công nghệ sử dụng
- Vite + React + Tailwind CSS  
- Google Apps Script Web App (API)  
- Google Sheet Database  

---

## 🧩 Features | Tính năng
- Themed cosmic interface (dark/light toggle)  
- Background image system  
- Data sync with Google Sheet  
- Modular layout for easy expansion  

---

## ⚙️ Environment Setup | Cấu hình môi trường

**Create `.env` file / Tạo file `.env`:**
```env
VITE_GAS_WEB_APP_URL=your_api_key_here
```
---
## 📦 Run Project | Chạy dự án
```
npm install
npm run dev
```

---
## 🪐 Author

- Developed by Arter.  
- Art-inspired project for structured planning.  
*Project images taken from Pinterest.*  
*Project written by AI.*  

``
>Note:
>This project is designed for artistic exploration and productivity alignment with Google’s ecosystem.
>Dự án được thiết kế với mục tiêu nghệ thuật và đồng bộ dữ liệu cùng hệ sinh thái Google.







---
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
