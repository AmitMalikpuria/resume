import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
        <header class="header">
            <div class="name-title">
                <h1>Amit Malikpuria</h1>
            </div>

        </header>
        <div class="contact-info">
            <p>amitsaini8850@gmail.com</p>
            <p>|</p>
            <p>9802818580 </p>
            <p>|</p>
            <p>Rohtak (124001), Haryana, India</p>
        </div>
        <div class="main-content">
            <div class="left-column">
                <section class="summary">
                    <h2>Summary</h2>
                    <p>Hard-working and passionate in work, seeking a challenging and rewarding opportunity with an
                        organization of repute that recognizes my true potential and effectively utilizes/nurtures my
                        excellent analytical and technical skills in IT industry Software.</p>
                </section>

                <section class="experience">
                    <h2>Experience</h2>
                    <div class="job">
                        <h3>React JS | Asp.Net Developer, 07/2022 - Current</h3>
                        <p><strong>Haryana Kaushal Rojgar Nigam</strong> - Rohtak, India</p>
                        <ul>
                            <li>Developed an Admission Portal and integrated APIs from the Citizen Resource Information
                                Department (CRID), which was developed by the National Informatics Center (NIC),
                                Haryana.</li>
                            <li>Developed a Web Portal for the Right to Services (RTS) for university students and
                                integrated it with the Auto Appeal System (AAS), developed by the National Informatics
                                Center (NIC), Haryana, allowing students to request specific services online.</li>
                            <li>Designed and developed a Full Stack Team Management System Web Application using React,
                                Redux, .NET Framework Restful APIs, and SQL Server.</li>
                            <li>Developed applications using ASP.NET, C#, JavaScript, and HTML.</li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>React JS | Asp.Net Developer, 08/2021 - 06/2022</h3>
                        <p><strong>Eagle Hunter Solutions Ltd (merged with Haryana Kaushal Rojgar Nigam)</strong> -
                            Rohtak, India</p>
                        <ul>
                            <li>Wrote clean, scalable code using .NET programming languages.</li>
                            <li>Troubleshooted technical issues related to .NET development.</li>
                            <li>Developed .NET applications using C#, ASP.NET, HTML, and JavaScript.</li>
                            <li>Designed user interfaces with an emphasis on usability and accessibility.</li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>Software Developer, 02/2021 - 06/2021</h3>
                        <p><strong>Open Access Technology India</strong> - Mohali, India</p>
                        <ul>
                            <li>Wrote clean, scalable code using .NET programming languages.</li>
                            <li>Participated in code review meetings, providing input on bugs, inefficiencies and
                                potential solutions to emergent issues.</li>
                            <li>Optimized program performance by analyzing code and making changes as needed.</li>
                            <li>Debugged code to identify errors and fix them efficiently.</li>
                            <li>Developed .NET applications using C#, ASP.NET, HTML, and JavaScript.</li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>ASP.NET Web Developer, 02/2019 - 09/2020</h3>
                        <p><strong>Nijomee Technology Pvt Ltd</strong> - Rohtak, India</p>
                        <ul>
                            <li>Implemented coding best practices such as code refactoring, unit testing, and code
                                review.</li>
                            <li>Designed user interfaces for various web pages according to client requirements.</li>
                            <li>Developed .NET applications using C#, ASP.NET, HTML, and JavaScript.</li>
                        </ul>
                    </div>
                </section>

                <section class="education">
                    <h2>Education and Training</h2>
                    <div class="degree">
                        <h3>02/2018</h3>
                        <p><strong>Master in Computer Application, Information Technology</strong></p>
                        <p>Maharshi Dayanand University, Rohtak</p>
                    </div>

                    <div class="degree">
                        <h3>02/2015</h3>
                        <p><strong>Bachelor In Computer Applications, Information Technology</strong></p>
                        <p>Maharshi Dayanand University, Rohtak</p>
                    </div>

                    <div class="degree">
                        <h3>03/2012</h3>
                        <p><strong>12th</strong></p>
                        <p>MDN Public School, Near New Bus Stand, Rohtak</p>
                    </div>

                    <div class="degree">
                        <h3>02/2010</h3>
                        <p><strong>10th</strong></p>
                        <p>MDN Public School, Near New Bus Stand, Rohtak</p>
                    </div>
                </section>
            </div>

            <div class="right-column">
                <section class="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML, CSS, Bootstrap</li>
                        <li>Javascript</li>
                        <li>ES6</li>
                        <li>DOM Manipulation</li>
                        <li>React JS</li>
                        <li>Developer Tools</li>
                        <li>CSS Flexbox</li>
                        <li>Local Storage</li>
                        <li>Event Handling in JS</li>
                        <li>.NET Framework Rest APIs</li>
                        <li>C# Programming</li>
                        <li>ASP Web Forms</li>
                        <li>Microsoft SQL Server</li>
                    </ul>
                </section>

                <section class="languages">
                    <h2>Languages</h2>
                    <p>English, Hindi</p>
                </section>

                <section class="profiles">
                    {/* <h2> Web Project & Profiles</h2>
                     <p><strong>Profiles:</strong></p> 
                    <p><a href="https://www.linkedin.com/in/amit-malikpuria-447119173/" target="_blank">LinkedIn</a></p>
                    <p><strong>React Web App:</strong></p>
                    <p>Full Stack Developed using .Net Rest APIs & React JS</a></p> */}
                    <p><a href="http://14.139.252.142:86/login" target="_blank">Softball Game Management System</a></p>
                    <p><a href="https://dlcsupva.ac.in" target="_blank">University Website and Admin Dashboard</a></p>

                    <p><a href="https://www.crio.do/learn/portfolio/amitsaini8850/" target="_blank">My CRIO
                            Learnings & Skills</a></p>
                </section>
            </div>
        </div>
    </div>
    
  );
}

export default App;
