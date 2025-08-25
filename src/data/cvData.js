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
        "A highly motivated and eager Fullstack Software Developer with a strong foundation in both front-end and back-end development. I'm proficient in languages like Java, Python, JavaScript, and C#, with experience in frameworks such as Spring Boot, React, and Django. I'm seeking to apply my skills and contribute to a dynamic team environment.",
      
      skills: [
        "Java", "Kotlin", "C#", "PHP", "Python", "JavaScript", "SQL", "Solidity",
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
        company: "ALL IN ONE EAST AFRICA",
        role: "Software Engineer",
        startDate: "May 2016",
        endDate: "November 2016",
        description: [
          "Developed and maintained software for biometric access control and time attendance devices using Datafox and ZKT ECO SDKs, ensuring seamless data synchronization.",
          "Collaborated with a global team of technicians in Germany to troubleshoot and resolve system bugs and performance issues.",
          "Engineered and stress-tested new applications to ensure reliability before deployment, significantly reducing post-launch defects.",
          "Wrote code to facilitate communication between devices and SQL Server, and utilized Team Foundation Server for source control.",
        ],
      },
      {
        company: "Flex Communications Limited",
        role: "Software Engineer",
        startDate: "February 2016",
        endDate: "April 2016",
        description: [
          "Redeveloped existing applications from PHP and PostgreSQL to C# and MSSQL, improving performance and scalability.",
          "Assisted C++ developers with integrating PHP APIs and developing firmware in Visual Studio 2015.",
          "Wrote complex queries to facilitate the migration of data from PostgreSQL to MSSQL databases.",
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
        link: null, // No link provided
      },
      {
        title: "Web Application with Chatbot and Blockchain",
        description:
          "Developed a full-stack web application featuring a chatbot, utilizing React for the front-end and blockchain technology for the back-end. This project enhanced problem-solving skills and demonstrated an ability to meet tight deadlines while applying in-depth knowledge of Javascript and Solidity.",
        link: "https://github.com/iProjects/kom_consult_chat_app.git", // No link provided
      },
      // You can add more projects here if you have them.
    ],
    
    contact: {
      email: "kevinmutugikithinji@gmail.com",
      phone: "+254740538757",
      whatsApp: "+254717769329",
    },
  };