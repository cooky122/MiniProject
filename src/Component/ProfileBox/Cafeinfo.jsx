import defaultImg from '../../assets/tmp.png'

const Cafeinfo = () =>{
    return(
        <div className="profile">
            <div className="profileHeader">
                <a href=""><img src={defaultImg} alt="기본 이미지" className="defaultImg"/></a>
                <span className='profileText'>
                    <p>김형관<span className="grade">매니저</span></p>
                    <p>2011.12.02. 개설</p>
                </span>
            </div>
            <hr />
            <p>🌱씨앗 1단계</p>
            <p>🚹멤버: 1명</p>
            <p>📌경기도 광주시</p>
        </div>
    );
}

export default Cafeinfo;