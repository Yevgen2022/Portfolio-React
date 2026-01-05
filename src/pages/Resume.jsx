// export default function Resume() {
//     return (
//         <div className="py-20">
//             {/* Contact */}
//             <div className="resume">
//                 <div className="flex justify-end">
//                     <div className="text-base text-right max-w-sm">
//                         <h2 className="text-lg font-bold mb-2">Contact</h2>
//                         <p>
//                             Email:{" "}
//                             <a
//                                 href="mailto:sy.yevhen.lc@gmail.com"
//                                 className="text-blue-500 hover:underline"
//                             >
//                                 sy.yevhen.lc@gmail.com
//                             </a>
//                         </p>
//                         <p>
//                             LinkedIn:{" "}
//                             <a
//                                 href="https://www.linkedin.com/in/yevhen-oshkukov-436973254/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 hover:underline"
//                             >
//                                 Yevhen-LinkedIn
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Objective */}
//             <section className="mb-10 mt-16">
//                 <h2 className="text-xl font-bold mb-2">Objective</h2>
//                 <p>
//                     Full Stack JavaScript developer passionate about creating modern,
//                     efficient, and user-friendly web applications. Constantly improving
//                     skills and exploring new technologies to deliver clean, reliable
//                     solutions.
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
//                         Full Stack Intern — Adtelligent{" "}
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//               | Sep 2025 (completed)
//             </span>
//                     </h3>
//                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
//                         <li>
//                             Developed backend modules with Fastify and Prisma connected to
//                             MongoDB and ClickHouse.
//                         </li>
//                         <li>
//                             Built and tested a Prebid.js adapter for ad auctions and
//                             integrated custom ad tracking.
//                         </li>
//                         <li>Configured CI/CD pipelines and OpenTelemetry metrics.</li>
//                         <li>
//                             Used TypeScript across backend and frontend and deployed via
//                             Vercel and Railway.
//                         </li>
//                     </ul>
//                 </div>
//
//                 {/* Experience 2 */}
//                 <div className="mb-6">
//                     <h3 className="font-semibold">
//                         Portfolio Projects — Full Stack Developer{" "}
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//               | Feb 2025 – Present
//             </span>
//                     </h3>
//                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
//                         <li>
//                             Built single-page applications using React, TypeScript, Redux
//                             Toolkit, and Tailwind CSS.
//                         </li>
//                         <li>
//                             Implemented routing, JWT authentication, and REST API integration
//                             with async thunks.
//                         </li>
//                         <li>
//                             Developed Node.js + Express backend with authentication and CRUD
//                             operations.
//                         </li>
//                         <li>
//                             Applied best practices for clean code, performance, accessibility,
//                             and responsive design.
//                         </li>
//                         <li>Used Git and GitHub for version control and collaborative workflow.</li>
//                     </ul>
//                 </div>
//
//                 {/* Experience 3 */}
//                 <div className="mb-6">
//                     <h3 className="font-semibold">
//                         Full Stack Developer — SincosSoftware{" "}
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//               | Feb 2024 – Feb 2025
//             </span>
//                     </h3>
//                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
//                         <li>
//                             Developed internal tools and training projects under senior
//                             mentorship using Laravel, React, Vue, and Tailwind CSS.
//                         </li>
//                         <li>
//                             Built responsive UIs from Figma designs with authentication,
//                             dynamic routing, and REST API integration.
//                         </li>
//                         <li>
//                             Contributed to backend development following Laravel MVC
//                             principles — routes, Blade views, and controllers.
//                         </li>
//                         <li>
//                             Expanded backend expertise with Node.js and Express, creating REST
//                             APIs to support frontend features.
//                         </li>
//                         <li>
//                             Collaborated via GitHub, participated in code reviews, and followed
//                             professional Git workflows.
//                         </li>
//                         <li>
//                             Improved problem-solving and teamwork skills through daily
//                             standups, mentoring sessions, and collaborative debugging.
//                         </li>
//                     </ul>
//                 </div>
//
//                 {/* Experience 4 */}
//                 <div className="mb-6">
//                     <h3 className="font-semibold">
//                         Full Stack Development — Prometheus, ITVDN, SBC, Laracasts, Ciklum{" "}
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//               | 2022 – 2024
//             </span>
//                     </h3>
//                     <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
//                         <li>
//                             Completed comprehensive front-end development courses focusing on
//                             JavaScript, TypeScript, React, Redux, HTML5, CSS3, Tailwind CSS,
//                             and Git.
//                         </li>
//                         <li>
//                             Built multiple hands-on projects, including responsive websites and
//                             SPA applications.
//                         </li>
//                         <li>
//                             Integrated third-party APIs, implemented complex routing, state
//                             management with Redux, and comprehensive form validation.
//                         </li>
//                         <li>
//                             Mastered Git workflows, GitHub collaboration, and professional
//                             development practices.
//                         </li>
//                     </ul>
//                 </div>
//             </section>
//
//             {/* Education */}
//             <section className="mb-10">
//                 <h2 className="text-xl font-bold mb-2">Education</h2>
//                 <ul className="list-disc list-inside ml-4 space-y-2">
//                     <li>
//                         Bachelor's degree: Applied Mathematics and Informatics — Ivan Franko
//                         National University of Lviv (1996–2002).
//                         <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">
//               Qualification: Mathematician, Specialization: Informatics
//             </span>
//                     </li>
//                     <li>
//                         Master's degree: Information Systems and Technologies — National
//                         Environmental University of Lviv (2022–2024).
//                         <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">
//               Professional qualification upgrade in Information Technologies
//             </span>
//                     </li>
//                     <li>Professional Development (2022–2024): Prometheus, ITVDN, CBS, Laracasts, Ciklum, ITGid</li>
//                 </ul>
//             </section>
//
//             {/* Technical Skills */}
//             <section className="mb-10">
//                 <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
//                 <ul className="list-disc list-inside ml-4 space-y-2">
//                     <li>
//                         <span className="font-semibold">Languages & Frameworks:</span> JavaScript,
//                         TypeScript, Node.js (Fastify, Express), React, Vue, Laravel.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Databases & ORM:</span> MongoDB, ClickHouse,
//                         MySQL, Prisma, Sequelize.
//                     </li>
//                     <li>
//                         <span className="font-semibold">State Management:</span> Redux Toolkit, Zustand.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Styling:</span> Tailwind CSS, CSS3, HTML5.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Tools & Platforms:</span> Git, GitHub, GitLab,
//                         Figma, Vercel, Railway.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Concepts:</span> REST API, Routing, Authentication, MVC.
//                     </li>
//                     <li>
//                         <span className="font-semibold">DevOps & Monitoring:</span> CI/CD, Docker, OpenTelemetry.
//                     </li>
//                 </ul>
//             </section>
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
                            Phone:{" "}
                            <a
                                href="tel:+380677591684"
                                className="text-blue-500 hover:underline"
                            >
                                +38 067 7591684
                            </a>
                        </p>
                        <p>Location: Lviv, Ukraine</p>
                        <p>
                            LinkedIn:{" "}
                            <a
                                href="https://www.linkedin.com/in/yevhen-oshkukov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                linkedin.com/in/yevhen-oshkukov
                            </a>
                        </p>
                        <p>
                            GitHub:{" "}
                            <a
                                href="https://github.com/Yevgen2022"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                github.com/Yevgen2022
                            </a>
                        </p>
                        {/*<p>*/}
                        {/*    Portfolio:{" "}*/}
                        {/*    <a*/}
                        {/*        href="https://yevgen2022.github.io/Portfolio-React/"*/}
                        {/*        target="_blank"*/}
                        {/*        rel="noopener noreferrer"*/}
                        {/*        className="text-blue-500 hover:underline"*/}
                        {/*    >*/}
                        {/*        yevgen2022.github.io/Portfolio-React*/}
                        {/*    </a>*/}
                        {/*</p>*/}
                    </div>
                </div>
            </div>

            {/* Objective */}
            <section className="mb-10 mt-16">
                <h2 className="text-xl font-bold mb-2">Objective</h2>
                <p>
                    Full-stack JavaScript developer with 1.5 years of commercial experience,
                    strongly focused on Node.js backend development.
                    I build REST APIs, authentication systems, and design databases,
                    and I’m comfortable integrating backend services with modern React frontends.
                    Looking for a role where I can work across the stack while contributing
                    primarily to backend architecture and business logic.

                </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                        <span className="font-semibold">Frontend:</span> React, Vue,
                        JavaScript, TypeScript, Redux Toolkit, Zustand.
                    </li>
                    <li>
                        <span className="font-semibold">Styling & UI:</span> Tailwind CSS,
                        CSS3, HTML5, Responsive Design.
                    </li>
                    <li>
                        <span className="font-semibold">Backend:</span> Node.js, Express,
                        Fastify, TypeScript, Laravel (PHP).
                    </li>
                    <li>
                        <span className="font-semibold">Database / ORM:</span> PostgreSQL,
                        MySQL, MongoDB, ClickHouse, Prisma, Sequelize.
                    </li>
                    <li>
                        <span className="font-semibold">APIs & Auth:</span> REST APIs, JWT,
                        Session Management, Validation.
                    </li>
                    <li>
                        <span className="font-semibold">DevOps & Infrastructure:</span> Docker,
                        CI/CD, Railway, Vercel, Git, OpenTelemetry (basic).
                    </li>
                </ul>
            </section>

            {/* Professional Experience */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Professional Experience</h2>

                {/* Experience 1 - SincosSoftware */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Full Stack Developer (Node.js / Backend focus) — SincosSoftware{" "}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            | Feb 2024 – Aug 2025
                        </span>
                    </h3>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">
                        Product development company - internal tools and client projects
                        (Fixed-term project; contract ended)
                    </p>

                    {/* Backend Specialization Period */}
                    <div className="mt-3">
                        <h4 className="font-semibold text-sm mb-2">
                            Evolved from full-stack to backend specialization
                        </h4>
                        <p className="font-semibold text-sm mb-1">
                            Backend Specialization (Feb 2025 - Aug 2025):
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>
                                Developed RESTful APIs using Node.js, Express, and TypeScript
                                with authentication and validation.
                            </li>
                            <li>
                                Built authentication systems with JWT tokens, bcrypt password
                                hashing, and session management.
                            </li>
                            <li>
                                Designed database schemas and wrote migrations for PostgreSQL
                                and MySQL.
                            </li>
                            <li>
                                Integrated backend APIs with React and Vue frontends, ensuring
                                seamless data flow.
                            </li>
                            <li>
                                Implemented custom Express middleware for CORS, logging, and
                                authentication.
                            </li>
                            <li>
                                Participated in code reviews and followed professional Git workflows.
                            </li>
                        </ul>
                    </div>

                    {/* Full Stack Period */}
                    <div className="mt-3">
                        <p className="font-semibold text-sm mb-1">
                            Full Stack Development (Feb 2024 - Feb 2025):
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li>
                                Built responsive user interfaces with React, Vue, and Tailwind CSS
                                from Figma designs.
                            </li>
                            <li>
                                Implemented frontend routing, state management with Redux, and
                                form validation.
                            </li>
                            <li>
                                Developed backend features with Laravel MVC (routes, controllers,
                                Blade views).
                            </li>
                            <li>
                                Integrated REST APIs with frontend applications handling async
                                data and error states.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Personal Projects */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Personal Projects</h2>

                {/* Project 1 - AdTech Bidding System */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        AdTech Bidding System
                    </h3>
                    <div className="text-sm mt-1 space-x-4">
                        <a
                            href="https://adtech.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Demo: adtech.vercel.app
                        </a>
                        <a
                            href="https://github.com/addtech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            GitHub: github.com/addtech
                        </a>
                        <a
                            href="https://api-docs.railway.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            API Docs: api-docs.railway.app
                        </a>
                    </div>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>
                            Developed a backend service for programmatic advertising with
                            real-time bidding auctions.
                        </li>
                        <li>
                            Implemented Prebid.js adapter with auction logic and bid processing.
                        </li>
                        <li>
                            Integrated OpenTelemetry for monitoring and ClickHouse for analytics.
                        </li>
                        <li>
                            <span className="font-semibold">Technologies:</span> Node.js, TypeScript,
                            Fastify, Prisma, MongoDB, ClickHouse, OpenTelemetry, React, Tailwind CSS.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Education</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                        <span className="font-semibold">Master's degree:</span> Information Systems
                        and Technologies — National Environmental University of Lviv
                        <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">
                            Sep 2022 – Apr 2024
                        </span>
                    </li>
                    <li>
                        <span className="font-semibold">Bachelor's degree:</span> Applied Mathematics
                        — Ivan Franko National University of Lviv
                        <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">
                            1996 – 2002
                        </span>
                    </li>
                </ul>
            </section>

            {/* Languages */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Languages</h2>
                <ul className="grid grid-cols-2 gap-2 list-disc list-inside ml-4">
                    <li>English — Upper Intermediate</li>
                    <li>Ukrainian — Fluent</li>
                    <li>Polish — A2</li>
                    <li>Russian — Fluent</li>
                </ul>
            </section>
        </div>
    );
}
