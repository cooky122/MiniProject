
const ContentView = ({posts}) =>{

  return(
    <div className="contentView">
      {posts.filter((post) => post.post_id === 2)
      .map((post)=>(
        <div key={post.post_id} className="postContent">
          <div className="con">내용: {post.content}</div>
        </div>
      ))}
    </div>
  );
}

export default ContentView;