import { Link } from 'react-router-dom';

import BrandBar from "../components/BrandBar";

import './page-style.css'

const Error = () => {

    return (
        <div className="page-align">
            <BrandBar />
            <div className="center-page">
                <div className="center-content">
                    <h1 className="inline-logo">404, Oops...</h1>
                    <h4>Don't be hurry.</h4>
                    <p>I'm in rush to meet you next year <img src="/icon/smile.png" className="p-emoji"/></p>
                    <Link to="/" style={{ textDecoration: 'inherit', color: 'inherit'}} >
                    <p className="skip">back to survey</p>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Error;