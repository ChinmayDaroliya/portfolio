<div align="center">
  <!-- <br />
    <a href="https://github.com/ChinmayDaroliya" target="_blank">
      <img src="public/images/readme.png" alt="Project Banner">
    </a>
  <br /> -->

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/-EmailJS-FFDB00?style=for-the-badge&logo=emailjs&logoColor=black" />
  </div>

  <h3 align="center">🌐 Interactive 3D Portfolio Website</h3>

   <div align="center">
     A modern 3D portfolio built with Next.js, GSAP, Tailwind CSS, and Three.js.  
     Featuring smooth animations, interactive 3D models, and a professional contact form.
   </div>
</div>

---

## 📋 Table of Contents
1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  
5. 🔗 [Assets & Models](#assets--models)  
6. 🚀 [Deployment](#deployment)  
7. 👨‍💻 [Author](#author)  

---

## 🤖 Introduction
This project is a **3D Developer Portfolio Website** showcasing interactive `.glb` 3D models, smooth GSAP-powered animations, and a responsive layout built with **Next.js & Tailwind CSS**.  

It also integrates **@emailjs/browser** to handle contact form submissions directly without a backend.  
The goal of this portfolio is to **stand out from traditional static sites** by providing a highly engaging, immersive user experience.  

---

## ⚙️ Tech Stack
- **Next.js 14**
- **Tailwind CSS**
- **GSAP (GreenSock Animation Platform)**
- **Three.js & React Three Fiber**
- **@emailjs/browser**
- **.glb Models**
- **Vercel (planned deployment)**  

---

## 🔋 Features
✔️ Animated 3D models with `.glb` support  
✔️ Smooth GSAP animations & scroll interactions  
✔️ Responsive design with Tailwind CSS (mobile + desktop)  
✔️ EmailJS-powered contact form (no backend required)  
✔️ Multi-section layout (About, Projects, Contact)  
✔️ Micro-interactions and hover effects  
✔️ Fast builds with Next.js  

---

## 🤸 Quick Start

### 1️⃣ Prerequisites
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/)  
- [npm](https://www.npmjs.com/)  

### 2️⃣ Clone the Repo
```bash
git clone https://github.com/ChinmayDaroliya/3d-portfolio.git
cd 3d-portfolio


Installation Steps
1️⃣ Clone the Repository
bashgit clone https://github.com/ChinmayDaroliya/3d-portfolio.git
cd 3d-portfolio
2️⃣ Install Dependencies
bashnpm install
# or
yarn install
3️⃣ Set Up Environment Variables

Copy the example environment file:

bashcp .env.example .env.local

Fill in your EmailJS credentials in .env.local:

envNEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
4️⃣ Run the Development Server
bashnpm run dev
# or
yarn dev
Now open http://localhost:3000 in your browser 🎉