import React from "react";
import "./App.css";
import img1 from '../src/assets/t777897.png';

export default function App() {
  const name = "Md Ebrahim Hossain Jony";
  const title = "Computer Engineer — AI & Web Developer";
  const intro = `I build intelligent systems and modern web apps that solve real-world problems. ` +
    `Skilled in  JavaScript, React, Node.js,Next.js,C# and Machine Learning.`;

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Java",
    "C++",
    "C",
    "C #",
    "MongoDB",
    "PHP dataBase",
    "Docker",
    "GitHub",
  ];

  const projects = [
    {
      name: "e-Commerce Restaurant service",
      desc: "This Project for online Restaurant Service this website Customer, Owner. customer registration & than order menu, payment,food delivery. admin has full control of this. use React JS, Material UI, ES6, Node JS, Express js, Firebase for authentication, Mongo DB for Database",
      tech: ["React", "Express", "MongoDB", "tailwind css"],
      github: "https://github.com/Ebrahimjony/Doctor-Client",
      live: "#",
    },
    {
      name: "Job Portal",
      desc: " This Project for online Job Search in this website client. Users search  there favorite job. Admin has full control of this. use React JS,Node.js Express js.Firebase for authentication, Mongo DB for Database ",
      tech: ["React", "Express", "MongoDB", "tailwind css"],
      github: "https://github.com/Ebrahimjony/Job-portal-client",
      live: "#",
    },
    {
      name: "Online Dentist Doctor Appointment",
      desc: "This portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/EbrahimJony/portfolio",
      live: "#",
    },
  ];

  const certs = [
    "Course — Web development course with Jhankar Mahbub.",
    "Course — Think in a Redux way, Learn with Sumit",
    "Google — IT Support",
    "IBM — AI Engineering Professional Certificate",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-[Helvetica_Neue]">{name}</h1>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#projects" className="hover:underline font-serif">Projects</a>
            <a href="#skills" className="hover:underline font-serif">Skills</a>
            <a href="#certs" className="hover:underline font-serif">Certifications</a>
            <a href="#contact" className="hover:underline font-serif">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-sm text-indigo-600 font-medium  font-serif">Hello, I am</p>
            <h2 className="text-4xl font-[Helvetica_Neue] mt-2">{name}</h2>
            <p className="mt-4 text-lg text-gray-700 font-serif">{intro}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:opacity-95 font-serif">View my work</a>
              <a href="#contact" className="inline-block px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 font-serif hover:bg-indigo-50">Contact me</a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm text-gray-500 uppercase font-serif">Availability</h3>
              <p className="mt-1 text-gray-800 font-serif">Available to start: <strong>Immediately</strong></p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6  shadow" style={{ width: '360px', height: '300px'}}>
            <div className="flex items-center gap-4">
              <div className=" bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold" style={{width:'100px'}}>
                <img src={img1} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-serif">Role</p>
                <p className="font-medium font-serif">Web Developer</p>
                <p className="text-sm text-gray-500 font-serif">Based in: Bangladesh</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-gray-500">Contact</h4>
              <p className="text-sm">Phone: +8801797342413</p>
              <p className="text-sm font-serif">Email: joniislamraj@gmail.com</p>
              <p className="text-sm font-serif">LinkedIn: linkedin.com/in/Md.Ebrahim Hossain</p>
              <p className="text-sm font-serif">GitHub: github.com/EbrahimJony</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h3 className="text-xl font-semibold">Skills</h3>
          <p className="mt-2 text-gray-600 font-serif">Technical skills and tools I use regularly.</p>

          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((s) => (
              <div key={s} className="bg-white p-3 rounded-lg font-serif shadow-sm text-sm">
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h3 className="text-xl font-semibold">Projects</h3>
          <p className="mt-2 text-gray-600 font-serif">Selected projects — more available on my GitHub.</p>

          <div className="mt-6 space-y-4">
            {projects.map((p) => (
              <article key={p.name} className="bg-white rounded-xl p-4 shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-lg">{p.name}</h4>
                    <p className="text-gray-600 mt-1 font-serif">{p.desc}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs border px-2 py-1 rounded-full font-serif">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm space-y-2 text-right">
                    <a href={p.github} target="_blank" rel="noreferrer" className="block underline font-serif">GitHub</a>
                    <a href={p.live} target="_blank" rel="noreferrer" className="block underline font-serif">Live</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certs" className="mt-12">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="mt-3 list-disc list-inside font-serif text-gray-700">
            {certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 mb-24 grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold font-serif">Let's talk</h3>
            <p className="mt-2  text-gray-600 font-serif" >Feel free to reach out for collaborations, jobs, or project work.</p>

            <form className="mt-6 grid gap-3">
              <input className="border rounded-md px-3 py-2 font-serif" placeholder="Your name" />
              <input className="border rounded-md px-3 py-2 font-serif" placeholder="Your email" />
              <textarea className="border rounded-md px-3 py-2 font-serif" rows="4" placeholder="Message"></textarea>
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md  font-serif">Send message</button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-medium">Resume</h4>
              <p className="text-sm text-gray-600 mt-2 font-serif">Download or view my resume.</p>
              <div className="mt-4 flex gap-3">
                <a href="https://ibb.co.com/4RbfpVSc" className="text-sm underline font-serif">Download PDF</a>
                <a href="https://drive.google.com/drive/folders/1hBrBDMUsnICvRufPtWKTYUHyCM2WZDws" className="text-sm underline font-serif">View on Google Drive</a>
              </div>

              <div className="mt-6">
                <h5 className="text-sm text-gray-500 font-serif">Location</h5>
                <p className="text-sm font-serif">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 font-serif">
              <p>Pro tip: Replace placeholder links and text with your real GitHub, LinkedIn, and demo URLs.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center justify-center">
          <div className="">©{new Date().getFullYear()} {name} — Built with React & Tailwind</div>
        </div>
      </footer>
    </div>
  );
}

