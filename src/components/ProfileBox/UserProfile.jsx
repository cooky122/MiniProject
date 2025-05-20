import defaultImg from '../../assets/tmp.png'

const UserProfile = () =>{

    return(
        <div className="profile">
            <div className="profileHeader">
                <a href=""><img src={defaultImg} alt="기본 이미지" className="defaultImg" /></a>
                <span className='profileText'>
                    <p>김형관</p>
                    <p>2011.12.02. 가입</p>
                </span>
            </div>
            <hr />
            <p>⚜카페 매니저</p>
            <p>📅방문: 20회</p>
            <p>📄내가 쓴 게시글: 4개</p>
            <p>📑내가 쓴 댓글: 1개</p>
        </div>
    );
}


export default UserProfile;