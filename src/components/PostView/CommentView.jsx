import defaultImg from '../../assets/tmp.png'
import DateFormat from '../DateFormat';

const CommentView = ({comments, posts}) =>{
  return(
    <div>
      {comments.filter((comment) => comment.post_id===2)
      .map((comment)=>(
        <div className="commentView" key={comment.comment_id}>
          <div className="comment">
            <div className='minProfile'>
              <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
              <span className='profileText'>
                <p className='userID'>{comment.mem_id} {posts.mem_id === comment.mem_id ? " 작성자" : ""}</p>
                <span className='contentView'>{comment.content}</span>
                <p className='Date'><DateFormat date={comment.create_time}/> </p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentView;