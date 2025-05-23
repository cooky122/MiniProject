import defaultImg from '../../assets/tmp.png'

const TitleView = ({posts}) =>{
  return(
    <div className="postView">
        {posts.filter((post)=> post.post_id === 2)
        .map((post)=>(
          <div key={post.post_id} {...post}>
            <div className='postTitle'>
              <button className='boardBtn'>{post.board_id === 1 ? "공지사항 >" : "자유게시판 >"}</button>
              <h1>{post.post_title}</h1>
            </div>
            <div className='minProfile'>
              <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
              <span className='profileText'>
                <p>{post.mem_id}</p>
                <p>{post.create_time} 조회 {post.view_count}</p>
              </span>
              <div className='ViewCopy'>
                <button type='button'>📑댓글 1</button>
                <button type='button'>URL 복사</button>
              </div>
            </div>
          </div>
        ))
        }
    </div>
  );
}

export default TitleView;