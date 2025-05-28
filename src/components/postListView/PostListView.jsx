import '../../Css/PostList/PostListView.css'
import BoardTitle from './BoardTitle';
import BoardContent from './BoardContent';
import PostSearch from './PostSearch';
import { useState } from 'react';

const PostListView = ({Posts, id})=>{
  const [option, setOption] = useState("");
  const 

  return (
  <div className="PostListView">
    <BoardTitle Posts={Posts} id={id}/>
    <BoardContent Posts={Posts} id={id}/>
    <PostSearch />
  </div>
  );
}
export default PostListView;