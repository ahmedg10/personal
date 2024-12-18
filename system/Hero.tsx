import {motion} from 'motion/react'
import React from 'react'

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
        <div className="w-full h-[500px] flex items-center justify-center h-screen mx-auto">
            <motion.div 
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                    staggerChildren: .8// Delay between lines
                }}
            >
                <motion.h1 
                    variants={variants}
                    transition={{
                        ...transition,
                        staggerChildren: 0.1 // Delay between words
                    }}
                    className="text-3xl font-medium text-black md:text-4xl"
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

                <motion.h1 
                    variants={variants}
                    transition={{
                        ...transition,
                        staggerChildren: 0.1
                    }}
                    className="mb-1 text-3xl font-medium text-black md:text-4xl"
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