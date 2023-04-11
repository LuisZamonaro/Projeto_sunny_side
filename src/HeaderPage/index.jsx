import logoPage from '../images/logo.svg'
import imageHeader from '../images/desktop/image-header.jpg'
import arrowDown from '../images/icon-arrow-down.svg'
import imageHeaderM from '../images/mobile/image-header.jpg'
import hamb from '../images/icon-hamburger.svg'
import logoM from '../images/logo.svg'
import arrowDownM from '../images/icon-arrow-down.svg'
import { useState } from 'react'

export default function HeaderPage() {

    const [openMenu, setOpenMenu] = useState(false)



    return (
        
        <>
            <div className="containerImageHeader">
                <div className="containerHeader">
                    <div className="containerMenu">
                        <div className="logoPage">
                            <img src={logoPage} />
                        </div>
                        <div className="optionsMenu">
                            About Services Projects <span id='contact'>CONTACT</span>
                        </div>
                    </div>
                    <div className="weAre">
                        WE ARE CREATIVES
                    </div>
                    <div className="imageArrow">
                        <img src={arrowDown} />
                    </div>
                    <div className="imageLaranja">
                        <img id='imageHeader' src={imageHeader} />
                    </div>
                </div>
            </div>
            <div className="containerImageHeaderMobile">
                <div className="containerHeaderM">
                    <div className="containerMenuM">
                        <div className="imageHeaderM">
                            <img id='imageHeaderM' src={imageHeaderM} />
                        </div>
                        <div className="logoPageM">
                            <img src={logoM} />
                        </div>
                        <div className="hamburgerMenu" onClick={() => setOpenMenu (prevState => !prevState)}>
                            <img src={hamb} />
                        </div>
                        <div className="weAreM1">
                            WE ARE
                        </div>
                        <div className="weAreM2">
                            CREATIVES
                        </div>
                        <div className="arrowDownM">
                            <img src={arrowDownM} />
                        </div>
                    </div>
                </div>
                <div className={`openMenu ${openMenu == true ? 'active' : ''}`}>
                    <div id='aboutM' className="optionsOpenMenu">
                        About
                    </div>
                    <div className="optionsOpenMenu">
                        Services
                    </div>
                    <div className="optionsOpenMenu">
                        Projects
                    </div>
                    <div className="contactM">
                        CONTACT
                    </div>
                </div>
            </div>
        </>


    )
}