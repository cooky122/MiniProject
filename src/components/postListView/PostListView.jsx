const Posts = [
  {post_id:1, board_id:1, mem_id:"user01", post_title:"사이트 오픈 공지", content:"우리 커뮤니티에 오신 것을..", create_time:<DateFormat/>, view_count:100, like_count:25, post_type:1},
  {post_id:2, board_id:2, mem_id:"user02", post_title:"오늘 뭐 먹지?", content:"점심 추천 좀 해주세요.", create_time:<DateFormat/>, view_count:45, like_count:5, post_type:0},
  {post_id:3, board_id:2, mem_id:"user03", post_title:"질문 있습니다.", content:"로그인 오류가 발생했어요.", create_time:<DateFormat/>, view_count:60, like_count:10, post_type:0},
  {post_id:4, board_id:2, mem_id:"user04", post_title:"엑셀 템플릿 공유", content:"유용한 자료 올려드립니다.", create_time:<DateFormat/>, view_count:70, like_count:18, post_type:1},
  {post_id:5, board_id:2, mem_id:"user05", post_title:"이벤트 참여해요", content:"참여 완료했습니다~", create_time:<DateFormat/>, view_count:30, like_count:3, post_type:0},
];

const PostListView = ()=>{
  return (
 <div className="wrapPostView">
      <div className="postList">
          <h2>게시판 타이틀</h2>
          <div className="headerWrap">
            <h4>게시글 수</h4>
            <select name="pageNum">
              <option value="5">5개씩</option> 
              <option value="10">10개씩</option> 
              <option value="20">20개씩</option> 
            </select>
          </div>
        <table id="postList">
          <tr>
            <td></td>
            <td></td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회수</td>
          </tr>
          <tr>
            <td><input type="checkbox"></input></td>
            <td>게시판 이름</td>
            <td>게시물 제목</td>
            <td>게시물 작성자</td>
            <td>게시물 작성일</td>
            <td>게시물 조회수</td>
          </tr>
        </table>
      </div>
      <div className="searchBar">
        <div className="wrapInput">
          <form>
            <select name="duration">
              <option value="day">1일</option>
              <option value="week">1주</option>
              <option value="month">1달</option>
            </select>
            <select name="searchType">
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="writer">글작성자</option>
            </select>
            <input type="text" name="keyword"></input>
            <input type="submit" value="검색"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PostListView;