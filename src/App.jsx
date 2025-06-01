import './App.css'
import Header from './components/Header';
import Aside from './components/Aside';
import PostListView from './components/postListView/PostListView';
import PostView from './components/PostView/PostView';
import WritePage from './components/PostWrite/WritePage';
// import Main from './components/Main';
import Footer from './components/Footer';
import Linked from './components/Linked';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

const initialBoards = [
  {board_id: 1, mem_id: "user01", board_title: "공지사항", board_createdate: "2025-01-02 10:30:00" },
  {board_id: 2, mem_id: "user01", board_title: "자유게시판", board_createdate: "2025-02-16 12:00:00" },
];

const initialPosts = [
  {post_id:1, board_id:1, mem_id:"user01", post_title:"사이트 오픈 공지", content:"우리 커뮤니티에 오신 것을..", create_time:new Date(), view_count:100, like_count:25, post_type:1},
  {post_id:2, board_id:2, mem_id:"user02", post_title:"오늘 뭐 먹지?", content:"점심 추천 좀 해주세요.", create_time:new Date(), view_count:45, like_count:5, post_type:0},
  {post_id:3, board_id:2, mem_id:"user03", post_title:"질문 있습니다.", content:"로그인 오류가 발생했어요.", create_time:new Date(), view_count:60, like_count:10, post_type:0},
  {post_id:4, board_id:2, mem_id:"user04", post_title:"엑셀 템플릿 공유", content:"유용한 자료 올려드립니다.", create_time:new Date(), view_count:70, like_count:18, post_type:1},
  {post_id:5, board_id:2, mem_id:"user05", post_title:"이벤트 참여해요", content:"참여 완료했습니다~", create_time:new Date(), view_count:30, like_count:3, post_type:0},
];

const initialComments = [
  {comment_id:1, post_id:1, mem_id:"user02", content:"축하드립니다!", create_time:new Date(), like_count: 10},
  {comment_id:2, post_id:2, mem_id:"user03", content:"저는 김치찌개 추천이요.", create_time:new Date(), like_count: 2},
  {comment_id:3, post_id:3, mem_id:"user04", content:"고객센터에 문의해보세요.", create_time:new Date(), like_count: 5},
  {comment_id:4, post_id:4, mem_id:"user05", content:"좋은 자료 감사합니다.", create_time:new Date(), like_count: 7},
  {comment_id:5, post_id:5, mem_id:"user01", content:"참여 감사합니다!", create_time:new Date(), like_count: 1},
];

function App() {

  // sessionStorage에 저장된 'Posts' 있으면 불러오고, 없으면 초기값 사용
  const [Posts, setPosts] = useState(() => {
    const saved = sessionStorage.getItem('Posts');
    return saved ? JSON.parse(saved) : initialPosts;
  });

   // sessionStorage에서 불러오고 없으면 초기값 사용
  const [Comments, setComments] = useState(() => {
    const saved = sessionStorage.getItem('Comments');
    return saved ? JSON.parse(saved) : initialComments;
  });

  const Boards = initialBoards;

  // Posts 상태가 바뀔 때마다 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem('Posts', JSON.stringify(Posts));
  }, [Posts]);

  // Comments 상태가 변하면 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem('Comments', JSON.stringify(Comments));
  }, [Comments]);

  return (
    <div className='App'>
      <Header />
      <div className="wrap">
        <Aside />
        <div className='main'>
          <Routes>
            <Route path='/' element={<PostListView Posts={Posts} id={0} />} />
            <Route path='/1' element={<PostListView Posts={Posts} id={1} />} />
            <Route path='/2' element={<PostListView Posts={Posts} id={2} />} />
            <Route path='/postview/:postId' element={<PostView Posts={Posts} Comments={Comments} setComments={setComments} />} />
            <Route path='/write' element={<WritePage Posts={Posts} setPosts={setPosts} Boards={Boards} />} />
          </Routes>  
        </div>
      </div>
      <Footer />
      <Linked Posts={Posts} Comments={Comments} />
    </div>
  );
}

export default App;
