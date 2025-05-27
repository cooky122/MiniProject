import { Link } from 'react-router-dom';
import DateFormat from '../DateFormat'

const BoardContent = ({Posts})=>{
  return (
    <div className="BoardContent">
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
  );
}
export default BoardContent;