import ContentView from "./ContentView";
import TitleView from "./TitleView";
import CommentView from "./CommentView";
import CreateComment from "./CreateComment";
import PostFooter from "./PostFooter";
import DateFormat from "../DateFormat";
import '../../Css/minProfile.css';
import '../../Css/PostView.css'
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
      create_time: <DateFormat/>
    };

    setCom([newCom,...comment])
  }
  

  return(
    <div>
      <div className="contentWrapper">
        <TitleView posts={Posts} />
        <ContentView posts={Posts}/>
      </div>
      <div className="commentWrapper">
        <CommentView comments={Comments}/>
        <CreateComment onCreate={onCreate}/>
      </div>
      <PostFooter/>
    </div>
  );
}

export default PostView;