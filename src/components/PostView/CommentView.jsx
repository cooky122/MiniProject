import defaultImg from '../../assets/tmp.png'

const CommentView = ({comments}) =>{
  return(
    <div>
      {comments.filter((comment) => comment.post_id===2)
      .map((comment)=>(
        <div className="commentView">
          <div className="comment">
            <div className='minProfile'>
              <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
              <span className='profileText'>
                <p>{comment.mem_id}</p>
                <span className='contentView'>{comment.content}</span>
                <span className='commentFooter'>
                  <p>{comment.create_time} </p>
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentView;