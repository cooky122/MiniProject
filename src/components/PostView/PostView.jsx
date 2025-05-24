import ContentView from "./ContentView";
import TitleView from "./TitleView";
import CommentView from "./CommentView";
import CreateComment from "./CreateComment";
import PostFooter from "./PostFooter";
import '../../Css/Profile/minProfile.css';
import '../../Css/Post/PostView.css'
import '../../Css/Post/titleView.css'
import '../../Css/Comment/Comment.css'
import { useRef, useState } from "react";
import { useParams } from "react-router";



const PostView = ({Posts, Comments}) =>{
  const { postId } = useParams();

  const ViewPost = Posts.find((post) => post.post_id === parseInt(postId));

  const[comment, setCom] = useState(Comments);

  const idRef = useRef(6);

  const onCreate = (com) =>{
    const newCom = {
      comment_id:idRef.current++,
      post_id:ViewPost.post_id,
      mem_id:"user05",
      content:com,
      create_time: new Date()
    };
    setCom([newCom,...comment]);
  }

  const ViewComments = comment.filter((com) => com.post_id === parseInt(postId));
  
  return(
    <div className="postView">
      <div className="postWrapper">
        <TitleView post={ViewPost} />
        <hr />
        <ContentView post={ViewPost} />
      </div>
      <div className="commentWrapper">
        <CommentView post={ViewPost} comment={ViewComments}/>
        <CreateComment onCreate={onCreate}/>
      </div>
      <PostFooter/>
    </div>
  );
}

export default PostView;