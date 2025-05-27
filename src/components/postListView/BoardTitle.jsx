import '../../Css/PostList/BoardTitle.css'

const BoardTitle = ({Posts})=>{
  return (
    <div className="BoardTitle">
      <h2>전체글보기</h2>
      <div className="wrap">
        <h4>{Posts.length}개의 글</h4>
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