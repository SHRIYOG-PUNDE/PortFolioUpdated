export const myProjects = [
  {
    id: 1,
    title: "QuickChat App",
    description:
      "QuickChat is a real-time messaging app built with MERN and Socket.io, featuring secure authentication, responsive UI, and instant communication with stored chat history.",
    subDescription: [
      "Implemented real-time communication with WebSockets (Socket.io) for instant messaging.",
      "Built secure authentication and session management with JWT.",
      "Developed scalable backend APIs using Node.js and Express.",
      "Integrated MongoDB for persistent chat storage and user data.",
      "Designed a responsive frontend in React for smooth user experience.",
    ],
    href: "https://github.com/SHRIYOG-PUNDE/Quick-Chat-App",
    logo: "",
    image: "/assets/projects/chatThumbnail.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/reactLogo.svg",
      },
      {
        id: 2,
        name: "node.js",
        path: "/assets/logos/nodejsLogo.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodbLogo.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "PortFolio Website",
    description:
      "A modern 3D portfolio website showcasing my projects, skills, and experiences with React, Tailwind, and Three.js, featuring smooth animations and an interactive user interface.",
    subDescription: [
      "Developed with React and Vite for a fast and optimized frontend experience.",
      "Implemented responsive design using Tailwind CSS for seamless viewing on all devices.",
      "Integrated Three.js and 3D models to create engaging, interactive visuals.",
      "Built reusable components for About, Projects, Experience, and Contact sections.",
      "Enhanced UX with animations and smooth navigation for a professional look.",
      "Deployed and optimized for performance, scalability, and accessibility.",
    ],
    href: "https://github.com/SHRIYOG-PUNDE/PortFolioUpdated",
    logo: "",
    image: "/assets/projects/portThumb.jpg",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/reactLogo.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "AI Image Generator",
    description:
       "An AI-powered image generation web application built using the Hugging Face API and core web development technologies.",
    subDescription: [
      "Developed a fully interactive web application that generates images from user text prompts.",
      "Integrated the Hugging Face Inference API for real-time AI-based image generation.",
      "Built a responsive and user-friendly interface using HTML, CSS, and JavaScript.",
      "Implemented asynchronous API handling with proper loading states and error management for a smooth user experience."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/aiimagethumb.jpg",
    tags: [
      {
        id: 1,
        name: "Hugging Face API",
        path: "/assets/logos/hflogo.svg",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/logos/reactLogo.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
 {
  id: 4,
  title: "Expense Tracker Platform",
  description:
    "A full-stack expense management application designed to track, analyze, and optimize personal financial data with secure authentication and real-time insights.",
  subDescription: [
    "Developed a secure MERN-based platform to manage income and expenses with JWT authentication.",
    "Implemented interactive financial dashboards using Chart.js for category-wise and monthly expense analysis.",
    "Engineered backend APIs with Node.js and Express to handle transaction CRUD operations and user data securely.",
    "Utilized MongoDB Aggregation Pipeline to generate real-time financial insights and summaries.",
    "Integrated Cloudinary for receipt uploads and Node-Cron for automating recurring transactions like subscriptions and rent.",
  ],
  href: "https://github.com/SHRIYOG-PUNDE/EXPENSETRACKER", 
  logo: "",
  image: "/assets/projects/expense-tracker.jpg", // update if needed
  tags: [
    {
      id: 1,
      name: "React.js",
      path: "/assets/logos/reactLogo.svg",
    },
    {
      id: 2,
      name: "Node.js",
      path: "/assets/logos/nodejsLogo.svg",
    },
    {
      id: 3,
      name: "MongoDB",
      path: "/assets/logos/mongodbLogo.svg",
    },
    {
      id: 4,
      name: "Chart.js",
      path: "/assets/logos/Chartjs.svg",
    },
    {
      id: 5,
      name: "Cloudinary",
      path: "/assets/logos/Cloudinary.svg",
    },
  ],
},
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: "/assets/logos/html5.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: "/assets/logos/css3.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/SHRIYOG-PUNDE",
    icon: "/assets/socials/gitHub.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shriyog-punde-26239b25b/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shriyog_p18/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    job: "Python Dev Intern",
    date: "2025-Mar",
    contents: [
      "Developed and optimized backend services using Python and Django/Flask, improving API response times by 20%.",
      "Automated repetitive data processing tasks using Python scripts and libraries like Pandas and NumPy.",
      "Integrated third-party APIs and handled complex JSON data structures for seamless frontend-backend communication.",
      "Identified and resolved software bottlenecks through rigorous debugging and unit testing using PyTest.",
      "Collaborated in an Agile environment, managing version control and code reviews via Git and GitHub.",
    ],
  },
  {
    title: "Analytics Intern",
    job: "Cognizant",
    date: "2026",
    contents: [
      "Leveraged data analytics tools to process large datasets, identifying key trends and business insights for stakeholders.",
      "Built interactive data visualizations and dashboards to simplify complex analytical findings.",
      "Cleaned and pre-processed raw data using SQL and Python to ensure high data integrity for modeling.",
      "Collaborated with cross-functional teams to automate reporting processes, reducing manual effort by 30%.",
      "Gained hands-on experience with enterprise-level data workflows and cloud-based analytics environments.",
    ],
  },
  // {
  //   title: "Freelance Developer",
  //   job: "Self-Employed",
  //   date: "2025-Present",
  //   contents: [
  //     "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //     "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //   ],
  // },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
