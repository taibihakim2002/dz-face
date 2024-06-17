import {
  Event,
  Feed,
  FileDownload,
  PeopleAlt,
  Photo,
  VideoCall,
} from "@mui/icons-material";
import "./sidebar.css";

const menu = [
  { icon: Feed, title: "اخر الاخبار", link: "#" },
  { icon: PeopleAlt, title: "الاصدقاء", link: "#" },
  { icon: Event, title: "الاحداث", link: "#" },
  { icon: VideoCall, title: "مشاهدة مقاطع فيديو", link: "#" },
  { icon: Photo, title: "صور", link: "#" },
  { icon: FileDownload, title: "ملفات", link: "#" },
];

const pages = [
  { image: "assets/post/1.jpeg", title: "تعلم البرمحة", link: "#" },
  { image: "assets/post/2.jpeg", title: "اخبار الجزائر", link: "#" },
  { image: "assets/post/3.jpeg", title: "اساسسيات التصميم", link: "#" },
  { image: "assets/post/4.jpeg", title: "web design", link: "#" },
];

const MenuItem = ({ Icon, title, link }) => (
  <a className="menu-item" href={link}>
    <Icon />
    <span>{title}</span>
  </a>
);

const PageItem = ({ image, title, link }) => (
  <a className="page-item" href={link}>
    <img className="page-image" src={image} alt={title} />
    <span>{title}</span>
  </a>
);

export default function Sidebar({ sideBarState }) {
  return (
    <div className={`sidebar-container ${sideBarState ? "open" : ""}`}>
      <div className="logo">
        <h1 className="title">ديزاد فايس</h1>
      </div>
      <div className="menu">
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            Icon={item.icon}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
      <div className="pages">
        <h3 className="pages-header">صفحات اعجبتك</h3>
        {pages.map((page, index) => (
          <PageItem
            key={index}
            image={page.image}
            title={page.title}
            link={page.link}
          />
        ))}
      </div>
    </div>
  );
}
