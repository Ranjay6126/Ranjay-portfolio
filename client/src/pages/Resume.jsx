import { usePortfolio } from "../hooks/usePortfolio";

function ResumeSection({ title, children, last = false }) {
  return <section className={last ? "" : "mb-4"}><h2 className="mb-2 border-b border-gray-300 text-lg font-bold uppercase tracking-wide text-blue-800">{title}</h2>{children}</section>;
}

export default function Resume() {
  const { portfolio, isPortfolioLoading, error } = usePortfolio();
  const profile = portfolio?.profile || {};
  const resume = portfolio?.resume || {};
  const education = portfolio?.education || [];
  const certificates = portfolio?.certificates || [];

  if (isPortfolioLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8 text-gray-600">
        Loading resume data...
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 text-center">
        <p className="text-red-500 mb-3">
          Could not load resume data. Make sure the backend server and MongoDB are running.
        </p>
        <p className="text-sm text-gray-500">
          Hint: run <code className="bg-gray-200 px-2 py-0.5 rounded">npm run seed</code> to initialize the database.
        </p>
      </div>
    );
  }

  const name = profile.name ? profile.name.replace(/[<>/]/g, "").trim() : "Ranjay Prajapati";
  const title = profile.rotatingTexts?.[0] || "Full-Stack Software Engineer";
  const email = profile.email || "panditranjay33@gmail.com";
  const phone = profile.phone || "+91 8271440846";
  const location = profile.location || "Bengaluru, Whitefield";
  const linkedin = profile.linkedin || "";
  const github = profile.github || "";

  const summary = resume.summary ||
    "Results-driven Full-Stack Software Engineer with a B.Tech. in Computer Science and Engineering, specializing in Software Engineering and Cyber Security. Experienced in building secure, scalable, user-centric MERN applications with clean architecture and maintainable code.";

  const skills = resume.skills && resume.skills.length > 0
    ? resume.skills
    : [
        ["Languages", "C++, Java, Python, JavaScript, TypeScript"],
        ["Frontend", "HTML5, CSS, React, React Router, Redux, Tailwind CSS"],
        ["Backend & Databases", "Node.js, Express.js, MongoDB, MySQL, GraphQL, JWT"],
        ["Tools & Platforms", "Git, GitHub, Docker, VS Code, Postman, Figma, AWS, Linux"],
        ["Security", "Wireshark, Nmap, Metasploit, Burp Suite, Nessus, Nikto, Kali Linux, OWASP Top 10"],
      ];

  const projects = resume.projects && resume.projects.length > 0
    ? resume.projects
    : [];

  const achievements = resume.achievements && resume.achievements.length > 0
    ? resume.achievements
    : ["Solved 300+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks."];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 font-sans sm:p-8">
      <main className="relative w-full max-w-[210mm] bg-white p-6 text-[13px] leading-normal text-gray-800 shadow-2xl print:w-full print:max-w-none print:p-0 print:shadow-none">
        <header className="mb-4 border-b-2 border-gray-300 pb-3">
          <h1 className="mb-1 text-4xl font-bold text-blue-800">{name}</h1>
          <p className="mb-2 font-semibold text-gray-700">{title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700">
            {linkedin && <a href={linkedin} className="text-blue-600 hover:underline">LinkedIn</a>}
            {github && <a href={github} className="text-blue-600 hover:underline">GitHub</a>}
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
            {skills.map(([label, values]) => (
              <li key={label}>
                <span className="font-bold text-blue-900">{label}:</span> {values}
              </li>
            ))}
          </ul>
        </ResumeSection>

        {projects.length > 0 && (
          <ResumeSection title="Projects">
            <div className="space-y-3">
              {projects.map((project) => (
                <article key={project.title}>
                  <div className="flex flex-wrap justify-between gap-x-3">
                    <h3 className="font-bold text-blue-900">
                      {project.title}{" "}
                      {project.tech && <span className="font-normal text-black">| {project.tech} |</span>}
                      {project.link && (
                        <a href={project.link} className="font-normal text-blue-600 hover:underline">
                          GitHub
                        </a>
                      )}
                    </h3>
                    {project.date && <span className="text-sm font-medium text-gray-600">{project.date}</span>}
                  </div>
                  {project.description && <p className="mt-1 text-gray-700">{project.description}</p>}
                </article>
              ))}
            </div>
          </ResumeSection>
        )}

        {achievements.length > 0 && (
          <ResumeSection title="Achievements">
            {achievements.map((a, i) => (
              <p key={i}>• {a}</p>
            ))}
          </ResumeSection>
        )}

        {certificates.length > 0 && (
          <ResumeSection title="Certificates">
            <ul className="space-y-1">
              {certificates.map((cert) => (
                <li key={cert.title} className="flex flex-wrap justify-between gap-x-3">
                  <span>
                    • {cert.title} -{" "}
                    {cert.verifyLink ? (
                      <a href={cert.verifyLink} className="text-blue-600 hover:underline">
                        {cert.issuer}
                      </a>
                    ) : (
                      cert.issuer
                    )}
                  </span>
                  {cert.date && <span className="text-sm font-medium text-gray-600">{cert.date}</span>}
                </li>
              ))}
            </ul>
          </ResumeSection>
        )}

        {education.length > 0 && (
          <ResumeSection title="Education" last>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.title}>
                  <div className="flex flex-wrap justify-between gap-x-3 font-bold text-blue-900">
                    <h3>{edu.institution}</h3>
                    {edu.duration && <span className="text-sm font-medium text-gray-600">{edu.duration}</span>}
                  </div>
                  <p>
                    {edu.title}: <span className="font-bold">{edu.grade}</span>
                  </p>
                </div>
              ))}
            </div>
          </ResumeSection>
        )}
      </main>
    </div>
  );
}
