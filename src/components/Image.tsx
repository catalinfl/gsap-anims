import './Image.scss'
import Img from '../assets/image.png'
import gsap, { Power4 } from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Image = () => {

    const [reversed, setReversed] = useState<boolean>(true);
    const app = useRef<HTMLDivElement>(null);
    let transition = useRef<GSAPTimeline | null>(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            transition.current = gsap.timeline()
            .to(".image", {
                x: 300,
                scale: 1.5,
                rotate: 2,
                duration: 2,
                ease: Power4.easeIn
            })
        })
        return () => context.revert();
    }, [])

    useEffect(() => {
        transition.current?.reversed(reversed);
    }, [reversed])


  return (
    <div className="imageBlock" ref={app}>
        <div className="imageContainer">
            <img className="image" src={Img} onMouseEnter={() => setReversed(!reversed)} onMouseLeave={() => setReversed(!reversed)}/>
        </div>
    </div>
    )
}

export default Image