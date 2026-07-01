import React from "react";

export default function Resume() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8 font-sans">
      <style>
        {`
          @media print {
            @page { margin: 0; }
            body { margin: 0; }
            .print-hidden { display: none !important; }
          }
        `}
      </style>

      <button
        onClick={() => window.print()}
        className="mb-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors print-hidden"
      >
        Download PDF
      </button>

      {/* A4 Paper Container */}
      <div className="bg-white text-gray-800 w-[210mm] min-h-[297mm] shadow-2xl p-6 text-[14px] leading-normal relative print:shadow-none print:w-full print:h-auto print:p-0">

        {/* Header */}
        <header className="flex justify-between items-start mb-4 border-b-2 border-gray-300 pb-2">
          <div>
            <h1 className="text-4xl font-bold text-blue-800 mb-1">Raj Kumar Verma</h1>
            <div className="text-gray-700 font-medium">
              <p>LinkedIn: <a href="https://linkedin.com/in/rajverma04" className="text-blue-600 hover:underline">rajverma04</a></p>
              <p>GitHub: <a href="https://github.com/rajverma04" className="text-blue-600 hover:underline">rajverma04</a></p>
            </div>
          </div>
          <div className="text-right text-gray-700 font-medium">
            <p>Email: <a href="mailto:rajkumargrd56@gmail.com" className="text-blue-600 hover:underline">rajkumargrd56@gmail.com</a></p>
            <p>Mobile: +91-8789429404</p>
          </div>
        </header>

        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">Skills</h2>
          <ul className="space-y-1">
            <li><span className="font-bold text-blue-900">Languages:</span> C++, JavaScript, Java, Python</li>
            <li><span className="font-bold text-blue-900">Frameworks:</span> React.js, Node.js, Express.js, Next.js, Tailwind CSS</li>
            <li><span className="font-bold text-blue-900">Databases:</span> MongoDB, MySQL</li>
            <li><span className="font-bold text-blue-900">Tools & Platform:</span> Git, GitHub, Docker, VS Code, Postman</li>
            <li><span className="font-bold text-blue-900">Soft Skills:</span> Problem-Solving, Quick Learner</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">Projects</h2>

          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-blue-900 text-sm">
                CodeNexus - Online Coding Practice & Evaluation <span className="text-black font-normal">| React.js, Node.js, Redis, MongoDB |</span> <a href="#" className="text-blue-600 hover:underline">Github</a>
              </h3>
              <span className="text-gray-600 font-medium text-sm">Nov '25</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
              <li>Developed a full-stack coding platform enabling real-time code execution and evaluation across multiple languages through the <span className="font-bold text-black">Judge0</span> API.</li>
              <li>Integrated the <span className="font-bold text-black">Monaco Code Editor</span> to provides a VS Code-like environment with syntax highlighting, autocompletion and real-time code editing.</li>
              <li>Built an <span className="font-bold text-black">AI Debugging</span> agent that interprets compiler/runtime errors and provides guided fixes for faster debugging.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-blue-900 text-[15px]">
                GST Invoice Generator <span className="text-black font-normal">| React.js, Node.js, Bootstrap, MongoDB |</span> <a href="#" className="text-blue-600 hover:underline">Github</a>
              </h3>
              <span className="text-gray-600 font-medium text-sm">Aug '25</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
              <li>Built a responsive GST billing application that enables users to generate GST-compliant invoices with automated CGST, SGST and IGST calculation.</li>
              <li>Implemented real-time invoice creation with dynamic item management, auto-calculated totals and download PDF invoices.</li>
              <li>Integrated MongoDB to store shop details, transport ID with optimized schema design for fast retrieval.</li>
            </ul>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">Achievements</h2>
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span><span className="text-black">•</span> Solved 220+ DSA problems on LeetCode/GFG.</span>
              <span className="text-gray-600 font-medium text-sm">Oct '25</span>
            </li>
            <li className="flex justify-between">
              <span><span className="text-black">•</span> Secured AIR-7 in Coding Ninja Premier League coding completion.</span>
              <span className="text-gray-600 font-medium text-sm">May 24</span>
            </li>
          </ul>
        </section>

        {/* Certificates */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">Certificates</h2>
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span><span className="text-black">•</span> Privacy and Security in Online Social Media - <a href="#" className="text-blue-600 hover:underline">NPTEL</a></span>
              <span className="text-gray-600 font-medium text-sm">Oct '25</span>
            </li>
            <li className="flex justify-between">
              <span><span className="text-black">•</span> Data Structures and Algorithms Certification - <a href="#" className="text-blue-600 hover:underline">LPU</a></span>
              <span className="text-gray-600 font-medium text-sm">Jul '25</span>
            </li>
            <li className="flex justify-between">
              <span><span className="text-black">•</span> Cloud Computing - <a href="#" className="text-blue-600 hover:underline">NPTEL</a></span>
              <span className="text-gray-600 font-medium text-sm">Apr '25</span>
            </li>
            <li className="flex justify-between">
              <span><span className="text-black">•</span> Coding Ninja Preimier League - <a href="#" className="text-blue-600 hover:underline">Coding Ninja</a></span>
              <span className="text-gray-600 font-medium text-sm">May 24</span>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">Education</h2>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-blue-900">
              <h3>Lovely Professional University</h3>
              <span className="text-gray-600 font-medium text-sm text-black">Punjab, India</span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-800">Bachelor of Technology - Computer Science and Engineering: <span className="font-bold">CGPA: 7.64</span></p>
              <span className="text-gray-600 font-medium text-sm">Aug '23 - Present</span>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-blue-900">
              <h3>B.N Saha DAV Public School</h3>
              <span className="text-gray-600 font-medium text-sm text-black">Giridih, Jharkhand</span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-800">Intermediate: <span className="font-bold">Percentage: 83%</span></p>
              <span className="text-gray-600 font-medium text-sm">Apr '20 - Mar ' 22</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between font-bold text-blue-900">
              <h3>B.N Saha DAV Public School</h3>
              <span className="text-gray-600 font-medium text-sm text-black">Giridih, Jharkhand</span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-800">Matriculation: <span className="font-bold">Percentage: 82%</span></p>
              <span className="text-gray-600 font-medium text-sm">Apr '19 - Mar ' 20</span>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}

