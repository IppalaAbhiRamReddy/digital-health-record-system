# Digital Health Care Record System - Windows Setup Guide

A comprehensive guide to clone and run this project on a Windows computer.

---

## 📋 Project Overview

**Digital Health Care Record System** is a secure, modern healthcare web application built with:

| Technology | Purpose |
|------------|---------|
| React.js | UI Framework |
| Vite | Build Tool & Dev Server |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| React Router DOM | Navigation |
| Lucide React | Icons |
| Shadcn/UI | Component Library |

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed on your Windows machine:

### 1. Node.js (v18 or higher)

**Download:** https://nodejs.org/en/download/

1. Download the **LTS (Long Term Support)** version for Windows
2. Run the installer (`.msi` file)
3. Follow the installation wizard (keep default settings)
4. Check "Automatically install the necessary tools" if prompted

**Verify installation:** Open Command Prompt or PowerShell and run:

```bash
node --version
npm --version
```

You should see version numbers like `v18.x.x` and `9.x.x`.

### 2. Git for Windows

**Download:** https://git-scm.com/download/win

1. Download and run the installer
2. Use recommended settings during installation
3. Select "Use Git from the Windows Command Prompt" when asked

**Verify installation:**

```bash
git --version
```

### 3. Code Editor (Recommended)

**Visual Studio Code:** https://code.visualstudio.com/

Recommended extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter

---

## 🚀 Step-by-Step Setup Instructions

### Step 1: Open Terminal

You can use any of these:
- **PowerShell** (recommended) - Press `Win + X`, select "Windows PowerShell"
- **Command Prompt** - Press `Win + R`, type `cmd`, press Enter
- **Git Bash** - Right-click in any folder, select "Git Bash Here"
- **VS Code Terminal** - Open VS Code, press `` Ctrl + ` ``

### Step 2: Choose Installation Directory

Navigate to where you want to store the project:

```bash
cd C:\Projects
```

Or create a new folder:

```bash
mkdir C:\Projects
cd C:\Projects
```

### Step 3: Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

Replace `<YOUR_REPOSITORY_URL>` with your actual Git repository URL.

### Step 4: Navigate to Project Folder

```bash
cd digital-health-care-record-system
```

### Step 5: Install Dependencies

```bash
npm install
```

This will download all required packages. Wait for it to complete (may take 1-3 minutes).

### Step 6: Start Development Server

```bash
npm run dev
```

### Step 7: Open in Browser

Once the server starts, open your browser and navigate to:

```
http://localhost:8080
```

You should see the Digital Health Care Record System landing page.

---

## 📜 Available Scripts

Run these commands from the project root directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 📁 Project Structure

```
digital-health-care-record-system/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Shadcn/UI base components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Features.tsx   # Features grid
│   │   ├── Benefits.tsx   # Benefits section
│   │   ├── Footer.tsx     # Page footer
│   │   ├── Logo.tsx       # Application logo
│   │   ├── FeatureCard.tsx
│   │   └── NavLink.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Landing page (/)
│   │   ├── Login.tsx      # Login page (/login)
│   │   └── NotFound.tsx   # 404 page
│   ├── App.tsx            # Main app with routing
│   ├── App.css            # Global styles
│   ├── index.css          # Tailwind & CSS variables
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── SETUP_GUIDE.md         # This file
```

---

## 🌐 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with features and benefits |
| `/login` | Login page with demo role selection |

---

## 🔧 Troubleshooting Common Windows Issues

### Issue 1: PowerShell Execution Policy Error

**Error:** `running scripts is disabled on this system`

**Solution:** Open PowerShell as Administrator and run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue 2: Port Already in Use

**Error:** `Port 8080 is already in use`

**Solution:** Either:
1. Close the application using port 8080
2. Or modify `vite.config.ts` to use a different port:
   ```typescript
   server: {
     port: 3000, // Change to any available port
   }
   ```

### Issue 3: Node Modules Permission Error

**Error:** `EPERM: operation not permitted`

**Solution:**
1. Close all editors and terminals
2. Delete `node_modules` folder
3. Delete `package-lock.json` file
4. Run `npm install` again

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Issue 4: Path Too Long Error

**Error:** `ENAMETOOLONG` or path-related errors

**Solution:** Enable long paths in Windows:
1. Open Registry Editor (`Win + R`, type `regedit`)
2. Navigate to: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem`
3. Set `LongPathsEnabled` to `1`
4. Restart your computer

### Issue 5: npm Not Recognized

**Error:** `'npm' is not recognized as an internal or external command`

**Solution:**
1. Reinstall Node.js
2. Or add Node.js to PATH manually:
   - Search "Environment Variables" in Windows
   - Edit "Path" under System Variables
   - Add: `C:\Program Files\nodejs\`

---

## 🔐 Demo Login Information

The login page includes a **demo role selector** for UI preview purposes:

| Role | Description |
|------|-------------|
| Patient | View personal health records |
| Doctor | Access patient records, add diagnoses |
| Staff | Administrative functions |
| Hospital Authority | Hospital-wide oversight |
| Admin | Full system access |

> **Note:** This is a frontend-only demo. Role selection is for UI preview purposes only. In production, roles will be detected automatically after authentication.

---

## 🛠️ Development Tips

### Hot Reload
The development server supports hot reload. Save any file and changes appear instantly in the browser.

### Tailwind IntelliSense
Install the Tailwind CSS IntelliSense VS Code extension for autocomplete suggestions.

### Component Development
All UI components are in `src/components/`. Create new components here for reusability.

---

## 📞 Need Help?

If you encounter issues not covered in this guide:

1. Check the browser console for errors (`F12` → Console tab)
2. Check the terminal for build errors
3. Ensure all prerequisites are correctly installed
4. Try deleting `node_modules` and reinstalling

---

## 📄 License

© 2024 Digital Health Care Record System. All rights reserved.

**Secure • Compliant • Patient-Centric**
