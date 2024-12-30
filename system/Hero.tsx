import {motion} from 'motion/react'
import React from 'react'
import { useEffect, useState } from 'react'

export default function Hero() {

    const transition = { duration: 1, ease: [.25,.1,.25,1] }
    const variants = {
        hidden: { filter: "blur(20px)", transform: "translateY(50%)" },
        visible: { filter: "blur(0px)",  transform: "translateY(0%)" },
    }

    const heading = " a kid from africa";
    const subheading = "obessed with designing the internet";

    const headingWords = heading.split(" ");
    const subheadingWords = subheading.split(" ");

    return (
        <div className="w-full h-screen flex items-center justify-center mx-auto">
            <motion.div 
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                    staggerChildren: 0.4
                }}
                className="flex flex-col items-center"
            >
                <motion.div className="flex flex-col sm:flex-row items-center sm:items-baseline sm:gap-4">
                    <motion.h1 
                        variants={variants}
                        transition={{
                            ...transition,
                            staggerChildren: 0.1
                        }}
                        className="text-3xl font-medium text-black md:text-4xl text-center sm:text-left"
                    > 
                        {headingWords.map((word, index) => (
                            <React.Fragment key={index}>
                                <motion.span variants={variants}>
                                    {word}
                                </motion.span>
                                {index < headingWords.length - 1 && ' '}
                            </React.Fragment>
                        ))}
                    </motion.h1>
                    
                    <motion.svg 
                        variants={variants}
                        transition={{
                            ...transition,
                            delay: 0.035
                        }}
                        width="120"
                        height="84"
                        viewBox="0 0 2107 1473" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="translate-y-4 w-20 sm:w-[120px] order-first sm:order-last"
                    >
                        <g id="eyes">
                            {/* Left eye */}
                            <path d="M822.4 1471.95C919.879 1471.95 998.906 1395.64 998.906 1301.5C998.906 1207.37 919.879 1131.06 822.4 1131.06C724.917 1131.06 645.891 1207.37 645.891 1301.5C645.891 1395.64 724.917 1471.95 822.4 1471.95Z" fill="#292323">
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values="0 0; -45 -15; 0 -30; 45 -15; 0 0"
                                    dur="4s"
                                    repeatCount="indefinite"
                                    calcMode="spline"
                                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
                                />
                            </path>
                            {/* Right eye */}
                            <path d="M1283.66 1472.05C1381.14 1472.05 1460.17 1395.74 1460.17 1301.61C1460.17 1207.48 1381.14 1131.16 1283.66 1131.16C1186.18 1131.16 1107.15 1207.48 1107.15 1301.61C1107.15 1395.74 1186.18 1472.05 1283.66 1472.05Z" fill="#292323">
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values="0 0; -45 -15; 0 -30; 45 -15; 0 0"
                                    dur="4s"
                                    repeatCount="indefinite"
                                    calcMode="spline"
                                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
                                />
                            </path>
                        </g>
                        
                        {/* Rest of the face */}
                        <path d="M1052.69 598C573.435 598 184.875 980.358 185 1451.88H406.669C406.669 1098.51 693.615 812.013 1052.69 812.013C1411.77 812.013 1698.72 1098.51 1698.72 1451.88H1920.39C1920.47 980.358 1531.91 598 1052.69 598Z" fill="#292323"/>
                        <path d="M181.282 907.512C73.1675 885.024 -16.8246 831.089 2.67226 729.002C23.1709 621.669 206.964 558.647 285.732 552.258C220.251 510.092 99.238 398.558 192.621 301.959C286.003 205.36 439.189 213.821 498.027 226.599C474.302 160.155 498.961 53.9224 647.006 15.5894C795.052 -22.7436 932.74 64.7903 981.14 119.095C998.222 67.346 1178.76 -19.9256 1302.85 4.09636C1516.17 45.3879 1529.67 151.678 1507.84 205.344C1576.17 170.845 1739.02 122.545 1843.79 205.344C1948.56 288.144 1838.1 391.899 1769.77 433.426C1868.46 430.232 2073.26 449.526 2102.87 552.258C2132.48 654.991 1995.63 743.285 1923.51 774.59C1948.89 790.899 1994.11 851.139 2031.03 919.915C2085.23 1020.88 2121.56 1140.23 2051 1166C1843.07 1241.94 1899.78 1233.08 1769.77 1166C1759.33 1242.03 1565.62 962.998 1365.62 838C1165.62 713.002 546.059 839.075 691 919.915C143.756 919.915 361.165 1230.53 192.621 1206C44.2806 1184.41 -33.2066 915.763 181.282 907.512Z" fill="#292323"/>
                    </motion.svg>
                </motion.div>

                <motion.h1 
                    variants={variants}
                    transition={{
                        ...transition,
                        staggerChildren: 0.1
                    }}
                    className="text-3xl font-medium text-black md:text-4xl text-center sm:text-left"
                > 
                    {subheadingWords.map((word, index) => (
                        <React.Fragment key={index}>
                            <motion.span variants={variants}>
                                {word}
                            </motion.span>
                            {index < subheadingWords.length - 1 && ' '}
                        </React.Fragment>
                    ))}
                </motion.h1>
            </motion.div>
        </div>
    )
}

// Notes: So Fragment is used to wrap multiple elements in a single component. 
//We use it to have more control over the animation. 
//Now, we need keys on the fragments rather than the space because we need to animate the group as a whole. It will not identify it by just putting on the span. 
//We need to identify it by the fragment. 