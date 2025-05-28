
import '../../Css/PostList/PostSearch.css'

const PostSearch = ({duration, type, searchDuration, searchType, setKeyword})=>{
  const handleKeyword = (e)=>{
    setKeyword(e.target.value);
  }
  
  return (
    <div className="PostSearch">
      <select name="duration" value={duration} onChange={searchDuration}>
        <option value={"day"}>1일</option>
        <option value={"month"}>1달</option>
        <option value={"year"}>1년</option>
      </select>
      <select name="searchType" value={type} onChange={searchType}>
        <option value={"post_title"}>제목</option>
        <option value={"content"}>내용</option>
        <option value={"mem_id"}>글작성자</option>
      </select>
      <form onSubmit={handleKeyword}>
        <input type="text" name="keyword"></input>
        <input type="submit" value="검색"></input>
      </form>
    </div>
  );
}
export default PostSearch;