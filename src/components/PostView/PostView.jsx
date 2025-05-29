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

  // postID를 기반으로 post분류한다
  const ViewPost = Posts.find((post) => post.post_id === parseInt(postId));

  // commentID를 이용해 session에 저장한다
  const comID = `comments:${Comments.comment_id}`;

  const[comment, setCom] = useState(() => {
    //기존 useState == Comments 로 받아왔으나 session을 이용한 Comments로드로 값 변경 페이지를 불러올때 session에서 값을 받아옴 값이 없다면 이전과 동일한 Comments 배열 사용한다
    const load = sessionStorage.getItem (comID);
    return load ? JSON.parse(load) : Comments;
  });

  // 시작 comments 수를 알고있음으로 하드코딩 유연한 코딩을 원한다면 변수로 Comments.length 를 선언하고 + 1 한다면 처리가능하다
  const idRef = useRef(6);

  const onCreate = (com) =>{
    const newCom = {
      comment_id:idRef.current++,
      post_id:ViewPost.post_id,
      mem_id:"user05",  //TODO: 로그인 기능이 추가된다면 하드코딩 제외할 예정이다
      content:com,
      create_time: new Date(),
      like_count:0,
    };

    //기존 setCom([newCom,...comment]) 형식으로 늘렸으나 JSON 변환 과정에서 실수를 방지하기위해 변수로 나누었다 즉 session에선 updatedComments comment 에 OnCreate한 Comments배열이다
    const updatedComments = [newCom,...comment];

    setCom(updatedComments);

    sessionStorage.setItem(comID,JSON.stringify(updatedComments));
  }

  // post별로 분류한 comment필터 DB 기준 외래키인 post_ID 를 기반으로 comment를 받아온다
  const ViewComments = comment.filter((com) => com.post_id === parseInt(postId));
  
  return(
    <div className="postView">
      <div className="postWrapper">
        <TitleView post={ViewPost} comment={ViewComments} />
        <hr />
        <ContentView post={ViewPost} comment={ViewComments} />
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