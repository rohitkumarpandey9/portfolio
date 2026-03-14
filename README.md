# Rohit Kumar Pandey — Portfolio

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Photo
- Apni photo `public/photo.jpg` me rakho
- Project images `public/proj1.jpg`, `public/proj2.jpg` me rakho
- Resume `public/resume.pdf` me rakho

### 3. Run Project
```bash
npm run dev
```
Browser me open hoga: `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

---

## Photo Kaise Add Karein
1. VS Code me `public/` folder open karo
2. Apni photo copy karo
3. Name rename karo `photo.jpg`
4. Done! Hero section me automatically dikhegi

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx + .css
│   ├── Hero.jsx + .css       ← Photo yahan hai
│   ├── About.jsx + .css
│   ├── Education.jsx + .css
│   ├── Skills.jsx + .css
│   ├── Projects.jsx + .css   ← Project images yahan
│   ├── Contact.jsx + .css
│   ├── Footer.jsx + .css
│   └── ParticlesBg.jsx       ← Particle background
├── App.jsx
├── main.jsx
└── index.css
public/
├── photo.jpg      ← Apni photo yahan rakho
├── proj1.jpg      ← Project 1 screenshot
├── proj2.jpg      ← Project 2 screenshot
└── resume.pdf     ← Apna resume yahan rakho
```
