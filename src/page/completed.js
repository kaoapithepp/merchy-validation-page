import { Link } from 'react-router-dom';
import firebase from '../config/firebase';

import BrandBar from "../components/BrandBar";
import user_entity from "../entity/user_entity";

import './page-style.css'

const Completed = () => {

    function createUser() {
        const entity = firebase.database().ref('account');

        entity.push(user_entity);
    }

    function handleClick(attrib, payload) {
        user_entity[attrib] = payload;

        // console.log(user_entity);

        createUser();
    }

    return (
        <div className="page-align">
            <BrandBar />
            <div className="center-page">
                <div className="center-content">
                    <h4><img src="/icon/sparkles.png" className="h-emoji" /> You just <span className="green">save</span> 10 kg. of CO2</h4>
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