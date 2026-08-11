const resumeData = {
  name: "Ranjay Prajapati",
  title: "Full-Stack Software Engineer",
  email: "panditranjay33@gmail.com",
  phone: "+91 8271440846",
  location: "Bengaluru, Whitefield",
  linkedin: "https://www.linkedin.com/in/ranjay-pandit-prajapati/",
  github: "https://github.com/Ranjay6126",
  summary:
    "Results-driven Full-Stack Software Engineer with a B.Tech. in Computer Science and Engineering, specializing in Software Engineering and Cyber Security. Experienced in building secure, scalable, user-centric MERN applications with clean architecture and maintainable code.",
  skills: [
    ["Languages", "C++, Java, Python, JavaScript, TypeScript"],
    ["Frontend", "HTML5, CSS, React, React Router, Redux, Tailwind CSS"],
    ["Backend & Databases", "Node.js, Express.js, MongoDB, MySQL, GraphQL, JWT"],
    ["Tools & Platforms", "Git, GitHub, Docker, VS Code, Postman, Figma, AWS, Linux"],
    ["Security", "Wireshark, Nmap, Metasploit, Burp Suite, Nessus, Nikto, Kali Linux, OWASP Top 10"],
  ],
  projects: [
    {
      title: "Attendance Management System",
      date: "Nov 2025 - Mar 2026",
      tech: "MERN Stack, Tailwind CSS, JWT, MongoDB",
      link: "https://github.com/Ranjay6126/Attendance-Management-System",
      description:
        "Built a role-based attendance system for Super Admin, Admin, and Employees with live selfie attendance, GPS tracking, admin verification, attendance rectification, Excel export, notifications, and secure MongoDB storage.",
    },
    {
      title: "Quick Chat App",
      date: "Jun 2025 - Aug 2025",
      tech: "React.js, Node.js, Express.js, MongoDB, Socket.io",
      link: "https://github.com/Ranjay6126/Quick-Chat",
      description:
        "Created a real-time MERN chat application with Socket.io, secure authentication, chat rooms, live updates, and a responsive interface for smooth multi-user communication.",
    },
    {
      title: "Book Store System",
      date: "Sep 2024 - Dec 2025",
      tech: "React.js, Node.js, Express.js, MongoDB",
      link: "https://github.com/Ranjay6126/Book-Store-Project-",
      description:
        "Developed a full-stack bookstore application with browsing, search, and CRUD book management, focused on efficient data handling and a responsive user interface.",
    },
    {
      title: "URL Shortener",
      date: "Mar 2024 - May 2024",
      tech: "Node.js, Express.js, MongoDB, JWT, EJS",
      link: "https://github.com/Ranjay6126/URL-SHORTENER",
      description:
        "Built an MVC-based URL shortener with JWT authentication, short-link creation and management, and a responsive interface.",
    },
  ],
  certificates: [
    ["Full Stack Web Development - Skill Up", "GeeksforGeeks", "Jan 2026", "https://www.geeksforgeeks.org/certificate/1a7269239921954f96d5f50c9ba65c08"],
    ["Data Structures and Algorithms", "GeeksforGeeks", "Jun 2024", "https://drive.google.com/file/d/1XAzkNBXkmUcf_1YEM2i1ag_R64hN3cM6/view"],
    ["Backend Development Course", "Physics Wallah", "Aug 2024", "https://drive.google.com/file/d/143N_LTE5ygGV9YWAIHYzkpghRl7QBsjF/view?pli=1"],
    ["SQL (Structured Query Language)", "Great Learning", "Nov 2023", "https://drive.google.com/file/d/1nA9xuBUdikGHf30lr-xhtET2UmOjwpZN/view"],
    ["CompTIA Linux+ XK0-005", "Cybrary", "Sep 2024", "https://drive.google.com/file/d/1WUCJAAewLZO0XnL5WlGujsPqO_s6tUgx/view"],
  ],
  education: [
    ["B.Tech. in Computer Science & Engineering", "Lovely Professional University, Punjab", "Aug 2021 - May 2025", "CGPA: 6.7"],
    ["National Examinations Board (XI) & (XII)", "Hetauda School of Management", "Apr 2018 - Mar 2020", "CGPA: 7.1"],
    ["Secondary Education Examination (X)", "Shree Adhunik Rastriya Secondary School", "Apr 2017 - Mar 2018", "CGPA: 8.12"],
  ],
};

export default function Resume() {
  const { name, title, email, phone, location, linkedin, github, summary, skills, projects, certificates, education } = resumeData;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 font-sans sm:p-8">
      <style>{`@media print { @page { margin: 0; } body { margin: 0; } .print-hidden { display: none !important; } }`}</style>

      <button onClick={() => window.print()} className="print-hidden mb-6 rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition-colors hover:bg-blue-700">
        Download PDF
      </button>

      <main className="relative w-full max-w-[210mm] bg-white p-6 text-[13px] leading-normal text-gray-800 shadow-2xl print:w-full print:max-w-none print:p-0 print:shadow-none">
        <header className="mb-4 border-b-2 border-gray-300 pb-3">
          <h1 className="mb-1 text-4xl font-bold text-blue-800">{name}</h1>
          <p className="mb-2 font-semibold text-gray-700">{title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700">
            <a href={linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
            <a href={github} className="text-blue-600 hover:underline">GitHub</a>
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
            <span>{phone}</span>
            <span>{location}</span>
          </div>
        </header>

        <ResumeSection title="Profile">
          <p>{summary}</p>
        </ResumeSection>

        <ResumeSection title="Skills">
          <ul className="space-y-1">
            {skills.map(([label, values]) => <li key={label}><span className="font-bold text-blue-900">{label}:</span> {values}</li>)}
          </ul>
        </ResumeSection>

        <ResumeSection title="Projects">
          <div className="space-y-3">
            {projects.map((project) => (
              <article key={project.title}>
                <div className="flex flex-wrap justify-between gap-x-3">
                  <h3 className="font-bold text-blue-900">{project.title} <span className="font-normal text-black">| {project.tech} |</span> <a href={project.link} className="font-normal text-blue-600 hover:underline">GitHub</a></h3>
                  <span className="text-sm font-medium text-gray-600">{project.date}</span>
                </div>
                <p className="mt-1 text-gray-700">{project.description}</p>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Achievements">
          <p>• Solved 300+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks.</p>
        </ResumeSection>

        <ResumeSection title="Certificates">
          <ul className="space-y-1">
            {certificates.map(([certificate, issuer, date, link]) => <li key={certificate} className="flex flex-wrap justify-between gap-x-3"><span>• {certificate} - <a href={link} className="text-blue-600 hover:underline">{issuer}</a></span><span className="text-sm font-medium text-gray-600">{date}</span></li>)}
          </ul>
        </ResumeSection>

        <ResumeSection title="Education" last>
          <div className="space-y-3">
            {education.map(([degree, institution, duration, grade]) => <div key={degree}><div className="flex flex-wrap justify-between gap-x-3 font-bold text-blue-900"><h3>{institution}</h3><span className="text-sm font-medium text-gray-600">{duration}</span></div><p>{degree}: <span className="font-bold">{grade}</span></p></div>)}
          </div>
        </ResumeSection>
      </main>
    </div>
  );
}

function ResumeSection({ title, children, last = false }) {
  return <section className={last ? "" : "mb-4"}><h2 className="mb-2 border-b border-gray-300 text-lg font-bold uppercase tracking-wide text-blue-800">{title}</h2>{children}</section>;
}
