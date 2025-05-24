import UserProfile from "./UserProfile";
import '../../Css/Profile/Profile.css';
import { useState } from "react";
import Cafeinfo from "./Cafeinfo";

const ProfileBox = () =>{
    const [switchTab, setSwitchTab] = useState('info')
    return(
        <div className="proflieContainer">
            <div className="tabBtn">
                <button onClick={() => setSwitchTab('cafe')}>카페 정보 </button>
                <button onClick={() => setSwitchTab('user')}>나의 활동</button>
            </div>
            <hr />
            <div className="tabContent">
                {switchTab === 'user' ? <UserProfile/> : <Cafeinfo/>}
            </div>
        </div>
    );
}

export default ProfileBox;