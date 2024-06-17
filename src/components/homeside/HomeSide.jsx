import { Search } from "@mui/icons-material";
import "./homeSide.css";
import { friends } from "../../data/friends";
const FriendItem = ({ image, name, lastSeen }) => {
  return (
    <div className="friend-item">
      <div className="friend">
        <img src={image} alt={name} />
        <span>{name}</span>
      </div>
      {lastSeen === 0 ? (
        <div className="active-user"></div>
      ) : (
        <div className="state">{`${lastSeen} د`}</div>
      )}
    </div>
  );
};
export default function HomeSide({ setChatBox }) {
  return (
    <div className="homeside-container">
      <div className="search">
        <Search />
        <input type="text" placeholder="بحث" />
      </div>
      <div className="friends">
        <h3 className="friends-header">الاصدقاء</h3>
        {friends.map((ele, index) => (
          <button
            className="friend-item-container"
            onClick={() => {
              setChatBox(ele.id);
            }}
          >
            <FriendItem
              key={index}
              image={ele.image}
              name={ele.name}
              lastSeen={ele.lastSeen}
              setChatBox={setChatBox}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
