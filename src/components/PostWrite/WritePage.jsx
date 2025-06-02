import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Css/PostWrite/WritePage.css';

function WritePage({ Posts, setPosts, Boards }) {
  const [board, setBoard] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (!board || !title || !content) {
      alert('모두 입력해 주세요!');
      return;
    }

    const newPost = {
      // 기존 Posts가 있으면 마지막 post_id +1, 없으면 1부터 시작
      post_id: Posts.length > 0 ? Posts[Posts.length -1].post_id + 1 : 1, 
      board_id: parseInt(board),
      post_title: title,
      content: content,
      mem_id: "user10",  // 임시 작성자
      create_time: new Date(),
      view_count: 0,
      like_count: 0,
      post_type: 0
    };

    // 새 게시글 상태 업데이트
    setPosts([...Posts, newPost]);

    alert('등록 완료!');

    navigate(`/${board}`);
  };

  return (
    <div className="box">
      <h2>카페 글쓰기</h2>

      <div className="select-row">
        <select value={board} onChange={(e) => setBoard(e.target.value)}>
          <option value="">게시판 선택</option>
          {Boards.map(b => (
            <option key={b.board_id} value={b.board_id}>{b.board_title}</option>
          ))}
        </select>
      </div>

      <div className="input-row">
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="textarea-row">
        <textarea
          placeholder="내용을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button onClick={handleClick}>등록</button>
    </div>
  );
}

export default WritePage;
