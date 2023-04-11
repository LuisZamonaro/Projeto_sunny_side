import emilyImage from '../images/image-emily.jpg'
import thomasImage from '../images/image-thomas.jpg'
import jennieImage from '../images/image-jennie.jpg'


export default function Parte2() {
    return (
        <>
            <div className="containerParte2">
                <div className="clientTest">
                    CLIENT TESTEMONIALS
                </div>
                <div className="containerClients">
                    <div className="containerClient">
                        <div className="imageClient">
                            <img id='imageClient' src={emilyImage} />
                        </div>
                        <div className="textParte2">
                            <p id='textParte2'>We put our trust in Sunnyside and they</p>
                            <p id='textParte2'>delivered, making sure our needs were met</p>
                            <p>and deadlines were always hit.</p>
                        </div>
                        <div className="nameClient">
                            Emily R.
                        </div>
                        <div className="cargoClient">
                            Marketing Director
                        </div>
                    </div>
                    <div className="containerClient">
                        <div className="imageClient">
                            <img id='imageClient' src={thomasImage} />
                        </div>
                        <div className="textParte2">
                            <p id='textParte2'>Sunnyside’s enthusiasm coupled with their</p>
                            <p id='textParte2'>keen interest in our brand’s success made it</p>
                            <p>a satisfying and enjoyable experience.</p>
                        </div>
                        <div className="nameClient">
                            Thomas S.
                        </div>
                        <div className="cargoClient">
                            Chief Operating Officer
                        </div>
                    </div>
                    <div className="containerClient">
                        <div className="imageClient">
                            <img id='imageClient' src={jennieImage} />
                        </div>
                        <div className="textParte2">
                            <p id='textParte2'>Incredible end result! Our sales increased</p>
                            <p id='textParte2'>over 400% when we worked with Sunnyside.</p>
                            <p>Highly recommended!</p>
                        </div>
                        <div className="nameClient">
                            Jennie F.
                        </div>
                        <div className="cargoClient">
                            Business Owner
                        </div>
                    </div>
                </div>
            </div>

            <div className="containerParte2M">
                <div className="clientTestM">
                    CLIENT TESTEMONIALS
                </div>
                <div className="containerClientsM">
                    <div className="imageClientM">
                        <img id='imageClientM' src={emilyImage} />
                    </div>
                    <div className="textParte2M">
                        <p id='textParte2'>We put our trust in Sunnyside and they</p>
                        <p id='textParte2'>delivered, making sure our needs were met</p>
                        <p>and deadlines were always hit.</p>
                    </div>
                    <div className="nameClientM">
                        Emily R.
                    </div>
                    <div className="cargoClientM">
                        Marketing Director
                    </div>
                </div>
                <div className="containerClientsM">
                    <div className="imageClientM">
                        <img id='imageClientM' src={thomasImage} />
                    </div>
                    <div className="textParte2M">
                        <p id='textParte2'>Sunnyside’s enthusiasm coupled with their</p>
                        <p id='textParte2'>keen interest in our brand’s success made it</p>
                        <p>a satisfying and enjoyable experience.</p>
                    </div>
                    <div className="nameClientM">
                        Thomas S.
                    </div>
                    <div className="cargoClientM">
                        Chief Operating Officer
                    </div>
                </div>
                <div className="containerClientsM">
                    <div className="imageClientM">
                        <img id='imageClientM' src={jennieImage} />
                    </div>
                    <div className="textParte2M">
                        <p id='textParte2'>Incredible end result! Our sales increased</p>
                        <p id='textParte2'>over 400% when we worked with Sunnyside.</p>
                        <p>Highly recommended!</p>
                    </div>
                    <div className="nameClientM">
                        Jennie F.
                    </div>
                    <div className="cargoClientM">
                        Business Owner
                    </div>
                </div>
            </div>
        </>

    )
}