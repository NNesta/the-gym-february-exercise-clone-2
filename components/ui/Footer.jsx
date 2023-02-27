import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { ImFacebook2, ImTwitter, ImLinkedin2, ImYoutube } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiSnapchatFill } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Logo from "./Logo";
import FooterCard from "./FooterCard";
import Button from "./Button";

const Footer = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-4 justify-between border-b-2 ">
        <div>
          <Logo />
          <div>
            <span>Aalto University</span>
            <span>P.O. Box 11000 (Otakaari 1B)</span>
            <span>FI-00076 AALTO</span>
            <span>Switchboard: +358 9 47001</span>
          </div>
          <p>Follow us:</p>
          <div className="flex gap-4">
            <ImFacebook2 />
            <ImLinkedin2 />
            <ImTwitter />
            <AiOutlineInstagram />
            <ImYoutube />
            <RiSnapchatFill />
            <HiOutlinePencilAlt />
          </div>
        </div>
        <div>
          <FooterCard
            title="Quicklinks"
            contents={[
              {
                title: "Research and artistic outputs",
                link: "research",
              },
              {
                title: "Library  Learning Centre",
                link: "library",
              },
              { title: "Admissions", link: "admissions" },
              { title: "Alumni", link: "alumni" },
              { title: "Media", link: "media" },
              { title: "IT services", link: "it" },
              { title: "Open University", link: "open" },
              { title: "Aalto University Shop", link: "aalto" },
            ]}
          />
          <FooterCard
            title="Latest"
            contents={[
              { title: "News", link: "news" },
              { title: "Events", link: "events" },
              { title: "Careers", link: "careers" },
            ]}
          />
        </div>
        <div>
          <FooterCard
            title="Contact"
            contents={[
              { title: "Campus maps", link: "campus" },
              { title: "Contact information", link: "contact" },
            ]}
          />
          <FooterCard
            title="For students
"
            contents={[
              { title: "Student Guide", link: "student" },
              { title: "Webmail", link: "webmail" },
              { title: "MyCourses", link: "mycourses" },
              { title: "MyStudies", link: "mystudies" },
              { title: "Sisu", link: "sisu" },
            ]}
          />
        </div>

        <div>
          <h1>Together towards a better world.</h1>
          <p>
            Support new ideas, research, work and leadership development towards
            a stronger Finland.
          </p>
          <Button link="donate">Donate to Aalto University</Button>
        </div>
      </div>
      <div className="mt-4">
        <ul className="flex gap-2">
          {[
            { title: "Privacy notice", link: "privacy" },
            { title: "Cookie policy", link: "cookie" },
            { title: "Feedback", link: "feedback" },
            {
              title: "Accessibility statement",
              link: "accessibility",
            },
            { title: "Cookie settings", link: "cookie" },
          ].map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Footer;
