import { useScroll, useTransform, motion, useMotionValue, useMotionValueEvent, useInView, useAnimate, useVelocity  } from "framer-motion"
import { useRef, useEffect } from "react";

import full_img from "../assets/test_full.png"
import min_img from "../assets/test_min.png"

export default function Section2() {
    const targetRef = useRef(null)

    const inView = useInView(targetRef, {
        margin: "0px 0px -400px 0px"
    })

    const [innerRef, animate] = useAnimate()
    
    // const { scrollYProgress } = useScroll({
    //     target: targetRef,
    //     offset:["50px 50px", "50px"]
    // })

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset:["start end", "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0.50, 1], ["0%", "20%"])

    useEffect(() => {
        if (inView) {
            animate(innerRef.current, {x: 0})
        } else {
            animate(innerRef.current, {x: -innerRef.current.offsetWidth })
        }
    },[inView])

    return (
        <motion.div className='relative overflow-hidden h-screen' >
            <motion.div
                ref={targetRef}
                className='w-full h-screen inner_2'
                // style={{ position}}
            >
                <motion.h2 ref={innerRef} className='absolute top-2/4 left-2/4 translate-y-2/4 translate-x-2/4 z-20 text-sm/[32px]'>
                    title
                </motion.h2>

                <motion.div className="full-img" style={{y: backgroundY}}></motion.div>
                <div className="min-img"></div>
           </motion.div>
        </motion.div>
    )
}