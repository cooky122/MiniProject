import { Link, Route, Routes } from 'react-router-dom';
import PostView from "./PostView/PostView"
import PostListView from './postListView/PostListView';


const Linked = ({Posts,Comments}) =>{
  return(
    <div>
      <div className="Linked">
        <Link to = {'/'} className="link">메인&&보드 /</Link>
        <Link to = {'/postview'} className="link"> 게시글 /</Link>
        <Link to = {'/post'} className="link"> 게시글 작성</Link>
      </div>
      <hr />
      <div className="Routes">
        <Routes>
          <Route path='/' element={<PostListView/>}></Route>
          <Route path='/postview' element={<PostView Posts={Posts} Comments={Comments}/>}></Route>
          <Route path='/post'></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Linked;