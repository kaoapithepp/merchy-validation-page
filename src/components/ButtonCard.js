import './ButtonCard.css'

const ButtonCard = ({ detail }) => {
    return (
        <div className={detail.style}>
            <section>
                <h2>{detail.header} <img src={detail.img}/></h2>
                <p>
                    {detail.paragraph}
                </p>
            </section>
            <img className="arrow" src="/icon/arrow.png" />
        </div>
    );
}

export default ButtonCard;