import React, { useEffect, useRef } from 'react'
import './Circle.scss'
import gsap from "gsap"

const Circle = () => {




    useEffect(() => {
        gsap.to(circlesRef.current, {
            rotate: 360,
            opacity: 1,
            duration: 3
        })
    }, [])

    const circlesRef = useRef<HTMLDivElement>(null);
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);

  return (
    <div className="circles"> 
    <div ref={circlesRef} className="container-circle"> 
    <div ref={ref1} className="circle"> </div>
    <div ref={ref2} className="circle orange"> </div>
    <div ref={ref3} className="circle blue"> </div>
    <div ref={ref4} className="circle yellow"> </div>
    </div>
    </div>
    )
}

export default Circle