import BrandBar from "../components/BrandBar";
import ButtonCard from "../components/ButtonCard";

import card_home from "../text/card_home.json";

import './page-style.css'

const Home = () => {

    const button_card = card_home.map((data) => {
        return <ButtonCard detail={data} />
    });

    return (
        <div className="page-align">
            <BrandBar />
            <div className="content">
                <div className="header-text">
                    <h1>Live to earn.</h1>
                    <p>
                    begin living for helping local communities & environment then earn an incentive.
                    </p>
                </div>
                <div className="interact-section">
                    {button_card}
                </div>
            </div>
        </div>
    );
}

export default Home;