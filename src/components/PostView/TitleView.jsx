import defaultImg from '../../assets/tmp.png'

const TitleView = () =>{
  return(
    <div className="postView">
      <div className="postTitle">
        <h3>자유게시판</h3>
        <h1>오늘 뭐 먹지?</h1>
      </div>
      <div>
        <a href=""><img src={defaultImg} alt="기본 이미지" className="defaultImg" /></a>
          <span className='profileText'>
            <p>김민수</p>
            <span>
              <p>2025.02.16. 13:05 조회 45</p>
              <button type='button'>📑댓글 1</button>
              <button type='button'>URL 복사</button>
            </span>
          </span>
      </div>
    </div>
  );
}

export default TitleView;