// src/data/cvData.js
export const cvData = {
    header: {
      name: "Kevin Mutugi Kithinji",
      title: "Fullstack Software Developer",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/kevin-mutugi-kithinji-b0690087/",
        github: "https://github.com/iProjects",
      },
      email: "kevinmutugikithinji@gmail.com",
      phone: "+254740538757",
    },
    
    about: {
      summary:
        "A highly motivated and eager Fullstack Software Developer with a strong foundation in both front-end and back-end development. I'm proficient in languages like Java, Python, Node JavaScript, and C#, with experience in frameworks such as Spring Boot, React, and Django. I'm seeking to apply my skills and contribute to a dynamic team environment.",
      
      skills: [
        "Java", "Kotlin", "C#", "PHP", "Python", "Node js JavaScript", "SQL", "Solidity",
        "React", "Flutter", "Spring Boot", "ASP.NET MVC", "Laravel", "Django", "Flask", "Next.js",
        "MySQL", "PostgreSQL", "MS SQL Server", "SQLite", "MongoDB",
        "Android", "Git", "RESTful APIs", "MVC", "Blockchain Development"
      ],
    },
    
    experience: [
      {
        company: "Thika Water and Sewerage Company Ltd",
        role: "IT Support (Trainee)",
        startDate: "September 2024",
        endDate: "December 2024",
        description: [
          "Configured and maintained Windows and Linux operating systems, ensuring optimal performance and security.",
          "Troubleshot and resolved hardware and software issues, minimizing downtime for end-users.",
          "Implemented data backup and disaster recovery procedures, contributing to data integrity.",
          "Utilized command-line tools (e.g., ping, ipconfig) for network diagnostics and troubleshooting.",
          "Managed user accounts and network settings, ensuring secure access to company resources.",
        ],
      },  
      {
        company: "ISON BPO International Limited",
        role: "Software Engineer",
        startDate: "July 2015",
        endDate: "February 2016",
        description: [
          "Created and maintained web applications and intranet services using Visual Studio 2013, serving employees across the country.",
          "Gathered and analyzed user requirements from employees to develop and customize in-house applications, leading to improved operational efficiency.",
          "Maintained and supported multiple company servers and applications, ensuring high availability and uptime.",
          "Developed two key web applications: a Purchase Order Management System and a Travel Management System using HTML5, CSS3, JavaScript/jQuery, and MSSQL Server 2014.",
        ],
      },
      {
        company: "Software Providers Limited",
        role: "Software Developer",
        startDate: "May 2012",
        endDate: "June 2015",
        description: [
          "Managed the full software development lifecycle for multiple applications, including requirements gathering, development, testing, and quality assurance.",
          "Developed and customized a range of desktop and web applications, including 'Soft Books' systems for schools, payroll, and SACCO management.",
          "Engineered four web applications using ASP.NET MVC 4 and C# with SQL Server 2008 R2 as the backend database.",
          "Developed and maintained a 'Fanikiwa Peer-to-Peer Lending' platform, enabling users to register, get loans, and manage transactions via a web application and mobile phone.",
          "Contributed to a diverse tech stack, with hands-on experience in C#, ASPX, PHP, MySQL, SQL Server, Java, Ajax, SOAP, XML, and J2EE.",
          "Redesigned and deployed the Fanikiwa system using Java and Google App Engine for cloud hosting, enhancing its availability for web and mobile users.",
        ],
      },
      {
        company: "Kenya Power",
        role: "IT Support (Trainee)",
        startDate: "September 2011",
        endDate: "April 2012",
        description: [
          "Provided first-level technical support to end-users, troubleshooting and resolving hardware, software, and network-related issues.",
          "Performed installations and configurations of Windows workstations and operating systems (Windows 7, XP, Vista) to meet client demands.",
          "Managed user accounts on the company domain, including adding, deleting, and modifying profiles and resetting passwords.",
          "Implemented and performed daily data backup procedures and preventative maintenance on company PCs.",
        ],
      },
    ],
    
    // ADD THIS NEW EDUCATION SECTION
  education: [
    {
      degree: "Degree in Information Technology",
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      startDate: "January 2021",
      endDate: "April 2024",
      relevantCoursework: [
        "Object-Oriented Programming (Java, C#)",
        "Database Management Systems (SQL, NoSQL)",
        "Web Development (HTML, CSS, JavaScript, PHP, Python frameworks)",
        "Software Engineering Principles",
        "Data Structures and Algorithms",
        "Operating Systems",
        "Networking Fundamentals",
        "Human Computer Interaction",
        "Artificial Intelligence",
      ],     
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      startDate: "January 2010",
      endDate: "November 2012",
      relevantCoursework: [], 
    },
  ],


    projects: [
      {
        title: "Machine Learning Model for HIV Patient ART Risk Prediction",
        description:
          "Collaborated in a team to develop a machine learning model using Python to predict ART discontinuation risk for HIV patients. Utilized data analysis techniques to categorize patients into risk groups, providing actionable insights for healthcare providers.",
          github_link: null, // No link provided
          live_link: null, // No link provided
          download_link: null, // No link provided
      },
      {
        title: "Web Application with Chatbot and Blockchain",
        description:
          "Developed a full-stack web application featuring a chatbot, utilizing React for the front-end and blockchain technology for the back-end. This project enhanced problem-solving skills and demonstrated an ability to meet tight deadlines while applying in-depth knowledge of Javascript and Solidity.",
          github_link: "https://github.com/iProjects/kom_consult_chat_app.git", 
          live_link: null, // No link provided
          download_link: null, // No link provided
      },
      {
        title: "Elevator API - Node.js & SQLite",
        description:
          "A robust and scalable backend solution for a simulated elevator system. Built with Node.js and Express, this API provides asynchronous elevator control, real-time status monitoring, and comprehensive event logging using a SQLite database. Perfect for a building management system.",
          github_link: "https://github.com/iProjects/elevator-api.git", 
          live_link: "https://elevator-api-33fb.onrender.com/api/elevator/logs", 
          download_link: null, // No link provided
      },
      {
        title: "Portfolio",
        description:
          "A personal portfolio website built with React to showcase my skills, projects, and professional experience. This site is designed to be clean, responsive, and easily customizable.",
          github_link: "https://github.com/iProjects/kevin_mutugi_kithinji_portfolio.git", 
          live_link: null, // No link provided
          download_link: null, // No link provided
      },
      {
        title: "Soft Books Payroll",
        description:
          "Soft Books Payroll is a comprehensive, multi-user, Client/Server payroll management system designed to provide small, mid-sized, and large organizations with a powerful, yet low-cost, solution for managing their workforce compensation. It is built to be dynamic and fully compliant with the ever-changing tax landscape in Kenya, ensuring businesses stay ahead of government policy changes. Click on the download link to download, then rename the file from SBPayrollSetup.msi.kmk to SBPayrollSetup.msi then run the installer and follow prompts to install the application.",
          github_link: "https://github.com/iProjects/soft_books_payroll.git", 
          live_link: null, // No link provided
          download_link: "https://drive.google.com/file/d/1Fm8wGd_RUmtQNvwYrY9SiqHJEKXvhjND/view?usp=sharing",
      },
      {
        title: "Soft Books Sacco",
        description:
          "Soft Books SACCO Management System is a comprehensive, multi-user, client/server solution for small to large organizations. Built to be dynamic and compliant with Kenyan financial regulations, it promotes accountability, transparency, and efficiency in SACCO operations. Click on the download link to download, then rename the file from SBSaccoSetup.msi.kmk to SBSaccoSetup.msi then run the installer and follow prompts to install the application.",
          github_link: "https://github.com/iProjects/soft_books_sacco.git", 
          live_link: null, // No link provided
          download_link: "https://drive.google.com/file/d/1-_UtCuVl3MdQrw9YjolbERQTp8g6omq7/view?usp=sharing",
      },
      // You can add more projects here if you have them.
    ],
    
    // ADD THIS NEW PHOTOS SECTION
  photos: [
    {
      id: 1,
      image: '/photos/passport.jpg',
      caption: 'A professional headshot.',
    },
    {
      id: 2,
      image: '/photos/jkuat_degree_certificate.jpg',
      caption: 'Degree Certificate',
    },
    {
      id: 3,
      image: '/photos/jkuat_diploma_certificate.jpg',
      caption: 'Diploma Certificate',
    },
    {
      id: 4,
      image: '/photos/kehmis_bootcamp_certificate.jpg',
      caption: 'Hackathon Certificate',
    },
    // Add more photo objects as needed
  ],
  
  referees: [
    {
      name: "Francis Muraya",
      title: "Director",
      company: "Software Providers Limited",
      phone: "0715413144",
      email: "fmuraya11@gmail.com",
      note: "Projects Manager"
    },
    {
      name: "Peter Osiago",
      title: "Information Systems",
      company: "Jomo Kenyatta University of Agriculture and Technology",
      phone: "0711882222",
      email: "peterosiago@jkuat.ac.ke",
      note: "Industrial attachment supervisor"
    },
    {
      name: "Brian Kinoti",
      title: "IT and Telecommunications",
      company: "Thika Water and Sewerage Company Ltd",
      phone: "0726400069",
      email: "muthomi34@gmail.com | bkinoti@thikawater.co.ke",
      // You can add a note about the second email if you want
      note: "Attachment Supervisor" 
    }
  ],

    contact: {
      email: "kevinmutugikithinji@gmail.com",
      phone: "+254740538757",
      whatsApp: "+254717769329",
    },
  };