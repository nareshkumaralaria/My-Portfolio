import toast, { Toaster } from 'react-hot-toast';
import { SiGmail, SiLeetcode, SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { AiFillPhone } from 'react-icons/ai';
import { CgMouse } from 'react-icons/cg';
import './App.css';

function App() {

  const toastCall = (clipMsg, msg) => {
    window.navigator.clipboard.writeText(clipMsg);
    toast.success(msg);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener("scroll", function () {
    var scrollToTop = this.document.querySelector('.scrollToTop');
    scrollToTop.classList.toggle("active", window.scrollY > 500);
  })

  return (
    <>
      <Toaster />
      <div className="app">

        <div className="scrollToTop" onClick={scrollToTop}></div>

        {/* Landing Page -- Start */}

        <div className="home-page vh-100 d-flex flex-wrap justify-content-center align-items-center" id="Home">
          <div className="left-part vh-85">
            <div className="greeting d-flex align-items-center flex-row">
              <img src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png" alt="greeting-img" className="me-2" />
              <p className="mb-0">Hi, I'm</p>
            </div>
            <p className="myname">Naresh Kumar</p>
            <p className="headline">Full stack developer | MERN | UI/UX</p>
            <p className="about">I am looking for a Software Engineering role at a company which develop products with huge impact.</p>
            <div className="social d-flex w-100 mt-3 flex-wrap">
              <div className="d-flex justify-content-center align-items-center me-3 mt-3" onClick={() => toastCall('nareshalaria8@gmail.com', 'Email copied to clipboard')}>
                <SiGmail />
              </div>
              <div className="d-flex justify-content-center align-items-center me-3 mt-3" onClick={() => toastCall('+919649960681', 'Phone No. copy to clipboard')}>
                <AiFillPhone />
              </div>
              <div className="d-flex justify-content-center align-items-center me-3 mt-3">
                <a href="https://leetcode.com/NareshKumar47/" target="_blank" rel='noreferrer'>
                  <SiLeetcode />
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center me-3 mt-3">
                <a href="https://github.com/nareshkumaralaria" target="_blank" rel='noreferrer'>
                  <SiGithub />
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center me-3 mt-3">
                <a href="https://www.linkedin.com/in/nareshkumaralaria/" target="_blank" rel='noreferrer'>
                  <SiLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="right-part vh-85 d-flex align-items-center justify-content-center">
            <img src={process.env.PUBLIC_URL + "/assets/img/NareshKumar.png"} alt="" className="w-100" />
          </div>
          <div className="bottom-part w-100 align-items-center justify-content-center">
            <CgMouse />
          </div>
        </div>

        {/* Landing Page -- End */}


        {/* Experience page -- start */}

        <div className="experience" id="Experience">
          <h1 className="experince-heading">Experience</h1>

          <div className="experience-section">
            <div className="experience-left">
              <div className="logo">
                <img src={process.env.PUBLIC_URL + "/assets/img/the-odin-logo.png"} alt="The Odin Infotech" />
              </div>
              <div className="company-info">
                <h1>Web Developer Intern</h1>
                <p>The Odin Infotech</p>
                <span>January 2022 - June 2022</span>
              </div>
            </div>
            <div className="experience-right">
              <ul>
                <li>Designed and developed the Enterprise resource planning (ERP) Software for two Organizations and released Beta Version.</li>
                <li>Designed and developed the E-commerce application and released on play store and increased number of customers by 80%.</li>
                <li>Developed the website for a Rurban Education Organization.</li>
                <li>Optimized the performance of React application and increase by 40%.</li>
                <li>Optimized the existing website user interface and user experience.</li>
                <li>Tech Stack: Node.js, Redux, React.js, JavaScript, MongoDB</li>
              </ul>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-left">
              <div className="logo">
                <img src="https://bizlem.com/wp-content/uploads/2021/07/logo.png" alt="Bizlem Pvt Ltd" />
              </div>
              <div className="company-info">
                <h1>UI/UX Designer Intern</h1>
                <p>Bizlem Pvt Ltd</p>
                <span>July 2021 - September 2021</span>
              </div>
            </div>
            <div className="experience-right">
              <ul>
                <li>Designed Enterprise resource planning (ERP) software mobile application UI.</li>
                <li>Attended daily meetings with HR to establish UI designs changes and implement new design ideas. </li>
                <li>Tech Stack: AdodeXD, Figma, Photoshop.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience page -- end  */}


        {/* Skill page -- start */}

        <div className="experience" id="Skills">
          <h1 className="experince-heading">Skills</h1>


          <div className="skill-section">
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/figma.svg"} alt="" />
              <span>Figma</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/javascript.svg"} alt="" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/mongodb.svg"} alt="" />
              <span>Mongo DB</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/nodejs.svg"} alt="" />
              <span>Nodejs</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/git.svg"} alt="" />
              <span>Git</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/html.svg"} alt="" />
              <span>HTML5</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/css.svg"} alt="" />
              <span>CSS3</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/reactjs.svg"} alt="" />
              <span>Reactjs</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/bootstrap.svg"} alt="" />
              <span>Bootstrap</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/img/redux.png"} alt="" />
              <span>Redux</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/vscode.svg"} alt="" />
              <span>VS Code</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/cpp.svg"} alt="" />
              <span>C++</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/icons/adobexd.svg"} alt="" />
              <span>Adobe XD</span>
            </div>
            <div className="skill">
              <img src={process.env.PUBLIC_URL + "/assets/img/dsa.png"} alt="" />
              <span>DSA</span>
            </div>
          </div>
        </div>

        {/* Skill page -- end */}


        {/* Education page -- start */}

        <div className="experience" id="Education">
          <h1 className="experince-heading">Education</h1>

          <div className="education-section">
            <div className="experience-left">
              <div className="logo">
                <img src={process.env.PUBLIC_URL + "/assets/icons/graduation-hat.svg"} alt="Btech" />
              </div>
              <div className="company-info">
                <h1>Graduation, Bachelor of Technology in Computer Science</h1>
                <p>Indian Institute Of Information Technology, Una (HP)</p>
                <span>August 2019 - May 2023</span>
              </div>
            </div>
          </div>

          <div className="education-section">
            <div className="experience-left">
              <div className="logo">
                <img src={process.env.PUBLIC_URL + "/assets/icons/graduation-school.svg"} alt="Btech" />
              </div>
              <div className="company-info">
                <h1>High School, Science</h1>
                <p>Rakesh Academy Sr. Sec. School (RBSE)</p>
                <span>Batch 2017,  Score: 84.60%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Education page -- end */}


        {/* projects page -- start */}

        <div className="experience" id="Projects">
          <h1 className="experince-heading">Projects</h1>

          <div className="experience-section">
            <div className="experience-left">
              <div className="logo">
                <img src={process.env.PUBLIC_URL + "/assets/img/ERP.png"} alt="ERP" />
              </div>
              <div className="company-info">
                <h1>ERP Software</h1>
                <p>MERN stack</p>
                <span>January 2022 – June 2022</span>
              </div>
            </div>
            <div className="experience-right">
              <ul>
                <li>Redesigned and developed the Enterprise resource planning (ERP) software.</li>
                <li>Developed the separate Admin & Employees panel.</li>
                <li>Added the Admin and Super admin features.</li>
                <li>Tech Stack: Node.js, Redux, React.js, JavaScript, MongoDB</li>
              </ul>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-left">
              <div className="logo">
                <img src={process.env.PUBLIC_URL + "/assets/img/ecommerce.png"} alt="ecommerce" />
              </div>
              <div className="company-info">
                <h1>E-commerce Application</h1>
                <p>React.js and Shopify</p>
                <span>February 2022 – March 2022</span>
              </div>
            </div>
            <div className="experience-right">
              <ul>
                <li>React.js based mobile application. Shopify used for database.</li>
                <li>In-app purchase enabled by using Shopify.</li>
                <li>Tech Stack: React.js, Shopify, Context API</li>
              </ul>
            </div>
          </div>
        </div>

        {/* projects page -- end */}

      </div>

      {/* Footer page -- start */}

      <footer>
        <div className="waves">
          <div className="wave" id='wave1'></div>
          <div className="wave" id='wave2'></div>
          <div className="wave" id='wave3'></div>
          <div className="wave" id='wave4'></div>
        </div>

        <ul className='footer-social'>
          <li><a href="https://www.linkedin.com/in/nareshkumaralaria/" target="_blank" rel='noreferrer'><SiLinkedin /></a></li>
          <li><a href="https://github.com/nareshkumaralaria" target="_blank" rel='noreferrer'><SiGithub /></a></li>
          <li><a href="https://instagram.com/i_am_nk47?igshid=YmMyMTA2M2Y=" target="_blank" rel='noreferrer'><SiInstagram /></a></li>
        </ul>

        <ul className="contact">
          <li>nareshalaria8@gmail.com</li>
          <li>+91 9649960681</li>
        </ul>

        <ul className='footer-menu'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#Projects">Projects</a></li>
        </ul>

        <p>©2022 Naresh Kumar</p>
      </footer>

      {/* Footer page -- end */}
    </>
  );
}

export default App;
