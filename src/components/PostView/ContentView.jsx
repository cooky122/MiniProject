import { useState } from "react";

const ContentView = ({post,comment}) =>{
  const [liked,setLike] = useState(false);
  const [likeCount,setCount] = useState(post.like_count || 0);

  const clickHeart = () =>{
    if(!liked){
      setCount(count => count + 1);
    } else {
      setCount(count => count - 1);
    }
    setLike(onClick => !onClick);
  }

  return(
    <div className="contentView">
      {
        <div key={post.post_id} className="postContent">
          <div className="con">내용: {post.content}</div>
          <div>
              <div className="postInfo">
                <span onClick={clickHeart} className="commentHeart">
                  {liked ? '❤️' : '🤍'} 좋아요 {likeCount}
                </span>
                <span>
                  📑댓글 {comment.length ? comment.length : 0}
                </span>
              </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ContentView;