import { useState } from 'react';
import { Link } from 'react-router-dom';

import BrandBar from "../components/BrandBar";
import user_entity from '../entity/user_entity';

import './page-style.css';

const Contact = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [postCode, setPostCode] = useState('');
    const [cityCountry, setcityCountry] = useState('');

    function handleSubmit() {        
        user_entity['fullName'] = fullName;
        user_entity['email'] = email;
        user_entity['age'] = age;
        user_entity['postCode'] = postCode;
        user_entity['cityCountry'] = cityCountry;
        
        console.log(user_entity);
    }

    return (
        <div className="page-align">
            <BrandBar />
            <div className="content">
                <div className="header-text">
                    <h1>Just type!</h1>
                    <p>
                        simply type your contact here to get an update!
                        feel free to type in Thai <img src="/icon/thai.png" className="p-emoji"/>.
                    </p>
                </div>
                <div className="interact-section">
                    <form>
                        <div className="form-elem">
                            <h5>Full Name</h5>
                            <input type="text" placeholder="Your name here" value={fullName} onChange={e => { setFullName(e.target.value) }} />
                        </div>
                        <div className="form-elem">
                            <h5>Email</h5>
                            <input type="email" placeholder="example@example.com" value={email} onChange={e => { setEmail(e.target.value) }}/>
                        </div>
                        <div className="form-elem">
                            <div className="inline-block">
                                <h5>Age</h5>
                                <input type="number" placeholder="number only" value={age} onChange={e => { setAge(e.target.value) }}/>
                            </div>
                            <div className="inline-block">
                                <h5>Postcode</h5>
                                <input type="text" placeholder="ex. 50200" value={postCode} onChange={e => { setPostCode(e.target.value) }}/>
                            </div>
                        </div>
                        <div className="form-elem">
                            <h5>City & Country</h5>
                            <input type="text" placeholder="ex. Chiang Mai, Thailand หรือ เชียงใหม่, ประเทศไทย" value={cityCountry} onChange={e => { setcityCountry(e.target.value) }}/>
                        </div>
                        <Link to="/gender" style={{textDecoration: 'inherit', color: 'inherit'}}>
                            <button onClick={handleSubmit}>Let's go!</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;