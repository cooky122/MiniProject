import { useRef, useState } from "react";

const CreateComment = ({onCreate}) =>{
  const [com,setCom] = useState("");

  const inputRef = useRef();

  const onCreateComment = (event) => {
    setCom(event.target.value)
    };
  

  const onKeyDown = (event) =>{
    if(event.keyCode === 13){
      onSubmit();
    }
  };

  const onSubmit = () =>{
    if(com === ""){
      inputRef.current.focus();
      return;
    }
    onCreate(com);
    setCom("");
  }

  return(
    <div>
      <div className="createCommentBox">
        <span>user05<br/></span>
        <input ref={inputRef} value={com} onChange={onCreateComment} onKeyDown={onKeyDown} className="createComment" placeholder="내용을 입력해 주세요"/>
        <button onClick={onSubmit} className="submitBtn">등록</button>
      </div>
    </div>
  );
}


export default CreateComment;