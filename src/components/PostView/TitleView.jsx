import defaultImg from '../../assets/tmp.png'

const TitleView = ({posts}) =>{
  return(
    <div className="postView">
        {posts.filter((post)=> post.post_id === 2)
        .map((post)=>(
          <div key={post.post_id} {...post}>
            <div className='postTitle'>
              <h3>{post.board_id === 1 ? "공지사항" : "자유게시판"}</h3>
              <h1>{post.post_title}</h1>
            </div>
            <div className='minProfile'>
              <a href=""><img src={defaultImg} alt="기본 프로필" className='minImg' /></a>
              <span className='profileText'>
              <p>{post.mem_id}</p>
              <span>
                <p>{post.create_time} 조회 {post.view_count}</p>
                <button type='button'>📑댓글 1</button>
                <button type='button'>URL 복사</button>
              </span>
              </span>
            </div>
          </div>
        ))
        }
    </div>
  );
}

export default TitleView;