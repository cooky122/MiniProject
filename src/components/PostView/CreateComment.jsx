import { useRef, useState } from "react";

const CreateComment = ({onCreate}) =>{
  const [com,setCom] = useState("");

  const inputRef = useRef();

  const onCreateComment = (event) => {
    setCom(event.target.value)
    };
  

  const onKeyDown = (event) =>{
    if(event.keyCode === 13){
      onsubmit();
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
      <div>
        <input ref={inputRef} value={com} onChange={onCreateComment} onKeyDown={onKeyDown} />
        <button onClick={onSubmit}>등록</button>
      </div>
    </div>
  );
}


export default CreateComment;