import React, { useState } from 'react';
import '../../Css/PostWrite/WritePage.css'; 

function WritePage() {
  const [board, setBoard] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClick = () => {
    if (!board || !title || !content) {
      alert('모두 입력해 주세요!');
      return;
    }

    console.log('게시판:', board);
    console.log('제목:', title);
    console.log('내용:', content);
    alert('등록 완료!');
  };

  return (
    <div className="box">
      <h2>카페 글쓰기</h2>

      {/* 게시판 선택 라인 */}
      <div className="select-row">
        <select value={board} onChange={(e) => setBoard(e.target.value)}>
          <option value="">게시판 선택</option>
          <option value="daily">자유게시판</option>
          <option value="notice">공지사항</option>
        </select>
      </div>

      {/* 제목 입력 */}
      <div className="input-row">
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 내용 입력 */}
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
