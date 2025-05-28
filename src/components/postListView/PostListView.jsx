import '../../Css/PostList/PostListView.css'
import BoardTitle from './BoardTitle';
import BoardContent from './BoardContent';
import PostSearch from './PostSearch';


const PostListView = ({Posts, id})=>{
  return (
  <div className="PostListView">
    <BoardTitle Posts={Posts} id={id}/>     
    <BoardContent Posts={Posts} />
    <PostSearch />
  </div>
  );
}
export default PostListView;