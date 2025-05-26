import { Link } from 'react-router';
import defaultImg from '../../assets/tmp.png'
import DateFormat from '../DateFormat';

const TitleView = ({post,comment}) =>{

  const copyURL = (text) =>{
      navigator.clipboard.writeText(text);
      alert("복사 되었습니다.")
  };

  return(
    <div className='titleView'>
        {
          <div key={post.post_id} {...post}>
            <div className='postTitle'>
              <Link className='boardBtn' to={post.board_id === 1 ? '/1' : '/2'}>{post.board_id === 1 ? "공지사항 >" : "자유게시판 >"}</Link>
              <h1>{post.post_title}</h1>
            </div>
            <div className='minProfile'>
              <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
              <span className='profileText'>
                <p className='userID'>{post.mem_id}</p>
                <p className='Date'><DateFormat date={post.create_time}/> 조회 {post.view_count}</p>
              </span>
              <div className='ViewCopy'>
                <button type='button'>📑댓글 {comment?.length ?? 0}</button>
                <button type='button' onClick={copyURL(`http://localhost:5173/postview/${post.post_id}`)}>URL 복사</button>
              </div>
            </div>
          </div>
        
        }
    </div>
  );
}

export default TitleView;