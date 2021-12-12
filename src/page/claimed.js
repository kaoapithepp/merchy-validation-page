import BrandBar from "../components/BrandBar";

import './page-style.css'

const Claimed = () => {
    return (
        <div className="page-align">
            <BrandBar />
            <div className="center-page">
                <div className="center-content">
                    <h2>You will recieve</h2>
                    <h2>200 <span className="inline-logo">merchy coins</span> <img src="/icon/popper.png" className="h-emoji" /></h2>
                    <p>When our platform is ready in March 2022.</p>
                </div>
            </div>
        </div>
    );
}

export default Claimed;