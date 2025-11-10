// export default function Resume() {
//     return (
//         <div className="py-20">
//             {/* Contact */}
//             <div className="resume">
//                 <div className="flex justify-end">
//                     <div className="text-base text-right max-w-sm">
//                         <h2 className="text-lg font-bold mb-2">Contact</h2>
//                         <p>Email: <a href="mailto:sy.yevhen.lc@gmail.com"
//                                      className="text-blue-500 hover:underline">sy.yevhen.lc@gmail.com</a></p>
//                         <p>LinkedIn: <a href="https://www.linkedin.com/in/yevhen-oshkukov-436973254/" target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-blue-500 hover:underline">Yevhen-LinkedIn</a></p>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Objective */}
//             <section className="mb-10 mt-16">
//                 <h2 className="text-xl font-bold mb-2">Objective</h2>
//                 <p>
//                     Full Stack JavaScript developer passionate about creating modern, efficient,
//                     and user-friendly web applications. Constantly improving skills and exploring
//                     new technologies to deliver clean, reliable solutions.
//                 </p>
//             </section>
//
//             {/* Professional Experience */}
//             <section className="mb-10">
//                 <h2 className="text-xl font-bold mb-2">Professional Experience</h2>
//
//                 {/* Experience 1 */}
//                 <div className="mb-6">
//                     <h3 className="font-semibold">
//                         Full Stack Intern (Internship Program) - Adtelligent <span
//                         className="text-sm text-gray-500 dark:text-gray-400">| Sep 2025 (completed)</span>
//                     </h3>
//                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
//                         <li>Developed backend modules with Fastify + Prisma connected to MongoDB and ClickHouse.
//                         </li>
//                         <li>Built and tested a Prebid.js adapter for ad auctions and integrated custom ad tracking.
//                         </li>
//                         <li>Configured CI/CD, OpenTelemetry metrics, and user event monitoring.
//                         </li>
//                         <li>Used TypeScript across backend and frontend; deployed via Vercel and Railway.
//                         </li>
//                     </ul>
//                 </div>
//
//                 {/* Experience 2 */}
//                 <div className="mb-6">
//                     <h3 className="font-semibold">
//                         Portfolio Projects - Full Stack Developer <span
//                         className="text-sm text-gray-500 dark:text-gray-400">| Feb 2025 – Present</span>
//                     </h3>
//                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
//                         <li>Built single-page applications using React, TypeScript, Redux Toolkit, and Tailwind CSS.</li>
//                         <li>Implemented routing, JWT authentication, and REST API integration with async thunks.</li>
//                         <li>Developed Node.js + Express backend with authentication and CRUD operations.</li>
//                         <li>Applied best practices for clean code, performance, accessibility, and responsive design.</li>
//                         <li>Used Git and GitHub for version control and collaborative workflow.</li>
//                     </ul>
//                 </div>
//
//                 {/* Experience 3 */}
//                 <div className="mb-6">
//                     <h3 className="font-semibold">
//                         Full Stack Developer — SincosSoftware{" "}
//                         <span className="text-sm text-gray-500 dark:text-gray-400">| Feb 2024 – Feb 2025</span>
//                     </h3>
//                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
//                         <li>Developed internal tools and training projects under senior mentorship using Laravel, React, Vue, and Tailwind CSS.</li>
//                         <li>Built responsive UIs from Figma designs with authentication, dynamic routing, and REST API integration.</li>
//                         <li>Contributed to backend development following Laravel MVC principles — routes, Blade views, and controllers.</li>
//                         <li>Expanded backend expertise with Node.js and Express, creating REST APIs to support frontend features.</li>
//                         <li>Collaborated via GitHub, participated in code reviews, and followed professional Git workflows.</li>
//                         <li>Improved problem-solving and teamwork skills through daily standups, mentoring sessions, and collaborative debugging.</li>
//                     </ul>
//                 </div>
//
//                 {/* Experience 4 */}
//                 <div className="mb-6">
//                     <h3 className="font-semibold">
//                         Full Stack Development — Prometheus, SBC, Laracasts, Ciklum{" "}
//                         <span className="text-sm text-gray-500 dark:text-gray-400">| 2022 – 2024</span>
//                     </h3>
//                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
//                         <li>Completed comprehensive front-end development courses focusing on JavaScript, TypeScript, React, Redux, HTML5, CSS3, Tailwind CSS, and Git.</li>
//                         <li>Built multiple hands-on projects, including responsive websites and SPA applications.</li>
//                         <li>Integrated third-party APIs, implemented complex routing, state management with Redux, and comprehensive form validation.</li>
//                         <li>Mastered Git workflows, GitHub collaboration, and professional development practices.</li>
//                     </ul>
//                 </div>
//             </section>
//
//             {/* Education */}
//             <section className="mb-10">
//                 <h2 className="text-xl font-bold mb-2">Education</h2>
//                 <ul className="list-disc list-inside ml-4 space-y-2">
//                     <li>Bachelor's degree: Applied Mathematics and Informatics — Ivan Franko National University of Lviv
//                         (1996–2002).
//                         <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">Qualification: Mathematician, Specialization: Informatics</span>
//                     </li>
//                     <li>Master's degree: Information Systems and Technologies — National Environmental University of
//                         Lviv (2022–2024).
//                         <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">Professional qualification upgrade in Information Technologies</span>
//                     </li>
//                     <li>Professional Development (2022–2024): Prometheus, CBS, Laracast, Ciklum, ITVDN, iTGid</li>
//                 </ul>
//             </section>
//
//             {/* Technical Skills */}
//             <section className="mb-10">
//                 <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
//                 <ul className="list-disc list-inside ml-4 space-y-2">
//                     <li>
//                         <span className="font-semibold">Languages & Frameworks:</span> JavaScript, TypeScript, Node.js (Fastify, Express), React, Vue, Laravel
//                     </li>
//                     <li>
//                         <span className="font-semibold">Databases & ORM:</span> MongoDB, ClickHouse, MySQL, Prisma, Sequelize
//                     </li>
//                     <li>
//                         <span className="font-semibold">State Management:</span> Redux Toolkit, Zustand
//                     </li>
//                     <li>
//                         <span className="font-semibold">Styling:</span> Tailwind CSS, CSS3, HTML5
//                     </li>
//                     <li>
//                         <span className="font-semibold">Tools & Platforms:</span> Git, GitHub, GitLab, Figma, Vercel, Railway
//                     </li>
//                     <li>
//                         <span className="font-semibold">Concepts:</span> REST API, Routing, Authentication, MVC
//                     </li>
//                     <li>
//                         <span className="font-semibold">DevOps & Monitoring:</span> CI/CD, Docker, OpenTelemetry
//                     </li>
//                 </ul>
//             </section>
//
//
//             {/* Languages */}
//             <section className="mb-10">
//                 <h2 className="text-xl font-bold mb-2">Languages</h2>
//                 <ul className="grid grid-cols-2 gap-2 list-disc list-inside ml-4">
//                     <li>English — Upper Intermediate (B2)</li>
//                     <li>Ukrainian — Fluent</li>
//                     <li>Polish — A2</li>
//                     <li>Russian — Fluent</li>
//                 </ul>
//             </section>
//
//             {/* Personal Skills */}
//             {/*<section className="mb-10">*/}
//             {/*    <h2 className="text-xl font-bold mb-2">Personal Skills</h2>*/}
//             {/*    <ul className="list-disc list-inside ml-4 space-y-1">*/}
//             {/*        <li>Detail-oriented and self-disciplined</li>*/}
//             {/*        <li>Strong team player with good communication skills</li>*/}
//             {/*        <li>Fast learner with a passion for new technologies</li>*/}
//             {/*    </ul>*/}
//             {/*</section>*/}
//         </div>
//     );
// }
export default function Resume() {
    return (
        <div className="py-20">
            {/* Contact */}
            <div className="resume">
                <div className="flex justify-end">
                    <div className="text-base text-right max-w-sm">
                        <h2 className="text-lg font-bold mb-2">Contact</h2>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:sy.yevhen.lc@gmail.com"
                                className="text-blue-500 hover:underline"
                            >
                                sy.yevhen.lc@gmail.com
                            </a>
                        </p>
                        <p>
                            LinkedIn:{" "}
                            <a
                                href="https://www.linkedin.com/in/yevhen-oshkukov-436973254/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Yevhen-LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Objective */}
            <section className="mb-10 mt-16">
                <h2 className="text-xl font-bold mb-2">Objective</h2>
                <p>
                    Full Stack JavaScript developer passionate about creating modern,
                    efficient, and user-friendly web applications. Constantly improving
                    skills and exploring new technologies to deliver clean, reliable
                    solutions.
                </p>
            </section>

            {/* Professional Experience */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Professional Experience</h2>

                {/* Experience 1 */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Full Stack Intern — Adtelligent{" "}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
              | Sep 2025 (completed)
            </span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>
                            Developed backend modules with Fastify and Prisma connected to
                            MongoDB and ClickHouse.
                        </li>
                        <li>
                            Built and tested a Prebid.js adapter for ad auctions and
                            integrated custom ad tracking.
                        </li>
                        <li>Configured CI/CD pipelines and OpenTelemetry metrics.</li>
                        <li>
                            Used TypeScript across backend and frontend and deployed via
                            Vercel and Railway.
                        </li>
                    </ul>
                </div>

                {/* Experience 2 */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Portfolio Projects — Full Stack Developer{" "}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
              | Feb 2025 – Present
            </span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>
                            Built single-page applications using React, TypeScript, Redux
                            Toolkit, and Tailwind CSS.
                        </li>
                        <li>
                            Implemented routing, JWT authentication, and REST API integration
                            with async thunks.
                        </li>
                        <li>
                            Developed Node.js + Express backend with authentication and CRUD
                            operations.
                        </li>
                        <li>
                            Applied best practices for clean code, performance, accessibility,
                            and responsive design.
                        </li>
                        <li>Used Git and GitHub for version control and collaborative workflow.</li>
                    </ul>
                </div>

                {/* Experience 3 */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Full Stack Developer — SincosSoftware{" "}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
              | Feb 2024 – Feb 2025
            </span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>
                            Developed internal tools and training projects under senior
                            mentorship using Laravel, React, Vue, and Tailwind CSS.
                        </li>
                        <li>
                            Built responsive UIs from Figma designs with authentication,
                            dynamic routing, and REST API integration.
                        </li>
                        <li>
                            Contributed to backend development following Laravel MVC
                            principles — routes, Blade views, and controllers.
                        </li>
                        <li>
                            Expanded backend expertise with Node.js and Express, creating REST
                            APIs to support frontend features.
                        </li>
                        <li>
                            Collaborated via GitHub, participated in code reviews, and followed
                            professional Git workflows.
                        </li>
                        <li>
                            Improved problem-solving and teamwork skills through daily
                            standups, mentoring sessions, and collaborative debugging.
                        </li>
                    </ul>
                </div>

                {/* Experience 4 */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Full Stack Development — Prometheus, ITVDN, SBC, Laracasts, Ciklum{" "}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
              | 2022 – 2024
            </span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>
                            Completed comprehensive front-end development courses focusing on
                            JavaScript, TypeScript, React, Redux, HTML5, CSS3, Tailwind CSS,
                            and Git.
                        </li>
                        <li>
                            Built multiple hands-on projects, including responsive websites and
                            SPA applications.
                        </li>
                        <li>
                            Integrated third-party APIs, implemented complex routing, state
                            management with Redux, and comprehensive form validation.
                        </li>
                        <li>
                            Mastered Git workflows, GitHub collaboration, and professional
                            development practices.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Education</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                        Bachelor's degree: Applied Mathematics and Informatics — Ivan Franko
                        National University of Lviv (1996–2002).
                        <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">
              Qualification: Mathematician, Specialization: Informatics
            </span>
                    </li>
                    <li>
                        Master's degree: Information Systems and Technologies — National
                        Environmental University of Lviv (2022–2024).
                        <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">
              Professional qualification upgrade in Information Technologies
            </span>
                    </li>
                    <li>Professional Development (2022–2024): Prometheus, ITVDN, CBS, Laracasts, Ciklum, ITGid</li>
                </ul>
            </section>

            {/* Technical Skills */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                        <span className="font-semibold">Languages & Frameworks:</span> JavaScript,
                        TypeScript, Node.js (Fastify, Express), React, Vue, Laravel.
                    </li>
                    <li>
                        <span className="font-semibold">Databases & ORM:</span> MongoDB, ClickHouse,
                        MySQL, Prisma, Sequelize.
                    </li>
                    <li>
                        <span className="font-semibold">State Management:</span> Redux Toolkit, Zustand.
                    </li>
                    <li>
                        <span className="font-semibold">Styling:</span> Tailwind CSS, CSS3, HTML5.
                    </li>
                    <li>
                        <span className="font-semibold">Tools & Platforms:</span> Git, GitHub, GitLab,
                        Figma, Vercel, Railway.
                    </li>
                    <li>
                        <span className="font-semibold">Concepts:</span> REST API, Routing, Authentication, MVC.
                    </li>
                    <li>
                        <span className="font-semibold">DevOps & Monitoring:</span> CI/CD, Docker, OpenTelemetry.
                    </li>
                </ul>
            </section>

            {/* Languages */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Languages</h2>
                <ul className="grid grid-cols-2 gap-2 list-disc list-inside ml-4">
                    <li>English — Upper Intermediate (B2)</li>
                    <li>Ukrainian — Fluent</li>
                    <li>Polish — A2</li>
                    <li>Russian — Fluent</li>
                </ul>
            </section>
        </div>
    );
}
