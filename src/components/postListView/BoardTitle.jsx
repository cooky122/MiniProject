import '../../Css/PostList/BoardTitle.css'

const BoardTitle = ({id, postCount})=>{
  let boardName;

  switch (id) {
    case 1:
      boardName = "공지사항";
      break;
    case 2:
      boardName = "자유게시판";
      break;
    default:
      boardName = "전체글보기"
      break;
  }

  return (
    <div className="BoardTitle">
      <h2>{boardName}</h2>
      <div className="wrap">
        <h4>{postCount}개의 글</h4>
        <select name="pageNum">
          <option value="5">5개씩</option> 
          <option value="10">10개씩</option> 
          <option value="20">20개씩</option> 
        </select>
      </div>
    </div>
  );
}
export default BoardTitle;