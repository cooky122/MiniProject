import ContentView from "./ContentView";
import TitleView from "./TitleView";
import CommentView from "./CommentView";
import CreateComment from "./CreateComment";
import PostFooter from "./PostFooter";
import '../../Css/minProfile.css';
import '../../Css/PostView.css'
import '../../Css/Comment/Comment.css'
import { useRef, useState } from "react";



const PostView = ({Posts, Comments}) =>{
  const[comment, setCom] = useState(Comments);

  const idRef = useRef(6);

  const onCreate = (com) =>{
    const newCom = {
      comment_id:idRef.current++,
      post_id:2,
      mem_id:"user05",
      content:com,
      create_time: new Date()
    };

    setCom([newCom,...comment])
  }
  

  return(
    <div>
      <div className="postWrapper">
        <TitleView posts={Posts} />
        <hr />
        <ContentView posts={Posts}/>
      </div>
      <div className="commentWrapper">
        <CommentView comments={comment} posts={Posts}/>
        <CreateComment onCreate={onCreate}/>
      </div>
      <PostFooter/>
    </div>
  );
}

export default PostView;