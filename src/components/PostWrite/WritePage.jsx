import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Css/PostWrite/WritePage.css';

function WritePage() {
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

    // 1. 기존에 저장된 게시글 배열 가져오기
    let posts = JSON.parse(sessionStorage.getItem('posts')) || [];

    // 2. 새 게시글 객체 만들기 (post_id는 임의로 1씩 증가시키기)
    const newPost = {
      post_id: posts.length + 1, // 간단하게 배열 길이 + 1
      board_id: parseInt(board),  // 숫자형으로 변환
      post_title: title,
      content: content,
      mem_id: "user10",             // 세션 로그인 연동 없으니 임시 작성자
      create_time: new Date(),
      view_count: 0
    };

    // 3. 새 게시글을 배열에 추가
    posts.push(newPost);

    // 4. 다시 세션에 저장
    sessionStorage.setItem('posts', JSON.stringify(posts));

    alert('등록 완료!');

    // 5. 해당 게시판으로 이동
    navigate(`/${board}`);
  };

  return (
    <div className="box">
      <h2>카페 글쓰기</h2>

      <div className="select-row">
        <select value={board} onChange={(e) => setBoard(e.target.value)}>
          <option value="">게시판 선택</option>
          <option value="1">공지사항</option>
          <option value="2">자유게시판</option>
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
