import ContentView from "./ContentView";
import TitleView from "./TitleView";
import CommentView from "./CommentView";
import CreateComment from "./CreateComment";
import PostFooter from "./PostFooter";

const PostView = () =>{

  return(
    <div>
      <TitleView/>
      <ContentView/>
      <CommentView/>
      <CreateComment/>
      <PostFooter/>
    </div>
  );
}

export default PostView;