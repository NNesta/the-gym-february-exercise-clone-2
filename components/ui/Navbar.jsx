import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiLockAlt, BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoGlobeSharp } from "react-icons/io5";
import Logo from "./Logo";
import Button from "./Button";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import { SlGraduation } from "react-icons/sl";
import { HiPencilAlt } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState(JSON.stringify([]));
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <div className="">
      <div className="fixed inset-x-0 top-0 z-50 bg-white flex justify-between items-center px-14 h-[110px]">
        <Logo />
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            <li>
              <Link
                className="flex items-center gap-2 text-black"
                href="/support"
              >
                <BiLockAlt size={20} />
                <span>For personnel</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2 text-black"
                href="/support"
              >
                <CiHeart size={20} />
                <span>Support us</span>
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-10">
            <li className="flex items-center gap-2">
              <IoGlobeSharp />
              <span>EN</span>
              <span class="material-symbols-outlined">expand_more</span>
            </li>
            <li className="flex items-center gap-2">
              <BiSearch />
              <span>Search</span>
            </li>
            <li
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
              {!isOpen ? (
                <div className="cursor-pointer flex gap-1 items-center">
                  <span class="material-symbols-outlined">menu</span>
                  <span>Menu</span>
                </div>
              ) : (
                <div className="cursor-pointer flex gap-1 items-center">
                  <span class="material-symbols-outlined">close</span>
                  <span>Close Menu</span>
                </div>
              )}
            </li>
          </ul>
          <Button link="login">Login</Button>
        </div>
        <div className="flex lg:hidden items-center gap-2 ">
          <BiSearch />
          <hr className="h-[20px] w-[1px] bg-primary" />
          <span onClick={() => setIsOpen(!isOpen)}>Menu</span>
        </div>
      </div>
      {isOpen && (
        <div className="w-full">
          <div className="w-full fixed inset-0 z-30 bg-black opacity-75"></div>
          <div className="fixed top-[110px] inset-y-0 overflow-x-scroll right-0 w-full max-w-[1350px] m-0 bg-white z-[500]">
            <div className="flex justify-between w-full items-center px-4">
              <div className="flex gap-4 items-center py-4">
                <div className="flex flex-col items-center hover:bg-[#e3e3e3] p-2">
                  <CgMenuGridR size={40} />
                  <span>Services</span>
                </div>
                <div className="flex flex-col items-center hover:bg-[#e3e3e3] p-2">
                  <TfiMenuAlt size={40} />
                  <span>Site index</span>
                </div>
                <div className="flex flex-col items-center hover:bg-[#e3e3e3] p-2">
                  <SlGraduation size={40} />
                  <span>Student guide</span>
                </div>
                <div className="flex flex-col items-center hover:bg-[#e3e3e3] p-2">
                  <HiPencilAlt size={40} />
                  <span>Apply to Aalto</span>
                </div>
              </div>
              <p>
                Aalto community members please log in to see internal content
              </p>
            </div>
            <ul>
              {[
                {
                  title: "Admissions and applying",
                  data: [
                    { title: "Apply to Aalto", link: "apply" },
                    { title: "Find a study programme", link: "find" },
                    { title: "How to apply", link: "how" },
                    {
                      title: "Scholarships and tuition fees",
                      link: "scholarships",
                    },
                    {
                      title: "Bachelors admissions",
                      link: "bachelors",
                    },
                    { title: "Masters admissions", link: "masters" },
                    {
                      title: "Doctoral admissions",
                      link: "doctoral",
                    },
                    { title: "Campus life", link: "campus" },
                    {
                      title: "Events for applicants",
                      link: "events",
                    },
                    { title: "Chat with students", link: "chat" },
                    {
                      title: "Subscribe to newsletter",
                      link: "subscribe",
                    },
                    { title: "Lifewide Learning", link: "lifewide" },
                    {
                      title: "Contact admission services",
                      link: "contact",
                    },
                    { title: "Exchange students", link: "exchange" },
                  ],
                },
                {
                  title: "News and events",
                  data: [
                    { title: "Highlights", link: "highlights" },
                    { title: "News", link: "news" },
                    { title: "Events", link: "events" },
                    {
                      title: "Aalto University Magazine",
                      link: "aalto",
                    },
                    { title: "OurBlogs", link: "ourblogs" },
                    { title: "Podcasts", link: "podcasts" },
                    {
                      title: "Information on coronavirus",
                      link: "information",
                    },
                    { title: "For the media", link: "for" },
                  ],
                },
                {
                  title: "Research and art",
                  data: [
                    { title: "Research and art", link: "research" },
                    {
                      title: "Teaching and learning for teachers",
                      link: "teaching",
                    },
                    {
                      title: "Research portal researchaaltofi",
                      link: "research",
                    },
                    { title: "Doctoral education", link: "doctoral" },
                    {
                      title: "Doctoral programmes",
                      link: "doctoral",
                    },
                    { title: "Tenure track", link: "tenure" },
                    {
                      title: "Research and learning facilities",
                      link: "research",
                    },
                    {
                      title: "Aalto Networking Platform",
                      link: "aalto",
                    },
                  ],
                },
                {
                  title: "For students",
                  data: [
                    { title: "The Student Guide", link: "the" },
                    { title: "Sisu", link: "sisu" },
                    { title: "MyCourses", link: "mycourses" },
                    { title: "MyStudies", link: "mystudies" },
                    { title: "Doctoral education", link: "doctoral" },
                    { title: "Browse all courses", link: "browse" },
                  ],
                },
                {
                  title: "Schools and departments",
                  data: [
                    {
                      title: "School of Arts Design and Architecture",
                      link: "school",
                    },
                    { title: "School of Business", link: "school" },
                    {
                      title: "School of Chemical Engineering",
                      link: "school",
                    },
                    {
                      title: "School of Electrical Engineering",
                      link: "school",
                    },
                    {
                      title: "School of Engineering",
                      link: "school",
                    },
                    { title: "School of Science", link: "school" },
                    { title: "Departments", link: "departments" },
                    {
                      title: "Accounting  Business Law",
                      link: "accounting",
                    },
                    { title: "Applied Physics", link: "applied" },
                    { title: "Architecture", link: "architecture" },
                    { title: "Art and Media", link: "art" },
                    {
                      title: "Bioproducts and Biosystems",
                      link: "bioproducts",
                    },
                    { title: "Built Environment", link: "built" },
                    {
                      title: "Chemical and Metallurgical Engineering",
                      link: "chemical",
                    },
                    {
                      title: "Chemistry and Materials Science",
                      link: "chemistry",
                    },
                    { title: "Civil Engineering", link: "civil" },
                    { title: "Computer Science", link: "computer" },
                    { title: "Design", link: "design" },
                    { title: "Economics", link: "economics" },
                    {
                      title: "Electronics and Nanoengineering",
                      link: "electronics",
                    },
                    {
                      title: "Electrical Engineering and Automation",
                      link: "electrical",
                    },
                    {
                      title: "Film Television and Scenography",
                      link: "film",
                    },
                    { title: "Finance", link: "finance" },
                    {
                      title: "Industrial Engineering and Management",
                      link: "industrial",
                    },
                    {
                      title: "Information and Communications Engineering",
                      link: "information",
                    },
                    {
                      title: "Information and Service Management",
                      link: "information",
                    },
                    {
                      title: "Management Studies",
                      link: "management",
                    },
                    { title: "Marketing", link: "marketing" },
                    {
                      title: "Mathematics and Systems Analysis",
                      link: "mathematics",
                    },
                    {
                      title: "Mechanical Engineering",
                      link: "mechanical",
                    },
                    {
                      title: "Neuroscience and Biomedical Engineering",
                      link: "neuroscience",
                    },
                  ],
                },
                {
                  title: "Tools",
                  data: [
                    {
                      title: "Facilities and space reservations",
                      link: "facilities",
                    },
                    { title: "Aalto Space", link: "aalto" },
                    { title: "Asio", link: "asio" },
                    { title: "AV and Web malfunctions", link: "av" },
                    {
                      title: "Maintenance requests",
                      link: "maintenance",
                    },
                    {
                      title: "Cleaning removal and furniture service requests",
                      link: "cleaning",
                    },
                    {
                      title: "Safety and emergencies",
                      link: "safety",
                    },
                    { title: "Emergencies", link: "emergencies" },
                    { title: "Incident report", link: "incident" },
                  ],
                },
                {
                  title: "About us",
                  data: [
                    { title: "About us", link: "about" },
                    { title: "Our history", link: "our" },
                    {
                      title: "Schools departments and units",
                      link: "schools",
                    },
                    { title: "Campus", link: "campus" },
                    { title: "Careers", link: "careers" },
                    { title: "Our strategy", link: "our" },
                    { title: "Code of conduct", link: "code" },
                    {
                      title: "People and contact information",
                      link: "people",
                    },
                    { title: "Archives", link: "archives" },
                    { title: "Rankings", link: "rankings" },
                    {
                      title: "Library  Learning Centre",
                      link: "library",
                    },
                    {
                      title: "Sustainability",
                      link: "sustainability",
                    },
                    { title: "Management", link: "management" },
                  ],
                },
                {
                  title: "Collaboration",
                  data: [
                    {
                      title: "Collaborate with us",
                      link: "collaborate",
                    },
                    { title: "For alumni", link: "for" },
                    {
                      title: "Corporate collaboration",
                      link: "corporate",
                    },
                    {
                      title: "Entrepreneurship and innovations",
                      link: "entrepreneurship",
                    },
                    {
                      title: "International collaboration",
                      link: "international",
                    },
                    {
                      title: "Collaboration with cities and regions",
                      link: "collaboration",
                    },
                    { title: "Support us", link: "support" },
                  ],
                },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      setCurrentData((prevData) => {
                        const prevDataArray = JSON.parse(prevData);
                        if (prevDataArray.includes(item.title)) {
                          prevDataArray.splice(
                            prevDataArray.indexOf(item.title),
                            1
                          );
                          console.log(prevDataArray);
                        } else {
                          prevDataArray.push(item.title);
                        }
                        return JSON.stringify(prevDataArray);
                      })
                    }
                    className="flex justify-between items-center w-full text-[28px] leading-[33px] pr-4 pl-4 custom-shadow font-bold hover:bg-[#e3e3e3]"
                  >
                    <span className="">{item.title}</span>
                    {JSON.parse(currentData).includes(item.title) ? (
                      <img
                        className="w-8"
                        src="https://www.aalto.fi/themes/custom/aalto_aaltofi/images/icons.svg#16-minus-dark"
                        alt=""
                        srcset=""
                      />
                    ) : (
                      <img
                        className="w-8"
                        src="https://www.aalto.fi/themes/custom/aalto_aaltofi/images/icons.svg#16-plus-dark"
                        alt=""
                        srcset=""
                      />
                    )}
                  </button>
                  {JSON.parse(currentData).includes(item.title) && (
                    <div className="grid lg:grid-cols-4">
                      {item.data.map((item, index) => (
                        <Link
                          className="py-[13px] px-4 leading-4 text-[18px] underline hover:bg-[#e3e3e3]"
                          key={index}
                          href={item.link}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
