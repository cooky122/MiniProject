import '../../Css/listBox.css';
import { Link } from 'react-router-dom';

const BoardList = ()=>{
  return (
    <div className="listContainer">
      <input type='button' name='writePost' value='카페 글쓰기'/>
      <ul>
        <li><Link to ={'/1'}>공지사항</Link></li>
        <hr/>
        <li><Link to ={'/2'}>자유게시판</Link></li>
      </ul>
    </div>
  );
}

export default BoardList;