import { Link } from 'react-router-dom';

import BrandBar from "../components/BrandBar";
import user_entity from "../entity/user_entity";

import './page-style.css'

const Completed = () => {

    function handleClick(attrib, payload) {
        user_entity[attrib] = payload;

        console.log(user_entity);
    }
    return (
        <div className="page-align">
            <BrandBar />
            <div className="center-page">
                <div className="center-content">
                    <h4>You just <span className="green">save</span> 10 kg. of CO2</h4>
                    <p>Thank you for participating us, We begin the change!</p>
                </div>
                <Link to="/claimed" style={{ textDecoration: 'inherit', color: 'inherit'}} >
                    <button onClick={() => handleClick('isLike', 'Yes')}>feel good with this?</button>
                </Link>
                <Link to="/claimed" style={{ textDecoration: 'inherit', color: 'inherit'}} >
                    <p className="skip" onClick={() => handleClick('isLike', 'No')}>skip and claim reward</p>
                </Link>
            </div>
        </div>
    );
}

export default Completed;