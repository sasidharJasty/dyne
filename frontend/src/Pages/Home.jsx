import Navbar from "../Components/Nav";
import "../Styles/Home.css";
import NASA from "../assets/Images/NASA.png";
import ASI from "../assets/Images/ASI.png";
import EESA from "../assets/Images/eesa.png";
import ITA from "../assets/Images/ITA.png";
import ITSM from "../assets/Images/ITSM.png";
import PAP from "../assets/Images/PAP.png";
import CDP from "../assets/Images/CDP.png";
import Footer from "../Components/Footer";
import Technology from "../assets/Images/Technology.png";

import Logo from "../assets/Images/Logo.png";

import Product1 from "../assets/Products/drone.jpg";
import Product2 from "../assets/Products/cyber.avif";
import Product3 from "../assets/Products/ai.jpg";
import bg from "../assets/Images/nasa.jpg";
import sponsor from "../assets/Images/bg.jpg";
import Product from "../Components/Products";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/*this is the NavBar imported from Nav.jsx from Components*/}
      <Navbar />
      {/*this is the Landing Portion of the website*/}
      <div className=" w-screen h-fit ">
        <div className="w-screen h-fit relative">
          <div className="w-fit h-fit relative  ">
        <img src={bg} className="w-screen relative   !z-0 h-fit"></img>
        <div className="w-screen h-full bg-gradient-to-b from-transparent via-20% via-transparent  to-black absolute top-[2vh] left-0 z-10">

        </div>
        </div>
        <div className=" mx-auto w-fit z-10 absolute top-[5%] left-[50%]   text-center py-[15%]">
          <div className="relative -left-[50%]">
          <a className="w-fit px-[0.2vh] py-[0.4vh] mx-auto border bg-[#5271ff4e] border-[#5271ff] rounded-3xl transition-all flex mb-[8vh] hover:scale-105" href="https://tally.so/r/mV8WpE">
            <h1 className="text-white tracking-normal transition-all mt-[0.6vh] ease-in font-normal  px-[1vw]">
             Introducing Our STEM Reserarch Network waitlist - <span className=" font-normal text-blue-400 mr-0 pr-0">Check it out here →</span>
            </h1>
          </a>
          <h1 className=" text-[3.5vw] w-[90vw] font-normal text-white">
            {" "}
            Venture Into STEM Excellence
          </h1>
          <h2 className="Home-Landing-Text mx-auto text-[1.1vw] text-gray-300 tracking-normal font-normal max-w-[90vw] md:max-w-[50vw] ">
          Empowering collaborative innovation in STEM by enabling students to lead impactful research centers. <br/> Explore Dyne and join us in shaping the future today for FREE!</h2>
          <div className="flex w-fit mx-auto mt-[8vh] text-white">
            <a
              href="https://tally.so/r/mV8WpE"
              className="w-fit mx-auto rounded-md font-thin text-center justify-center  border py-[0.4vw] px-[1vw] bg-[#5369ed] border-[#5369ed] hover:scale-110 transition-all ease-in-out tracking-wide"
            >
              Join the Waitlist
            </a>
            <a
              href="mailto:dyneresearch@gmail.com "
              className="w-fit mx-auto ml-5 rounded-md font-thin text-center justify-center border border-white py-[0.4vw] px-[1vw]  hover:scale-110 transition-all ease-in-out  tracking-wide"
            >
              Get in touch ↗
            </a>
          </div>
          </div>
          </div>
        </div>
      </div>
      {/*}this is the Sponsor bar section*/}
      <div className="Sponsor-Bar relative w-screen !mt-0 h-[20vh]">
        <div className="Gradient-Overlay"></div>
        <div className="!mt-0 flex justify-between px-[2.5vw]">
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={ASI} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={NASA} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={CDP} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={PAP} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={ITSM} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={ITA} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={EESA} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={ASI} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={NASA} />
          </div>
        </div>
      </div>
      {/*Content section*/}
      <div className="w-screen bg-black Home-Content" id="mission">
        <div className="h-[75vh] flex items-center">
          <div className="w-4/5 mx-auto flex items-center text-center text-white">
            <div className="mx-auto pr-20 !ml-[2vw] relative text-left">
              <h3 className="text-blue-300 mb-[7vh]">MISSION</h3>
              <h1 className="text-[2.6vw] Mission-Gradient !font-normal mb-[7vh] tracking-[0.05vw]">
                PIONEERING STEM RESEARCH NETWORK
              </h1>
            </div>
            <div className="mx-auto pl-20 w-1/2 !mr-[2vw] relative">
              <h2 className="text-[0.9vw] tracking-[0.15vw] mt-[-11vh] font-normal text-left Content-Font mb-[5vh]">
              At Dyne Research, we empower young innovators globally through collaborative initiatives in STEM. With mentorship and training, we inspire groundbreaking discoveries and shape the future of education.</h2>
              <a className="Content-Font absolute left-20 font-normal border border-white rounded-xl text-white p-[1vh] px-[3vh] hover:bg-[#5369ed] hover:border-[#5369ed] hover:scale-110 transition-all ease-in-out cursor-pointer" href="https://tally.so/r/mV8WpE">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>

        <div className="h-[75vh] flex items-center mt-[5vw]">
          <div className="w-4/5 h-[75vh] mx-auto  items-center text-center px-[1vw] relative py-[13vh]   text-white">
            <div className="w-11/12 h-[30vw] Technology-Container text-left absolute rounded-3xl right-0 top-0 flex">
              <div className="w-1/2 mr-[4.5vw]"> </div>
              <div className="w-[30.5vw]">
                <h3 className="text-blue-300 mb-[4vh] tracking-[0.15vw] mt-[7vw]">
                  TECHNOLOGY
                </h3>
                <h1 className="text-[2.2vw] Mission-Gradient !font-normal tracking-[0.05vw]">
                  EMPOWERING THE FUTURE OF STEM
                </h1>
                <h2 className="text-[0.9vw] mt-[4vh] !font-normal text-left tracking-[0.1vw] Content-Font mb-[5vh]">
                  We are launching a distributed research network within Dyne to
                  empower high school and college students globally. This
                  platform will enable students to collaborate on cutting-edge
                  STEM projects, leveraging their collective intelligence and
                  creativity.
                </h2>
              </div>
            </div>
            <img
              src={Technology}
              className="absolute left-0 top-[2vw] w-[46vw]"
            />
          </div>
        </div>
        <div className="h-[50vh] flex items-center mt-[12.5vh]" id="news">
          <div className="w-4/5 mx-auto flex items-center text-center text-white">
            <div className="mx-auto pr-20 !ml-[2vw] relative text-left">
              <h3 className="text-blue-300 tracking-[0.15vw] mb-[1vh]">NEWS</h3>
              <h1 className="text-[2.6vw] Mission-Gradient !font-normal mb-[4vh] tracking-[0.05vw]">
                LATEST UPDATES @
              </h1>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} className=" w-[2.5vw]  mt-0" alt="Dyne Logo" />
                <h1 className="text-2xl mt-1 text-white !font-light">DYNE</h1>
              </div>
            </div>
            <div className="mx-auto pl-20 w-1/2 !mr-[2vw] relative">
              <h2 className="text-[0.9vw] mt-[6vh] font-normal text-left Content-Font tracking-[0.1vw] w-11/12 mb-[5vh]">
              At Dyne Research, we're excited to unveil an initiative aimed at igniting creativity and collaboration among young STEM enthusiasts worldwide. This marks the beginning of a network where students can gain hands-on experience in STEM by launching their own Dyne Research centers. Join our waitlist as we prepare to drive advancements in STEM education and research.              </h2>
            </div>
          </div>
        </div>
        <div className="h-[75vh] flex items-center mt-[10vh]" id="projects">
          <div className="w-4/5 mx-auto items-center text-center text-white">
            <div>
              <h3 className="text-blue-300 tracking-[0.15vw] mb-[1vh]">
                PROJECTS
              </h3>
              <h1 className="text-[2.6vw] Mission-Gradient !font-normal mb-[4vh] tracking-[0.05vw]">
                Innovative Projects For Students
              </h1>
            </div>
            <div className="flex justify-between mt-[10vh]">
              <Product
                heading={"Drone Surveillance"}
                image={Product1}
                description={
                  "Join our aerospace project at Dyne to pioneer Autonomous Drone Surveillance and Monitoring technology, improving security through autonomous operations for surveillance, and disaster response."
                }
                styleText={""}
                styleContainer={
                  "w-[25vw] mx-5 h-[30vw] !bg-cover !bg-[40%] bg-blue-400 "
                }
              />
              <Product
                heading={"Cybersecurity"}
                image={Product2}
                description={
                  "Join Dyne's Cybersecurity project to design, implement, and deploy a robust Network Intrusion Detection System using traditional cybersecurity techniques and methodologies, ensuring confidentiality."
                }
                styleText={""}
                styleContainer={
                  "w-[25vw] mx-5 h-[30vw] !bg-cover !bg-left-top bg-blue-400"
                }
              />
              <Product
                heading={"AI/ML "}
                image={Product3}
                description={
                  "Join Dyne's AI/ML project in combating financial fraud with machine learning. Analyzing real-time transaction data safeguards institutions and customers from financial losses and reputational damage."
                }
                styleText={""}
                styleContainer={
                  "w-[25vw] mx-5 h-[30vw] !bg-cover !bg-center bg-blue-400 "
                }
              />
            </div>
          </div>
        </div>
        <div className="h-screen flex items-center" id="sponsor">
          <div className="w-4/5 mx-auto h-3/4 flex items-center text-center text-white ">
            <div className="w-1/2  h-full mt-0 text-left">
              <h3 className="text-blue-300 tracking-[0.15vw] mb-[1vh] mt-[10vh] ">
                SPONSOR
              </h3>
              <h1 className="text-[2.6vw] Mission-Gradient w-[80%] !font-normal mb-[4vh] leading-[6vh] tracking-[0.06vw]">
                Embark on our journey of connecting students to form a global network of STEM enthusiasts.
              </h1>
              <h2 className="text-[0.9vw] mt-[2vh] font-normal w-[85%] text-left Content-Font tracking-[0.1vw]  mb-[4vh]">
              We're leveraging technology to transform education, connecting students worldwide. Our initiative empowers young minds to create STEM research centers, fostering global collaboration. By uniting students, educators, and professionals, we're cultivating future innovators who will shape technology and society. Join us in empowering students and advancing STEM education.<br/>Contact us below to become a sponsor today.</h2>
              <a
              href="mailto:dyneresearch@gmail.com "
              className="w-fit mx-auto  rounded-md font-thin text-center justify-center border border-white py-[0.4vw] px-[1vw]  hover:scale-110 transition-all ease-in-out  tracking-wide"
            >
              Get in touch ↗
            </a>
            </div>
            <img className="w-1/2 rounded-3xl  " src={sponsor}>

            </img>
          </div>
        </div>

        </div>
      <Footer/>
    </div>
  );
}