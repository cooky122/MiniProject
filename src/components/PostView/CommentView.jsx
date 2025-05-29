import { useState } from 'react';
import defaultImg from '../../assets/tmp.png'
import DateFormat from '../DateFormat';

const CommentView = ({comment, post, onDelete}) =>{
    const [liked,setLike] = useState();

    const [likeCount,setLikeCount] = useState(comment.like_count);
  
    const clickHeart = () =>{
      if(!liked){
      setLikeCount(count => count + 1);
    } else {
      setLikeCount(count => count - 1);
    }
      setLike(onClick => !onClick);
      
      sessionStorage.setItem(comment,JSON.stringify(likeCount))
      
    };


    const onClickDelete = () =>{
      onDelete(comment.comment_id)
    };

  return(
    <div>
      <div className="commentView">
        <div className="comment">
          <div className='minProfile'>
            <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
            <span className='profileText'>
              <p className='userID'>{comment.mem_id} <span className='grade'>{post.mem_id === comment.mem_id ? " 작성자" : ""}</span></p>
              <span className='contentView'>{comment.content}</span>
              <p className='Date'><DateFormat date={comment.create_time}/> 
                <span>
                  답글쓰기
                </span>
                <span onClick={clickHeart} className="commentHeart">
                  {liked ? '❤️' : '🤍'}
                </span>
                <span>
                  <button onClick={onClickDelete}>삭제</button>
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentView;