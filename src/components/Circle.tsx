import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Circle.scss'
import gsap, {Power4} from "gsap"

const Circle = () => {

    const [reversed, setReversed] = useState<boolean>(true);
    const app = useRef<HTMLDivElement>(null)
    let t1 = useRef<GSAPTimeline | null>(null);

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        t1.current && t1.current.progress(0).kill();
        t1.current = gsap.timeline() 
        .to(".circle", {
          scale: 2,
          stagger: 0.1,
        })
        .to(".circle", {
          stagger: 0.25,
          x: 100,
        })
      }, app);
      return () => ctx.revert()
    }, [])

    useEffect(() => {
      t1.current?.reversed(reversed)
    }, [reversed])



  return (
    <div className="parent">
    <div className="container-circle" ref={app} onClick={() => setReversed(!reversed)}> 
    <div className="circle"> t </div>
    <div className="circle orange"> </div>
    <div className="circle blue"> </div>
    <div className="circle yellow"> </div>
    </div>
    </div>
    )
}

export default Circle