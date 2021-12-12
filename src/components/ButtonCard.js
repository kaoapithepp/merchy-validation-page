import { Link } from 'react-router-dom';

import user_entity from '../entity/user_entity';

import './ButtonCard.css';



const ButtonCard = ({ detail }) => {

    function updateEntity(attrib, payload){
        user_entity[attrib] = payload;
        console.log(user_entity);
    }

    return (
        <div>
            <Link to={`${detail.path}`} style={{ textDecoration: 'inherit', color: 'inherit'}}>
                <div className={detail.style} onClick={() => updateEntity(detail.attrib, detail.payload)}>
                    <section>
                        <h2>{detail.header} <img src={detail.img}/></h2>
                        <p>
                            {detail.paragraph}
                        </p>
                    </section>
                    <img className="arrow" src="/icon/arrow.png" />
                </div>
            </Link>
        </div>
    );
}

export default ButtonCard;