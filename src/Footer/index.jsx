import logoFooter from '../images/logo-footer.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'


export default function Footer() {
    return (
        <>
        <div className="containerFooter">
            <div className="logoFooter">
                <img id='logoFooter' src={logoFooter} />
            </div>
            <div className="optionsMenuFooter">
                <span id='aboutF'>About</span> <span id='servicesF'>Services</span> <span id='projectsF'>Projects</span>
            </div>
            <div className="socialMedias">
                <img id='faceb' src={facebook} />
                <img id='insta' src={instagram} />
                <img id='twitter' src={twitter} />
                <img id='pinter' src={pinterest} />
            </div>
        </div>
        <div className="containerFooterM">
            <div className="logoFooterM">
                <img id='logoFooterM' src={logoFooter} />
            </div>
            <div className="optionsMenuFooterM">
                <span>About</span> <span>Services</span> <span>Projects</span>
            </div>
            <div className="socialMedias">
                <img src={facebook} />
                <img src={instagram} />
                <img src={twitter} />
                <img src={pinterest} />
            </div>
        </div>
        </>
        
    )
}