import milk from '../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../images/desktop/image-gallery-orange.jpg'
import cone from '../images/desktop/image-gallery-cone.jpg'
import sugar from '../images/desktop/image-gallery-sugarcubes.jpg'
import milkM from '../images/mobile/image-gallery-milkbottles.jpg'
import orangeM from '../images/mobile/image-gallery-orange.jpg'
import coneM from '../images/mobile/image-gallery-cone.jpg'
import sugarM from '../images/mobile/image-gallery-sugar-cubes.jpg'

export default function Parte3 () {
    return (
        <>
        <div className="containerParte3">
            <img className='imagesParte3' src={milk} />
            <img className='imagesParte3' src={orange} />
            <img className='imagesParte3' src={cone} />
            <img className='imagesParte3' src={sugar} />
        </div>
        <div className="containerParte3M">
            <div className="parte3Cima">
                <img className='imagesParte3M' src={milkM} />
                <img className='imagesParte3M' src={orangeM} />
            </div>
            <div className="parte3Baixo">
                <img className='imagesParte3M' src={coneM} />
                <img className='imagesParte3M' src={sugarM} />
            </div>
        </div>
        </>    
    )
}