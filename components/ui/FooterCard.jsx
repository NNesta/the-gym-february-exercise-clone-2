import React from "react";
import Link from "next/link";

const FooterCard = ({ title, contents }) => {
  return (
    <div>
      <h1 className="text-[21px] leading-[25px] mb-2">{title}</h1>
      <ul className="flex flex-col gap-2">
        {contents.map((item, index) => (
          <li key={index}>
            <Link
              className="leading-[19px] underline hover:bg-[#e3e3e3]"
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
