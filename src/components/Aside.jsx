import ProfileBox from "./ProfileBox/ProfileBox.jsx"
const Aside = ()=>{
  return (
    <>
      <div className="profile">
        <ProfileBox/>
      </div>
      <div className="boardList">
        <h2>boardList 부분</h2>
      </div>
    </>
  );
}
export default Aside;