import BrandBar from "../components/BrandBar";
import ButtonCard from "../components/ButtonCard";

import card_gender from "../text/card_gender.json";

import './page-style.css'

const Gender = () => {

    const button_card = card_gender.map((data) => {
        return <ButtonCard detail={data} />
    });

    return (
        <div className="page-align">
            <BrandBar />
            <div className="content">
            <div className="header-text">
                <h1>We <img src="/icon/heart.png" className="emoji"/></h1>
                <h1>to know you.</h1>
                <p>
                    Let’s getting know each other!
                </p>
            </div>
                <div className="interact-section">
                    {button_card}
                </div>
                
            </div>
        </div>
    );
}

export default Gender;