import '../../Css/PostList/PostListView.css'
import BoardTitle from './BoardTitle';
import BoardContent from './BoardContent';
import PostSearch from './PostSearch';
import { useState } from 'react';

const PostListView = ({Posts, id})=>{
  const [duration, setDuration] = useState("year");
  const [type, setType] = useState("title");
  const [inputValue, setInputValue] = useState("");

  const changeDuration = (e)=>{
    setDuration(e.target.value);
  } 
  const changeType = (e)=>{
    setType(e.target.value);
  }
  return(
    <div className="PostListView">
      <BoardTitle Posts={Posts} id={id} />
      <BoardContent Posts={Posts} id={id} duration={duration} type={type} keyword={inputValue}/>
      <PostSearch duration={duration} type={type} 
      searchDuration={changeDuration} searchType={changeType}
      setKeyword={setInputValue}/>
    </div>
  );
}
export default PostListView;