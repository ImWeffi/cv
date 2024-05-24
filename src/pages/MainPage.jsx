import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SiJavascript, SiPhp, SiLaravel, SiReact, SiExpress, SiWordpress, SiBootstrap, SiMysql, SiGit, SiHtml5, SiCss3 } from 'react-icons/si';
import profileImage from "../photo/nikita.jpg";
import TechGymImage from "../photo/techgym.png";
import ArodBiedribaImage from "../photo/arodbiedriba.jpg";
import orbytlogoImage from "../photo/orbytlogo.png";

function MainPage() {
  const [activeSection, setActiveSection] = useState('work');

  return (
    <>
      <Navbar onSectionChange={setActiveSection} />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="text-center">
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid rounded mb-3"
                style={{ width: '500px', height: '450px' }}
              />
              <h2>About Me</h2>
              <p>
                Motivated, hardworking and enthusiastic candidate with strong
                organizational skills, striving for progress.
              </p>
              <p>
                I am ready to help the team achieve the company's goals and use my
                knowledge.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            {activeSection === 'work' ? (
              <>
                <h2>Work Experience</h2>
                <br />
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <a href="https://www.techgym.eu/frontpage-eng/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={TechGymImage}
                        alt="Profile"
                        className="img-fluid rounded mb-3"
                        style={{ width: '110px', height: '110px' }}
                      />
                    </a>
                    <h4>Upprint | TECHGYM</h4>
                    <p>Student Intern</p>
                    <p>Created websites using WordPress</p>
                    <p>Nov 2021 - Jan 2022</p>
                    <p>Ventspils, Latvia · Hybrid</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <a href="http://www.biedriem.lv/kontakti/itsa-kon/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={ArodBiedribaImage}
                        alt="Profile"
                        className="img-fluid rounded mb-3"
                        style={{ width: '110px', height: '110px' }}
                      />
                    </a>
                    <h4>Informācijas tehnoloģiju speciālistu arodbiedrība</h4>
                    <p>Student Intern</p>
                    <p>Database design, creation, documentation, implementation.</p>
                    <p>Nov 2022 - Dec 2022</p>
                    <p>Riga, Latvia · Remote</p>
                  </div>
                  <div className="col-md-4 mb-3">
                    <a href="https://orbyt.tech/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={orbytlogoImage}
                        alt="Profile"
                        className="img-fluid rounded mb-3"
                        style={{ width: '2000px', height: '110px' }}
                      />
                    </a>
                    <h4>Orbyt AS</h4>
                    <p>Student Intern</p>
                    <p>Working with React, solving Web problems.</p>
                    <p>Jan 2024 - May 2024</p>
                    <p>Ventspils, Latvia · On-site</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2>Skills</h2>
                <div className="row">
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                      <SiJavascript className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer">
                      <SiPhp className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer">
                      <SiLaravel className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
                      <SiReact className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://expressjs.com/en/starter/installing.html" target="_blank" rel="noopener noreferrer">
                      <SiExpress className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://developer.wordpress.org/" target="_blank" rel="noopener noreferrer">
                      <SiWordpress className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer">
                      <SiBootstrap className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
                      <SiMysql className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
                      <SiGit className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                      <SiHtml5 className="display-4" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                      <SiCss3 className="display-4" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
