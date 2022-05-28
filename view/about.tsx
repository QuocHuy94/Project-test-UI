import React, { useState } from "react";
import Image from "next/image";
import image1 from "../assets/images/about-kaSane.png";
import image2 from "../assets/images/about-kaSane-1.png";
import image3 from "../assets/images/about-kaSane-2.png";
import image4 from "../assets/images/about-kaSane-3.png";
import commentAvatarIcon from "../assets/icons/comment-avatar.svg";

const aboutList = {
  summary:
    "Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.",
  tags: [
    {
      id: "1",
      name: "Horror",
    },
    {
      id: "2",
      name: "Psychological",
    },
    {
      id: "3",
      name: "Seinen",
    },
  ],
  images: [image1, image2, image3, image4, image4],
};
const creditsList = [
  {
    avatar: commentAvatarIcon,
    title: "Kodansha",
    text: "Publisher",
  },
  {
    avatar: commentAvatarIcon,
    title: "Johnnie Christmas",
    text: "Story",
  },
  {
    avatar: commentAvatarIcon,
    title: "Jack T. Cole",
    text: "Art",
  },
];
const comicsList = [
  {
    id: "1",
    label: "Last Updated",
    content: "2 days ago",
  },
  {
    id: "2",
    label: "Origin Media",
    content: "Mature (18+)",
  },
  {
    id: "3",
    label: "Color",
    content: "Black & White",
  },
  {
    id: "4",
    label: "Origin Media",
    content: "Print",
  },
  {
    id: "5",
    label: "Style Origin",
    content: "Japanese Comics (Manga)",
  },
  {
    id: "6",
    label: "Copyright",
    content: "© Daruma Matsuura / Kodansha Ltd.",
  },
  {
    id: "7",
    label: "Other Names",
    content: "Kasane -voleuse de visage",
  },
];

const About: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      key="about"
      className={["card-about", !active && "card-about-hidden"].join(" ")}
    >
      <div className="title">{"About This"}</div>
      <div className="title-card">{"Genres"}</div>
      <div className="list-tags genres-tags">
        {aboutList.tags.map((tag, index) => (
          <>
            <div key={`tag-about-${index}`} className="tag">
              {tag.name || ""}
            </div>
            &emsp;
          </>
        ))}
      </div>
      <div className="title-card">{"Summary"}</div>
      <div className="content-summary">{aboutList.summary || ""}</div>
      {!active && (
        <div className="title-show-more" onClick={() => setActive(!active)}>
          {"Show More"}
        </div>
      )}
      <div className="list-image">
        {aboutList.images.map((item, index) => (
          <>
            <div key={`about-${index}`} className="image-about">
              <Image src={item} alt="book" className="image-about-summary" />
            </div>
          </>
        ))}
      </div>
      <div className="title-card">{"Credits"}</div>
      {creditsList.map((item, index) => (
        <div className="credits" key={`credit-${index}`}>
          <div className="avatar">
            {<Image src={item.avatar} alt="avatar" className="avatar" />}
          </div>
          <div className="info">
            <div className="content-credits">{item.title}</div>
            <div className="text-credits">{item.text}</div>
          </div>
        </div>
      ))}
      <br />
      <div className="title-card">{"Other Facts"}</div>
      {comicsList.map((item, index) => (
        <div className="ul-list" key={`comic-${index}`}>
          <div className="content-text">{item.label}</div>
          <div className="details">
            {" :  "}&ensp;
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
export default About;
