import ProfileBox from "./ProfileBox/ProfileBox.jsx"
import BoardList from "./ListBox/boardList.jsx";

const Aside = ()=>{
  return (
    <div className="aside">
      <div className="profile">
        <ProfileBox/>
      </div>
      <div className="boardList">
        <BoardList />
      </div>
    </div>
  );
}
export default Aside;