

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 400, suffix: "+", label: "Training Hours" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Certifications Earned" },
  { value: 1, suffix: "", label: "Internship Completed" },

];

const navLinks = [
  {
    name:"work",
    link:"#work"
  },
  {
    name:"Experience",
    link:"#experience"
  },  
  {
    name:"Skills",
    link:"#skills"
  },
  {
    name:"Testimonials",
    link:"#testimonials"
  }

];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Foundations",
    desc: "Skilled in Java, JavaScript, React, and Next.js with a focus on building scalable and user-friendly applications.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Problem-Solving Mindset",
    desc: "Passionate about tackling complex coding challenges and crafting efficient solutions through clean, maintainable code.",
  },
  {
    imgPath: "/images/time.png",
    title: "Continuous Learner",
    desc: "Constantly exploring new technologies like AI/ML , Cloud Computing to stay adaptable in a fast-changing tech landscape.",
  },
];


const expCards = [
  {
    review:
      "Chinmay showed strong adaptability during his training, quickly grasping Java fundamentals, Spring Boot, and microservices. His ability to understand company workflows made him stand out in Phase 1 of the internship.",
    imgPath: "/images/codethicsImg-1.png", 
    logoPath: "/images/codethicsLogo-1.png", 
    title: "Java Intern (Phase 1)",
    date: "August 2024 - December 2024",
    responsibilities: [
      "Trained on **Java, Java Collections, and Multithreading basics**.",
      "Learned and applied **Spring Boot and Microservices**.",
      "Built a **basic Employee CRUD application** as a starter project.",
      "Understood **company workflows and agile processes** in a professional environment.",
    ],
  },
  {
    review:
      "In Phase 2, Chinmay transitioned from training to real-world projects, contributing directly to company products and client solutions. His frontend and backend integration skills were particularly valuable.",
    imgPath: "/images/codethicsImg-2.png", 
    logoPath: "/images/codethicsLogo-2.png", 
    title: "Full Stack Intern (Phase 2)",
    date: "January 2025 - May 2025",
    responsibilities: [
      "Worked with **React.js, React DnD, Framer Motion, GSAP**, and Canvas for interactive UIs.",
      "Contributed to building the company’s in-house product **PAMS (frontend + backend integration)**.",
      "Delivered client projects such as **EWA Healthcare** and a **full-stack healthcare app for Inoxoft**.",
      "Gained hands-on experience in **frontend-backend integration and deployment**.",
    ],
  },
  {
    review:
      "Chinmay independently developed FinPort, showcasing his ability to build full-stack applications using modern frameworks. His work demonstrated creativity, technical depth, and end-to-end problem-solving.",
    imgPath: "/images/bankingLogo.png", 
    logoPath: "/images/finport-logo.svg",
    title: "Personal Project – FinPort",
    date: "March 2025 - May 2025",
    responsibilities: [
      "Built **FinPort – a modern full-stack banking application** with seamless account management and transactions.",
      "Implemented **secure authentication** (sign up/sign in) with **email/password**.",
      "Integrated **Plaid API (bank connections)** and **Dwolla API (payment processing)**.",
      "Used **Next.js 14, TypeScript, Tailwind CSS, Shadcn/ui, React Hook Form, and Zod** on the frontend.",
      "Designed with a **responsive layout**, ensuring great performance on both desktop and mobile.",
    ],
  },
];



export {
  words,
  counterItems,
  navLinks,
  abilities,
  expCards,
};