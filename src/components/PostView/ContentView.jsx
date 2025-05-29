import { useState } from "react";

const ContentView = ({post,comment}) =>{
  const [liked,setLike] = useState(false);
  const [likeCount,setCount] = useState(post.like_count || 0);
  const [shareCount, setShareCount] = useState(0)

  const clickHeart = () =>{
    if(!liked){
      setCount(count => count + 1);
    } else {
      setCount(count => count - 1);
    }
    setLike(onClick => !onClick);
  }

  const sharePost = () =>{
    setShareCount(count => count + 1);
  }

  return(
    <div className="contentView">
      {
        <div key={post.post_id} className="postContent">
          <div className="con">내용: {post.content}</div>
          <div>
            <div className="postInfo">
              <div className="postHeart">
                <span onClick={clickHeart}>
                  {liked ? '❤️' : '🤍'} 좋아요 {likeCount}
                </span>
                <span>
                  📑댓글 {comment?.length ?? 0}
                </span>
              </div>
              <div className="postShare">
                <span>
                  블로그 / 카페 공유 수 {shareCount}
                </span>
                <span onClick={sharePost} className="ShareBtn">
                  📤공유
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ContentView;