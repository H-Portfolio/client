// Mock data for portfolio
export const mockData = {
  personal: {
    name: "Hansaka Rathnayake",
    title: "Full-Stack Developer & AI Engineer",
    bio: "Passionate software developer with expertise in modern web technologies and AI/ML. I build scalable applications that solve complex problems and deliver exceptional user experiences.",
    email: "iamhansakaratnayake@gmail.com",
    phone: "+94 (71) 438-4181",
    location: "Panadura, Sri Lanka",
    status: `Associate Software Engineer, Undergraduate`,
    profileImage: "/assets/avatar1.png",
    resumeUrl: "/assets/cv/Hansaka Rathnayake Resume.pdf"
  },
  
  social: {
    github: "https://github.com/HansakaRatnayake",
    linkedin: "https://www.linkedin.com/in/hansaka-rathnayake-dev/",
    email: "iamhansakaratnayake@gmail.com",
    portfolio: "https://hansaka.site"
  },

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Astro"],
    backend: ["Node.js", "Python", "Django", "FastAPI","lask", "Express.js", "Java", "Springboot"],
    databases: ['PostgreSQL','H2', 'MongoDB', 'MySQL', "sqlite" ,'Redis', 'Firebase', "ChromaDB", "neo4j"],
    aiml: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Scikit-learn", "Pandas","RAG"],
    devops: ["Docker", "AWS", "CI/CD", "Git","github actions", "Linux"],
    tools: ["Intellij","VS Code","PyCharm","Anaconda", "Figma", "Postman", "Jupyter", "Firebase", "Vercel"]
  },

  experience: [
    {
      "id": 1,
      "company": "Seekers Cloud",
      "position": "Associate Software Engineer",
      "duration": "February 2025 - Present",
      "location": "Panadura, Sri Lanka",
      "logo": "https://seekerscloud.com/assets/logo/logo.png",
      "description": "Develop and maintain scalable web applications using React, Node.js, Spring Boot, and Angular, ensuring 99% uptime and optimal performance. Design and implement RESTful APIs with Express.js, integrating with PostgreSQL and MongoDB databases. Architect micro-frontend solutions that improved application modularity by 40% and reduced deployment time. Leverage AWS S3 for secure file storage and SendGrid for automated email notifications, enhancing user engagement by 25%. Build and maintain CI/CD pipelines using GitHub Actions, reducing deployment time.",
      "achievements": [
        "Developed micro-frontend solutions improving application modularity by 40%",
        "Reduced deployment time through efficient CI/CD pipelines",
        "Enhanced user engagement by 25% with AWS S3 and SendGrid integration"
      ]
    },
    {
      "id": 2,
      "company": "Seekers Cloud",
      "position": "Software Engineering Trainee",
      "duration": "August 2024 - February 2025",
      "location": "Panadura, Sri Lanka",
      "logo": "https://seekerscloud.com/assets/logo/logo.png",
      "description": "Completed comprehensive training in full-stack development and modern software engineering practices. Gained hands-on experience with enterprise-level applications and cloud technologies. Collaborated on multiple projects using Agile methodologies and version control systems.",
      "achievements": [
        "Completed training in full-stack development and modern software engineering practices",
        "Gained hands-on experience with enterprise-level applications",
        "Collaborated effectively using Agile methodologies"
      ]
    },
    {
      "id": 3,
      "company": "Earth University College",
      "position": "Teaching Demonstrator",
      "duration": "2023 - 2024",
      "location": "Gampaha, Sri Lanka",
      "logo": "https://earth.lk/resources/images/logo.png",
      "description": "Delivered lectures and practical sessions on Object-Oriented Analysis & Design and Database Management Systems. Mentored students in software development projects using Java and MySQL. Created comprehensive course materials and assessments, improving student learning outcomes by 20%.",
      "achievements": [
        "Improved student learning outcomes by 20% through comprehensive materials",
        "Mentored students in Java and MySQL-based projects",
        "Delivered effective lectures on OOAD and DBMS"
      ]
    }
  ],

  devops: [
    {
  id: 1,
  title: "SSH Security Hardening",
  description: "Disabled direct root SSH login across multiple production servers, strengthening overall system security and aligning with industry best practices.",
  technologies: ["Linux", "OpenSSH", "Bash"],
  category: "Security & Infrastructure Hardening",
  metrics: "Reduced unauthorized access risks by 70%",
  icon: "🔐",
  complexity: "Medium",
  duration: "1 hour",
  fullDescription: "Performed a critical security hardening activity for xFusionCorp Industries by disabling direct root SSH login on multiple production servers. This measure significantly strengthened the security posture, minimized potential attack vectors, and ensured compliance with recommended security best practices."
}
,
{
  id: 2,
  title: "SELinux Setup & Configuration",
  description: "Installed and configured SELinux policy packages on Nautilus App Server with a permanent disablement plan to ensure stability during future updates.",
  technologies: ["Linux", "SELinux", "Bash"],
  category: "Security & Infrastructure Hardening",
  metrics: "Zero downtime, seamless transition for future security updates",
  icon: "🛡️",
  complexity: "Medium",
  duration: "1 hour",
  fullDescription: "As part of xFusionCorp Industries' ongoing security enhancements, successfully installed SELinux policy packages (selinux-policy, selinux-policy-targeted) and configured the system for permanent SELinux disablement on Nautilus Application Server 1 (stapp01) in the Stratos Datacenter. This preparation ensured smooth transition for upcoming SELinux configuration updates while maintaining system stability. The change was coordinated without disrupting current operations and scheduled to take effect post-maintenance reboot."
}
,
{
  id: 3,
  title: "Automated Task Scheduling with Cron",
  description: "Configured cron jobs across all Nautilus app servers to automate system tasks every 5 minutes, enhancing operational efficiency.",
  technologies: ["Linux", "Cron", "Bash"],
  category: "System Automation",
  metrics: "Reduced manual intervention by 80%, ensured timely task execution",
  icon: "⏱️",
  complexity: "Low",
  duration: "1 hour",
  fullDescription: "Set up cron jobs across all Nautilus application servers to automate recurring tasks at 5-minute intervals. This implementation improved system reliability, reduced manual workload, and ensured consistent execution of critical operational processes — taking a key step toward smoother system operations."
}
,
{
  id: 4,
  title: "Docker CE & Compose Installation",
  description: "Installed and configured Docker CE and Docker Compose on App Server 3, enabling a robust containerization environment for application testing.",
  technologies: ["Docker", "Docker Compose", "Linux"],
  category: "DevOps & Containerization",
  metrics: "Fully operational container environment ready for testing",
  icon: "🐳",
  complexity: "Medium",
  duration: "1 hour",
  fullDescription: "As part of the Nautilus DevOps initiative, successfully installed Docker CE and Docker Compose on App Server 3. Overcame network restrictions by leveraging internal package repositories to ensure a smooth installation process. Verified that the Docker service is running and ready to support application container testing, laying the foundation for future containerized deployments."
}
,
{
  id: 5,
  title: "Password-less SSH Authentication Setup",
  description: "Configured password-less SSH authentication for the thor user on the jump host to all application servers, streamlining automation workflows and ensuring strong key security.",
  technologies: ["Linux", "OpenSSH", "Bash"],
  category: "Security & Automation",
  metrics: "Faster deployments, 100% automated secure connections",
  icon: "🔐",
  complexity: "Medium",
  duration: "1 hour",
  fullDescription: "Boosted server security and automation at xFusionCorp Industries by configuring password-less SSH authentication for the thor user on the jump host to all application servers via their respective sudo users. This setup enabled automation scripts to run seamlessly without requiring manual password entry, while maintaining strict security permissions on SSH keys (chmod 700 ~/.ssh & chmod 600 ~/.ssh/authorized_keys). Achieved faster deployments, improved automation workflows, and strengthened overall security posture."
}
,
{
  id:6,
  title: "Ansible Setup on Jump Host",
  description: "Configured the jump host as an Ansible controller by installing Ansible v4.8.0 via pip3, enabling automation and management across multiple servers.",
  technologies: ["Ansible", "Python", "pip3", "Linux"],
  category: "Automation & Configuration Management",
  metrics: "Global Ansible availability for all users",
  icon: "⚙️",
  complexity: "Medium",
  duration: "1 hour",
  fullDescription: "As part of my DevOps training at KodeKloud, I configured the jump host to act as an Ansible controller. Installed Ansible v4.8.0 using pip3 to ensure the Ansible binary is globally available, allowing all system users to run Ansible commands without additional setup. This setup laid the foundation for managing tasks, configuration, and deployments across multiple servers. Ansible’s agentless architecture, YAML-based playbooks, and simplicity make it a powerful tool for automation and orchestration."
},
{
  id: 7,
  title: "CI/CD Pipeline for Angular & Spring Boot Application",
  description: "Deployed a full-stack application (Angular frontend + Spring Boot API) on a VPS with a fully automated CI/CD pipeline using GitHub Actions, Nginx, and Certbot.",
  technologies: ["Angular", "Spring Boot", "GitHub Actions", "Nginx", "Certbot", "Docker"],
  category: "DevOps & Continuous Deployment",
  metrics: "Zero-downtime deployments, automated SSL setup, 100% CI/CD automation",
  icon: "🚀",
  complexity: "High",
  duration: "1 day",
  projectUrl:"https://sanjanaseafoodholding.com",
  fullDescription: "Implemented a production-grade deployment pipeline by hosting an Angular frontend and Spring Boot API on a VPS. Configured GitHub Actions for CI/CD to automate building, testing, and deploying both frontend and backend. Used Nginx as a reverse proxy for serving the Angular app and routing API traffic, and integrated Certbot to enable HTTPS with automated SSL certificate renewal. The solution ensured reliable deployments, improved security, and reduced manual intervention with fully automated self-deployment workflows."
},
{
  id: 8,
  title: "Node.js API & Multi-Client Deployment",
  description: "Deployed a Node.js API on a VPS using self-hosted GitHub Actions runners, and deployed 7 client applications (React & Angular) via FileZilla, enabling streamlined multi-environment updates.",
  technologies: ["Node.js", "GitHub Actions", "PM2", "React", "Angular", "VPS", "FileZilla"],
  category: "DevOps & Continuous Deployment",
  metrics: "7 client applications deployed, automated Node.js API builds and restarts, reduced deployment time by 60%",
  icon: "🖥️",
  complexity: "High",
  duration: "1 day",
  fullDescription: "Implemented a CI/CD workflow to deploy a Node.js API on a VPS using self-hosted GitHub Actions runners. Configured the workflow to install dependencies, cache them, build the source code, create environment variables, and restart the API using PM2. Additionally, deployed 7 client applications (React and Angular) to the server via FileZilla, ensuring all front-end clients are up-to-date and live. This setup improved deployment efficiency, reduced manual errors, and enabled automated API restarts for reliable production operations."
}



  ],

  blogs: [
    {
      id: 1,
      title: "Java EE Introduction part 1",
      excerpt: "Learn to architect and deploy scalable applications using Java EE, focusing on microservices for enhanced maintainability and performance.",
      publishDate: "2024-04-05",
      readTime: "4 min read",
      tags: ["java", "J2EE", "Architecture", "Servlet"],
      category: "Backend",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQHV0hkNNwOt3A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712333677055?e=1759968000&v=beta&t=gQ_sZmtiCb3FiSXyc4Jg-p_30fjFa_2l1TrO1jmlDOs",
      url: "https://www.linkedin.com/pulse/java-ee-introduction-part-1-hansaka-ratnayake-kngvf"
    },
    {
      id: 2,
      title: "Java EE Introduction part 2",
      excerpt: "Learn to architect and deploy scalable applications using Java EE, focusing on microservices for enhanced maintainability and performance.",
      publishDate: "2024-04-08",
      readTime: "4 min read",
      tags: ["java", "J2EE", "Architecture", "Servlet"],
      category: "Backend",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQHV0hkNNwOt3A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712333677055?e=1759968000&v=beta&t=gQ_sZmtiCb3FiSXyc4Jg-p_30fjFa_2l1TrO1jmlDOs",
      url: "https://www.linkedin.com/pulse/java-ee-introduction-part-2-hansaka-rathnayake-nokic"
    },
    {
       id: 3,
      title: "Java EE Introduction part 3",
      excerpt: "Learn to architect and deploy scalable applications using Java EE, focusing on microservices for enhanced maintainability and performance.",
      publishDate: "2024-04-15",
      readTime: "4 min read",
      tags: ["java", "J2EE", "Architecture", "Servlet","EJB","Application servers"],
      category: "Backend",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQHV0hkNNwOt3A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712333677055?e=1759968000&v=beta&t=gQ_sZmtiCb3FiSXyc4Jg-p_30fjFa_2l1TrO1jmlDOs",
      url: "https://www.linkedin.com/pulse/java-ee-introduction-part-3-hansaka-rathnayake-wflbc"
    },
    {
      id: 4,
      title: "Java EE Servlet part 1",
      excerpt: "Learn to architect and deploy scalable applications using Java EE, focusing on microservices for enhanced maintainability and performance.",
      publishDate: "2024-04-27",
      readTime: "4 min read",
      tags: ["java", "J2EE", "Architecture", "Servlet","EJB","Application servers"],
      category: "Backend",
      image: "https://media.licdn.com/dms/image/v2/D5612AQGHP_YOvTYSJA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714211983082?e=1759968000&v=beta&t=XgAYa1mHvf_WE2kZFeywQwqp-wzkaSrK3swm571-gCQ",
      url: "https://www.linkedin.com/pulse/java-ee-servlet-part-1-hansaka-rathnayake-atcic"
    }
  ],

  projects: [
    {
      "id": 1,
      "title": "Hospital Management SaaS Platform",
      "description": "Multi-tenant SaaS with 6 micro-frontend apps and Node.js API. Secured authentication with JWT, AWS S3 storage, and SendGrid notifications.",
      "technologies": ["React", "Angular", "Node.js", "MongoDB", "JWT", "AWS S3", "SendGrid", "PM2", "Hostinger VPS", "GitHub Actions"],
      "category": "Full-Stack",
      "image": "https://port-imges.s3.ap-south-1.amazonaws.com/project-images/hs.png",
      "demoUrl": "",
      "githubUrl": "https://github.com/e-medical",
      "featured": true,
      "codeSnippet": `// Secure authentication middleware
const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(403);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};`
    },
    {
      "id": 2,
      "title": "E-commerce Platform",
      "description": "Scalable e-commerce with secure authentication and product management. Optimized APIs reduced search latency by 45% and checkout by 30%.",
      "technologies": ["MongoDB", "Express.js", "Next.js", "Node.js", "JWT"],
      "category": "Full-Stack",
      "image": "https://port-imges.s3.ap-south-1.amazonaws.com/project-images/ecom.png",
      "demoUrl": "",
      "githubUrl": "https://github.com/HansakaRatnayake/online-store",
      "featured": true,
      "codeSnippet": `// Optimized API endpoint for product search
app.get('/products', async (req, res) => {
  const { search } = req.query;
  const products = await Product.find({ name: { $regex: search, $options: 'i' } }).limit(10);
  res.json(products);
});`
    },
    {
      "id": 3,
      "title": "Learning Management System",
      "description": "LMS with Student and Admin interfaces. Built Spring Boot API with MySQL, AWS S3 storage, and SendGrid notifications for performance boost.",
      "technologies": ["Angular", "Spring Boot", "MySQL", "AWS S3", "SendGrid", "JWT"],
      "category": "Full-Stack",
      "image": "https://port-imges.s3.ap-south-1.amazonaws.com/project-images/nz.png",
      "demoUrl": "",
      "githubUrl": "https://github.com/NZ-LMS",
      "featured": true,
      "codeSnippet": `// Secure file upload to AWS S3
const uploadToS3 = async (file) => {
  const params = { Bucket: 'lms-files', Key: file.originalname, Body: file.buffer };
  return s3.upload(params).promise();
};`
    },
    {
      "id": 4,
      "title": "Predictive Analytics Dashboard",
      "description": "Web-based dashboard predicting house prices using machine learning. Visualizes data with Chart.js and evaluates with R2, RMSE metrics.",
      "technologies": ["React", "Tailwind CSS", "Python", "Flask", "SQLite", "Chart.js", "scikit-learn", "NumPy", "Pandas"],
      "category": "AI/ML",
      "image": "https://port-imges.s3.ap-south-1.amazonaws.com/project-images/ML.png",
      "demoUrl": "",
      "githubUrl": "https://github.com/HansakaRatnayake/Predictive-Analytics-Dashboard",
      "featured": true,
      "codeSnippet": `# Predictive model using scikit-learn
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
print(r2_score(y_test, predictions))`
    },
    {
      "id": 5,
      "title": "Veterinary Clinic Management",
      "description": "Web platform for pet profiles and medical records. Features secure JWT authentication and AWS S3 storage for documents.",
      "technologies": ["React", "Angular", "Node.js", "MongoDB", "JWT", "AWS S3"],
      "category": "Full-Stack",
      "image": "https://port-imges.s3.ap-south-1.amazonaws.com/project-images/pet.png",
      "demoUrl": "https://ashanlanka-dev.github.io/system-client/",
      "githubUrl": "https://github.com/AshanLanka-Dev",
      "featured": true,
      "codeSnippet": `// Secure document upload to AWS S3
const uploadDocument = async (file) => {
  const params = { Bucket: 'vet-docs', Key: file.name, Body: file };
  return s3.upload(params).promise();
};`
    }
]
};