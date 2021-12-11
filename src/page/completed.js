import BrandBar from "../components/BrandBar";

import './page-style.css'

const Completed = () => {
    return (
        <div className="page-align">
            <BrandBar />
            <div className="center-page">
                <div className="center-content">
                    <h4>You just <span className="green">save</span> 10 kg. of CO2</h4>
                    <p>Thank you for participating us, We begin the change!</p>
                </div>
                <button>feel good with this?</button>
                <p className="skip">skip and claim reward</p>
            </div>
        </div>
    );
}

export default Completed;