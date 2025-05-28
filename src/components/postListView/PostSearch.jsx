
import '../../Css/PostList/PostSearch.css'
const PostSearch = ()=>{
  return (
    <div className="PostSearch">
      <form>
        <select name="duration">
          <option value="day">1일</option>
          <option value="week">1주</option>
          <option value="month">1달</option>
        </select>
        <select name="searchType">
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="writer">글작성자</option>
        </select>
        <input type="text" name="keyword"></input>
        <input type="submit" value="검색"></input>
      </form>
    </div>
  );
}
export default PostSearch;