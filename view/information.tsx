import React from "react";
import Image from "next/image";
import ImageKaSane from "../assets/images/kasane.png";
import bookIcon from "../assets/icons/book.svg";
import likeIcon from "../assets/icons/like.svg";
import { ShareAltOutlined, MoreOutlined } from "@ant-design/icons";

const information = {
  image: ImageKaSane,
  title: "Kasane",
  author: "By Kodansha",
  page: "Drama • 10 Chapters",
  read: "74,483",
  like: "15,863",
  tags: [
    {
      id: "1",
      name: "18+",
    },
    {
      id: "2",
      name: "NEW",
    },
    {
      id: "3",
      name: "TRENDING",
    },
    {
      id: "4",
      name: "BESTSELLER",
    },
    {
      id: "5",
      name: "MANGA",
    },
  ],
};

const Information: React.FC = () => {
  return (
    <div key="information" className="card-info">
      <div className="image-comics">
        <Image src={ImageKaSane} alt="image" className="image-card" />
      </div>
      <div className="info-comics">
        <div className="title">{information.title || ""}</div>
        <div className="author">{information.author || ""}</div>
        <div className="page">{information.page || ""}</div>
        <div className="list-read-and-like">
          <Image src={bookIcon} alt="book" className="image-book" />
          &ensp;
          <span className="count">{information.read}</span>&emsp;
          <Image src={likeIcon} alt="like" className="image-like" />
          &ensp;
          <span className="count">{information.like}</span>
        </div>
        <div className="list-tags">
          {information.tags.map((tag) => (
            <>
              <div key={`information-tags-${tag.id}`} className="tag">
                {tag.name || ""}
              </div>
              &emsp;
            </>
          ))}
        </div>
        <div className="btn-read">{"Read First Chapter for FREE"}</div>
        <div className="list-btn">
          <ShareAltOutlined
            size={14}
            style={{
              padding: "4px",
              marginRight: "8px",
              cursor: "pointer",
              borderRadius: "8px",
              border: "1px solid #434343"
            }}
          />
          <MoreOutlined
            size={14}
            style={{
              padding: "4px",
              cursor: "pointer",
              borderRadius: "8px",
              border: "1px solid #434343"
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Information;
