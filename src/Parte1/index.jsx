import imageTransform from '../images/desktop/image-transform.jpg'
import imageStand from '../images/desktop/image-stand-out.jpg'
import imagePhotography from '../images/desktop/image-photography.jpg'
import imageGraphic from '../images/desktop/image-graphic-design.jpg'
import imageTransformM from '../images/mobile/image-transform.jpg'
import imageStandM from '../images/mobile/image-stand-out.jpg'
import imageGraphicM from '../images/mobile/image-graphic-design.jpg'
import imagePhotoM from '../images/mobile/image-photography.jpg'

export default function Parte1() {
    return (
        <>
            <div className="containerParte1">
                <div className="containerParte1EsqN1">
                    <div className="titleParte1">
                        Transform your brand
                    </div>
                    <div className="textParte1">
                        We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </div>
                    <div className="learnMore">
                        LEARN MORE
                    </div>
                </div>
                <div className="containerParte1DirN1">
                    <img id='imageTransf' src={imageTransform} />
                </div>
            </div>
            <div className="containerParte1">
                <div className="containerParte1EsqN2">
                    <img id='imageStand' src={imageStand} />
                </div>
                <div id='parteDirN2' className='containerParte1DirN2'>
                    <div className="titleParte1">
                        Stand out to the right audience
                    </div>
                    <div className="textParte1">
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                    </div>
                    <div className="learnMore">
                        LEARN MORE
                    </div>
                </div>
            </div>
            <div className="containerParte1Final">
                <div className="containerParte1EsqN3">
                    <div className="imageGraphic">
                        <img src={imageGraphic} />
                    </div>
                    <div className="titleParte1Final">
                        Graphic Design
                    </div>
                    <div className="textParte1Final">
                        <p>Great design makes you memorable. We deliver</p>
                        <p>artwork that underscores your brand message</p>
                        <p>and captures potential clients’ attention.</p>
                    </div>
                </div>
                <div className="containerParte1DirN3">
                    <div className="imagePhotography">
                        <img src={imagePhotography} />
                    </div>
                    <div id='colorTitleParteFinal' className="titleParte1Final">
                        Photography
                    </div>
                    <div id='colorTitleParteFinal' className="textParte1Final">
                        <p>Increase your credibility by getting the most</p>
                        <p>stunning, high-quality photos that improve your</p>
                        <p>business image.</p>
                    </div>
                </div>
            </div>
            <div className="containerMobile">
                <div className="imageTransformM">
                    <img id='transformM' src={imageTransformM} />
                </div>
                <div className="containerTopicM">
                    <div className="titleParte1M1">
                        Transform your
                    </div>
                    <div className="titleParte1M2">
                        brand
                    </div>
                    <div className="textParte1M">
                        <p>We are a full-service creative agency</p>
                        <p>specializing in helping brands grow fast.</p>
                        <p>Engage your clients through compelling visuals that do most of the marketing for</p>
                        <p>you.</p>
                    </div>
                    <div className="learnMoreM">
                        LEARN MORE
                    </div>
                </div>
                <div className="imageStand">
                    <img id='standM' src={imageStandM} />
                </div>
                <div className="containerTopicM">
                    <div className="titleParte1M1">
                        Stand out to the
                    </div>
                    <div className="titleParte1M2">
                        right audience
                    </div>
                    <div className="textParte1M">
                        <p>Using a collaborative formula of</p>
                        <p>designers, researchers, photographers,</p>
                        <p>videographers, and copywriters, we’ll</p>
                        <p>build and extend your brand in digital</p>
                        <p>places.</p>
                    </div>
                    <div className="learnMoreM">
                        LEARN MORE
                    </div>
                </div>
                <div className="graphicM">
                    <div className="imageGraphicM">
                        <img id='graphicM' src={imageGraphicM} />
                    </div>
                    <div className="containerGraphicM">
                        <div className="titleParte1FinalM">
                            Graphic Design
                        </div>
                        <div className="textParte1FinalM">
                            <p>Great design makes you memorable. We deliver</p>
                            <p>artwork that underscores your brand message</p>
                            <p>and captures potential clients’ attention.</p>
                        </div>
                    </div>
                </div>
                <div className="photographyM">
                    <div className="imagePhotoM">
                        <img id='photoM' src={imagePhotoM} />
                    </div>
                    <div className="containerPhotoM">
                        <div className="titleParte1FinalM2">
                            Photography
                        </div>
                        <div className="textParte1FinalM2">
                            <p>Increase your credibility by getting the most</p>
                            <p>stunning, high-quality photos that improve your</p>
                            <p>business image.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}