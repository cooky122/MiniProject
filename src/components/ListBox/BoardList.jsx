import '../../Css/listBox.css';
import { Link } from 'react-router-dom';

const BoardList = ()=>{
  return (
    <div className="listContainer">
      <Link to ="/write">
      <input type='button' name='writePage' value='카페 글쓰기'/>
      </Link>
      <ul>
        <li><Link to ={'/1'}>공지사항</Link></li>
        <hr/>
        <li><Link to ={'/2'}>자유게시판</Link></li>
      </ul>
    </div>
  );
}

export default BoardList;