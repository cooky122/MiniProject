import '../../Css/PostList/PostListAll.css'
import DateFormat from '../DateFormat'
import { Link } from 'react-router-dom';

const PostListAll = ({Posts})=>{
  return (
  <div className="wrapPostView">
    <div className="postList">
      <h2>전체글보기</h2>
      <div className="headerWrap">
        <h4>{Posts.length}개의 글</h4>
        <select name="pageNum">
          <option value="5">5개씩</option> 
          <option value="10">10개씩</option> 
          <option value="20">20개씩</option> 
        </select>
      </div>
      <table id="list">
        <tr>
          <th></th>
          <th></th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
        {Posts.map((post)=>(
          <tr key={post.post_id}>
            <td><input type="checkbox"></input></td>
            <td>{post.board_id === 1 ? "공지사항" : "자유게시판"}</td>
            {/* <td>{post.post_title}</td>  */}
            <td><Link to = {`/postview/${post.post_id}`}className="link">{post.post_title}</Link></td> 
            <td>{post.mem_id}</td>
            <td><DateFormat date={post.create_time}/></td>
            <td>{post.view_count}</td>
          </tr>
        ))}
      </table>
    </div>
    <div className="searchBar">
      <div className="wrapInput">
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
    </div>
  </div>
  );
}
export default PostListAll;