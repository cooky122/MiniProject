import { useState } from 'react';
import defaultImg from '../../assets/tmp.png'
import DateFormat from '../DateFormat';

const CommentView = ({comment, post}) =>{
    const [liked,setLike] = useState(false);
    const [likeCount,setCount] = useState(comment.like_count || 0);
  
    const clickHeart = () =>{
      if(!liked){
        setCount(count => count + 1);
      } else {
        setCount(count => count - 1);
      }
      setLike(onClick => !onClick);
    }
  return(
    <div>
      {comment.map((comment) => (
        <div className="commentView">
          <div className="comment">
            <div className='minProfile'>
              <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
              <span className='profileText'>
                <p className='userID'>{comment.mem_id} {post.mem_id === comment.mem_id ? " 작성자" : ""}</p>
                <span className='contentView'>{comment.content}</span>
                <p className='Date'><DateFormat date={comment.create_time}/> 
                  <span onClick={clickHeart} className="commentHeart">
                    {liked ? '❤️' : '🤍'} 좋아요 {likeCount}
                  </span>
                </p>
                
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentView;