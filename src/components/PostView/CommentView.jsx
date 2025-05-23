import defaultImg from '../../assets/tmp.png'

const CommentView = ({comments, posts}) =>{
  return(
    <div>
      {comments.filter((comment) => comment.post_id===2)
      .map((comment)=>(
        <div className="commentView">
          <div className="comment">
            <div className='minProfile'>
              <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
              <span className='profileText'>
                <p className='userID'>{comment.mem_id} {posts.mem_id === comments.mem_id ? "" : "작성자"}</p>
                <span className='contentView'>{comment.content}</span>
                <p className='Date'>{comment.create_time} </p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentView;