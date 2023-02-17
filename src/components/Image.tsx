import './Image.scss'
import Img from '../assets/image.png'
import Img1 from "../assets/image1.png"
import Img2 from "../assets/image2.png"
import gsap, { Power4 } from 'gsap'
import { createElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"

type ImageObj = {
    name: string,
    id: number,
    src: string
}

const Image = () => {

    const [reversed, setReversed] = useState<boolean>(true);
    const app = useRef<HTMLDivElement>(null);
    let transition = useRef<GSAPTimeline | null>(null);
    
    const Images: Array<ImageObj> = [
        { name: "image", id: 0, src: Img },
        { name: "image1", id: 1, src: Img1 },
        { name: "image2", id: 2, src: Img2 }
    ]

    const [count, setCount] = useState<number>(0);

    // transition

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            transition.current = gsap.timeline()
            .to(".image", {
                x: 300,
                scale: 1.5,
                rotate: 2,
                duration: 2,
            })
        })
        return () => context.revert();
    }, [])

    useEffect(() => {
        transition.current?.reversed(reversed);
    }, [])

    useLayoutEffect(() => {
        var imgAnim = gsap.timeline()
        .from('.image', {
            x: 300,
            ease: Power4.easeIn
        })
        .to('.image', {
            x: 0,
            ease: Power4.easeIn
        })
    }, [count])


    // transition ended

    // slider

    const nextSlide = () => {
        setCount(count === Images.length - 1 ? 0 : count + 1)
    }

    const prevSlide = () => {
        setCount(count === 0 ? Images.length - 1 : count - 1)
    }



    console.log(count)

    

  return (
    <div className="imageBlock" ref={app}>
        <div className="imageContainer">
            <AiOutlineArrowLeft className="button buttonLeft" onClick={() => prevSlide()}/>
            <img className="image" src={Images[count].src} />
            <AiOutlineArrowRight className="button buttonRight" onClick={() => nextSlide()}/>
        </div>
    </div>
    )
}

export default Image