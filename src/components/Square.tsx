import './Square.scss'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap, {Power4} from 'gsap'

const Square = () => {

    const [reversed, setReversed] = useState<boolean>(true);
    const app = useRef<HTMLDivElement>(null);
    let t1 = useRef<GSAPTimeline | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            t1.current && t1.current.progress(0).kill();
            t1.current = gsap.timeline()
            .to('.square', {
                x: 200,
                stagger: 0.1
            })
        })

        return () => ctx.revert();
    }, [])

    useEffect(() => {
        t1.current?.reversed(reversed)
    }, [reversed])


  return (
    <div className="squareClass" onMouseEnter={() => setReversed(!reversed)} onMouseLeave={() => setReversed(!reversed)} ref={app}>
    <div className="square"></div>
    <div className="square blue"></div>
    <div className="square orange"></div>
    <div className="square yellow"></div>
    </div>
    )
}

export default Square