export default function Resume() {
    return (
        <div className="py-20">
            {/* Contact */}
            <div className="resume">
                <div className="flex justify-end">
                    <div className="text-base text-right max-w-sm">
                        <h2 className="text-lg font-bold mb-2">Contact</h2>
                        <p>Email: <a href="mailto:sy.yevhen.lc@gmail.com"
                                     className="text-blue-500 hover:underline">sy.yevhen.lc@gmail.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/yevhen-oshkukov-436973254/" target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline">Yevhen-LinkedIn</a></p>
                    </div>
                </div>
            </div>

            {/* Objective */}
            <section className="mb-10 mt-16">
                <h2 className="text-xl font-bold mb-2">Objective</h2>
                <p>
                    Front-end developer with strong self-learning motivation. Proficient in building SPA applications
                    using
                    React, TypeScript, and Tailwind CSS. Adept in REST API integration, state management, and clean code
                    principles. Recently started back-end learning with Node.js and Express. Seeking to join a tech-driven team where I can contribute and grow further.
                </p>
            </section>

            {/* Professional Experience */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Professional Experience</h2>

                {/* Experience 1 */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Front-end Developer — Task Management Platform (NDA) <span
                        className="text-sm text-gray-500 dark:text-gray-400">| Feb 2025 – Present</span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Developing a comprehensive SPA application with React, TypeScript, Redux Toolkit, and Tailwind CSS.
                        </li>
                        <li>Implemented advanced routing (React Router v6), JWT-based authentication, and theme switching
                            (dark/light mode).
                        </li>
                        <li>Integrated REST API data using async thunks and displayed paginated content with loading
                            states.
                        </li>
                        <li>Focused on clean, maintainable code (following ESLint/Prettier rules and DRY/KISS
                            principles).
                        </li>
                        <li>Implementing accessibility features, performance optimization, and responsive design techniques.</li>
                        <li>Prototyping simple REST API backend with Node.js and Express.js as part of full-stack learning.</li>
                        <li>Using Git and GitHub for version control and project organization.</li>
                    </ul>
                </div>

                {/* Experience 2 */}
                <div className="mb-6">
                    <h3 className="font-semibold">
                        Front-End Trainee — SincosSoftware (Norwegian company) <span
                        className="text-sm text-gray-500 dark:text-gray-400">| Feb 2024 – Feb 2025</span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Developed production-ready internal tools and training projects under senior mentorship, creating reusable UI components with Laravel,
                            React, Vue, JavaScript, and Tailwind CSS.
                        </li>
                        <li>Implemented complex REST API integration using Axios/fetch, built dynamic routing systems (Vue Router/React Router), and
                            developed secure authentication flows with JWT tokens.
                        </li>
                        <li>Built fully responsive web applications from Figma designs, ensuring cross-browser compatibility and mobile-first approach.</li>
                        <li>Contributed to full-stack development: designed and implemented Laravel routes, created dynamic Blade views, and built robust controllers following MVC
                            architecture principles.
                        </li>
                        <li>Actively participated in weekly code reviews with senior developers, implemented feedback to improve code quality, and
                            developed strong problem-solving methodologies.
                        </li>
                        <li>Managed version control and collaborated on team projects using GitHub, following professional Git workflows and branching strategies.</li>
                        <li>Delivered hands-on contributions to both frontend and backend development, mastering Laravel framework and MVC patterns.</li>
                        <li>Started building foundational back-end skills using Node.js, Express, and RESTful APIs to better understand full-stack development.</li>

                    </ul>
                </div>

                {/* Experience 3 */}
                <div>
                    <h3 className="font-semibold">
                        Front-End Development — Professional Training <span
                        className="text-sm text-gray-500 dark:text-gray-400">| 2022 - 2024</span>
                    </h3>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Completed intensive front-end development programs through Prometheus, SBC, Laracast, and Ciklum, focusing on JavaScript, <span
                            className="block ml-5">TypeScript, React, Redux, HTML5, CSS3, Tailwind CSS, and Git.</span>
                        </li>
                        <li>Built and deployed multiple production-ready projects (portfolio site, task management app, weather dashboard) using React
                            and modern development tools.
                        </li>
                        <li>Integrated third-party APIs (TMDB, OpenWeather), implemented complex routing, state management with Redux,
                            and comprehensive form validation.
                        </li>
                        <li>Converted Figma designs into pixel-perfect, responsive layouts using Tailwind CSS and modern CSS techniques.
                        </li>
                        <li>Mastered Git workflows, GitHub collaboration, and professional development practices.</li>
                    </ul>
                </div>
            </section>

            {/* Education */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Education</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Bachelor's degree: Applied Mathematics and Informatics — Ivan Franko National University of Lviv (1996–2002).
                        <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">Qualification: Mathematician, Specialization: Informatics</span>
                    </li>
                    <li>Master's degree: Information Systems and Technologies — National Environmental University of
                        Lviv (2022–2024).
                        <span className="block ml-5 text-sm text-gray-600 dark:text-gray-400">Professional qualification upgrade in Information Technologies</span>
                    </li>
                    <li>Professional Development (2022–2024): Prometheus, CBS, Laracast, Ciklum, ITVDN.</li>
                </ul>
            </section>

            {/* Technical Skills */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside ml-4">
                    <li>JavaScript, TypeScript</li>
                    <li>HTML5, CSS3</li>
                    <li>React, Vue, Laravel</li>
                    <li>Redux Toolkit, Zustand</li>
                    <li>Tailwind CSS</li>
                    <li>Git, GitHub, GitLab, Figma</li>
                    <li>REST API, Routing, Authentication</li>
                    <li>MVC, SOLID, DRY</li>
                    <li>Node.js (basic), Express.js (basic)</li>
                </ul>
            </section>

            {/* Languages */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Languages</h2>
                <div className="ml-9 space-y-2">
                    <p>English — Upper Intermediate (B2)</p>
                    <p>Ukrainian — Fluent</p>
                </div>
            </section>

            {/* Personal Skills */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-2">Personal Skills</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Detail-oriented and self-disciplined</li>
                    <li>Strong team player with good communication skills</li>
                    <li>Fast learner with a passion for new technologies</li>
                </ul>
            </section>
        </div>
    );
}