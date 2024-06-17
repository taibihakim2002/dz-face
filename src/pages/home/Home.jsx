import {
  Call,
  Close,
  VideoCall,
  Mic,
  Description,
  Comment,
  Favorite,
  SentimentSatisfied,
} from "@mui/icons-material";
import HomeSide from "../../components/homeside/HomeSide";
import "./home.css";
import { useState } from "react";
import { friends } from "../../data/friends";
const newse = [
  {
    image: "/assets/post/6.jpeg",
    userName: "محمد سايس",
    userImage: "/assets/person/1.jpeg",
    stats: {
      likes: 120,
      comments: 45,
    },
    hashtags: ["#news", "#update", "#story"],
    description:
      "This is the description for the first news item. It contains some details about the news.",
  },
  {
    image: "/assets/post/1.jpeg",
    userName: "احمد بن صالح",
    userImage: "/assets/person/2.jpeg",
    stats: {
      likes: 89,
      comments: 30,
    },
    hashtags: ["#news", "#breaking", "#headline"],
    description:
      "This is the description for the second news item. It highlights important events.",
  },
  {
    image: "/assets/post/2.jpeg",
    userName: "ياسين رمضان",
    userImage: "/assets/person/3.jpeg",
    stats: {
      likes: 150,
      comments: 65,
    },
    hashtags: ["#news", "#update", "#live"],
    description:
      "This is the description for the third news item. It provides insights on recent activities.",
  },
  {
    image: "/assets/post/3.jpeg",
    userName: "مصطفي لحسن",
    userImage: "/assets/person/4.jpeg",
    stats: {
      likes: 110,
      comments: 25,
    },
    hashtags: ["#news", "#update", "#breakingnews"],
    description:
      "This is the description for the fourth news item. It covers the latest updates.",
  },
  {
    image: "/assets/post/4.jpeg",
    userName: "رفيدة الغانم",
    userImage: "/assets/person/5.jpeg",
    stats: {
      likes: 135,
      comments: 40,
    },
    hashtags: ["#news", "#headline", "#story"],
    description:
      "This is the description for the fifth news item. It discusses key points and details.",
  },
];

const stories = [
  {
    storyImage: "/assets/post/1.jpeg",
    userImage: "/assets/person/1.jpeg",
    userName: "محمد سايس",
  },
  {
    storyImage: "/assets/post/2.jpeg",
    userImage: "/assets/person/2.jpeg",
    userName: "احمد بن صالح",
  },
  {
    storyImage: "/assets/post/3.jpeg",
    userImage: "/assets/person/3.jpeg",
    userName: "ياسين رمضان",
  },
];
const Story = ({ storyImage, userImage, userName }) => {
  return (
    <a href="#" className="story">
      <div className="story-image">
        <img src={storyImage} alt={userName} />
      </div>

      <div className="user">
        <img src={userImage} />
        <span>{userName}</span>
      </div>
    </a>
  );
};
function handleLike(e) {
  e.currentTarget.classList.toggle("liked");
  if (e.currentTarget.classList.contains("liked")) {
    e.currentTarget.nextElementSibling.innerHTML++;
  } else {
    e.currentTarget.nextElementSibling.innerHTML--;
  }
}
const News = ({
  image,
  userImage,
  userName,
  hashtags,
  description,
  likes,
  comments,
}) => {
  return (
    <div className="news">
      <div className="cover">
        <img src={image} alt={userName} />
      </div>
      <div className="info">
        <div className="user">
          <img src={userImage} alt={userName} />
          <span>{userName}</span>
        </div>
        <div className="stats">
          <div className="likes">
            <button className="icon" onClick={(e) => handleLike(e)}>
              <Favorite />
            </button>
            <span>{likes}</span>
          </div>
          <div className="comments">
            <button className="icon">
              <Comment />
            </button>
            <span>{comments}</span>
          </div>
        </div>
      </div>
      <div className="hashtags">
        {hashtags.map((ele, index) => (
          <span key={index}> {ele}</span>
        ))}
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

const UserInfo = ({ id, setChatBox }) => {
  const friend = friends.find((ele) => ele.id === id);

  return (
    <div className="user-info">
      <div className="user-section">
        <div className="image">
          <img src={friend.image} alt="" />
        </div>
        <div className="user-data">
          <span className="name">{friend.name}</span>
          {friend.lastSeen === 0 ? (
            <span className="last-seen-online">اونلاين</span>
          ) : (
            <span className="last-seen">{friend.lastSeen} د</span>
          )}
        </div>
      </div>

      <div className="actions">
        <button>
          <Call />
        </button>
        <button>
          <VideoCall />
        </button>
        <button
          onClick={() => {
            setChatBox(null);
          }}
        >
          <Close />
        </button>
      </div>
    </div>
  );
};
export default function Home() {
  const [chatBox, setChatBox] = useState(null);

  return (
    <>
      <div className="home">
        <div className="main">
          <div className="stories">
            <h3 className="stories-header">القصص</h3>
            <div className="stories-list">
              {stories.map((ele, index) => (
                <Story
                  key={index}
                  storyImage={ele.storyImage}
                  userImage={ele.userImage}
                  userName={ele.userName}
                />
              ))}
            </div>
          </div>
          <div className="posts">
            <h3 className="posts-header">اخر الاخبار</h3>
            <div className="news-list">
              {newse.map((ele, index) => (
                <News
                  key={index}
                  image={ele.image}
                  userImage={ele.userImage}
                  userName={ele.userName}
                  hashtags={ele.hashtags}
                  description={ele.description}
                  likes={ele.stats.likes}
                  comments={ele.stats.comments}
                />
              ))}
            </div>
          </div>
        </div>

        <HomeSide setChatBox={setChatBox} />
        {chatBox && (
          <div className="chatbox">
            <UserInfo id={chatBox} setChatBox={setChatBox} />
            <div className="chat-box"></div>
            <div className="message-box">
              <button className="message-icon">
                <Description />
              </button>
              <input
                className="message-field"
                type="text"
                placeholder="اكتب رسالة"
              />
              <button className="message-icon">
                <Mic />
              </button>
              <button className="message-icon">
                <SentimentSatisfied />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
