import React from "react";
import ContactWr from "./wrapper";

const Contact = () => {
  const links = [
    {
      title: "Telegram",
      link: "https://t.me/software_engeneer",
    },
    {
      title: "Email",
      link: "wizardboydostonjon@gmail.com",
    },
    {
      title: "Github",
      link: "https://github.com/IamItachiUchiha",
    },
    {
      title: "Telegram channel",
      link: "https://t.me/web_dev_academy",
    },
    {
      title: "Phone number",
      link: "tel: +998914188382",
    },
  ];
  return (
      <ContactWr>
        <h1>Some links</h1>

        <div className="links">
          {links.map((v, i) => (
              // eslint-disable-next-line react/jsx-key
              <a href={v.link} target="_blank" rel="noreferrer">
                <div className="skill">{v.title}</div>
              </a>
          ))}
        </div>
      </ContactWr>
  );
};

export default Contact;