import { Link } from 'react-router-dom';
import DateFormat from '../DateFormat'
import '../../Css/PostList/BoardContent.css'

const BoardContent = ({Posts, id, duration, type, keyword})=>{
  console.log(duration);  //year
  console.log(type);  //title
  console.log(keyword);

  if(id !== 0){
    Posts = Posts.filter((post)=>post.board_id === id)
  }
  
  if(keyword !== ""){
    switch (type) {
      case "post_title":
        Posts = Posts.filter((post)=>post.post_title.includes(keyword))
        break;
      case "content":
        Posts = Posts.filter((post)=>post.content.toLowerCase().includes(keyword.toLowerCase()))
        break;
      case "mem_id":
        Posts = Posts.filter((post)=>post.mem_id.toLowerCase().includes(keyword.toLowerCase()))
        break;
    }
  }
  console.log(Posts);
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