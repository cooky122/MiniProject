import '../../Css/PostList/PostListView.css'
import BoardTitle from './BoardTitle';
import BoardContent from './BoardContent';
import PostSearch from './PostSearch';
import { useState } from 'react';

const PostListView = ({Posts, id})=>{
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");
  const [postCount, setPostCount] = useState(0);


  const changeDuration = (e)=>{
    setDuration(e.target.value);
  } 
  const changeType = (e)=>{
    setType(e.target.value);
  }

  console.log("duration: " + duration);  //year
  console.log("type: " + type);  //title
  console.log("검색어: "+ keyword);

  return(
    <div className="PostListView">
      <BoardTitle Posts={Posts} id={id} postCount={postCount}/>
      <BoardContent Posts={Posts} id={id} duration={duration} type={type} keyword={keyword} setPostCount={setPostCount}/>
      <PostSearch duration={duration} type={type} 
      changeDuration={changeDuration} changeType={changeType}
      setKeyword={setKeyword}/>
    </div>
  );
}
export default PostListView;