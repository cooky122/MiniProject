import '../../Css/PostList/PostListView.css'
import BoardTitle from './BoardTitle';
import BoardContent from './BoardContent';
import PostSearch from './PostSearch';
import { useState, useEffect } from 'react';

const PostListView = ({ Posts, id }) => {
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");
  const [postCount, setPostCount] = useState(0);

  const changeDuration = (e) => {
    setDuration(e.target.value);
  };

  const changeType = (e) => {
    setType(e.target.value);
  };

  
  useEffect(() => {
    // 검색어, 기간, 타입에 따른 필터링 로직 추가 가능
  }, [duration, type, keyword, Posts]);

  return (
    <div className="PostListView">
      <BoardTitle Posts={Posts} id={id} postCount={postCount} />
      <BoardContent Posts={Posts} id={id} duration={duration} type={type} keyword={keyword} setPostCount={setPostCount} />
      <PostSearch
        duration={duration}
        type={type}
        changeDuration={changeDuration}
        changeType={changeType}
        setKeyword={setKeyword}
      />
    </div>
  );
};

export default PostListView;
