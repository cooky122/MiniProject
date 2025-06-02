import { useState } from 'react';
import defaultImg from '../../assets/tmp.png'
import DateFormat from '../DateFormat';

const CommentView = ({comment, post, onDelete, onUpdate}) =>{
  
  const [liked, setLike] = useState(false);

  const [edited, setEdit] = useState(false);
  const [editCon, setEditCon] = useState(comment.content)
  
  const clickHeart = () => {
    setLike(!liked);
  };


  const onClickDelete = () =>{
      onDelete(comment.comment_id);
    };

  const onClickUpdate = () => {
    setEdit(true); 
  };

  const onSave = () => {
  if (editCon === comment.content) {
    setEdit(false);
    return;
    }
    onUpdate(comment.comment_id, editCon);
    setEdit(false);
  };

  const onCancel = () => { 
    setEditCon(comment.content);
    setEdit(false);
  };

  return(
    <div>
      <div className="commentView">
        <div className="comment">
          <div className='minProfile'>
            <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
            <span className='profileText'>
              <p className='userID'>{comment.mem_id} <span className='grade'>{post.mem_id === comment.mem_id ? " 작성자" : ""}</span></p>
              {edited ? (<div>
                <div className="editCommentBox">
                  <input value={editCon} onChange={(event) => setEditCon(event.target.value)}  className="editComment"/>
                  <button onClick={onSave} className='saveCancel'>저장</button>
                  <button onClick={onCancel} className='saveCancel'>취소</button>
                </div>
              </div>) : 
              (<span className="contentView">{comment.content}</span>)}
              
              <p className='Date'><DateFormat date={comment.create_time}/> 
                <span>
                  답글쓰기
                </span>
                <span onClick={clickHeart} className="commentHeart">
                  {liked ? '❤️' : '🤍'}
                </span>
                <span>
                  <button onClick={onClickUpdate} className='saveCancel'>수정</button>
                  <button onClick={onClickDelete} className='saveCancel'>삭제</button>
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