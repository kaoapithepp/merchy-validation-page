import BrandBar from "../components/BrandBar";
import ButtonCard from "../components/ButtonCard";

import card_prefer from "../text/card_prefer.json";

import './page-style.css'

const Prefer = () => {

    const button_card = card_prefer.map((data) => {
        return <ButtonCard detail={data} />
    });

    return (
        <div className="page-align">
            <BrandBar />
            <div className="content">
            <div className="header-text">
                <h1>Which one</h1>
                <h1>you <img src="/icon/thumbs-up.png" className="emoji"/> ?</h1>
                <p>
                    Select your favourite!
                </p>
            </div>
                <div className="interact-section">
                <h4>Where do you want to eat?</h4>
                    {button_card}
                </div>
                
            </div>
        </div>
    );
}

export default Prefer;