import { motion } from "framer-motion";

const svgVariant = {
    initial: {
        rotate: -100
    },
    animate: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}

const pathVariants = {
    initial: {
        opacity: 0,
        pathLength: 0,
    },
    firstColor: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2.5,
            ease: "easeInOut"
        }
    },
    secondColor: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 4,
        },
    },
}

const Name = () => {
    return (
        <div className="loader-container">
            <div className="svgName" >
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="322" height="92" fill="none" viewBox="0 0 320 92" variants={svgVariant}
                    initial="hidden"
                    animate="animate">
                    {/* color 1 */}
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M318 5h-34v41" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M284 46v42h34" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M284 46h29" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M252 46.977h19" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M271 46.946v29.522C266 83.388 259.824 88 252.765 88 238.059 88 226 69.087 226 46.023" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M226 46.023C226 23.233 238.247 5 253.182 5c7.169 0 13.74 4.558 18.818 11.395" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M214 5h-34v41" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M180 46v42h34" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M180 46h29" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M168 46.5c0 22.897-9.547 41.5-23.434 41.5H122V5" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M122 5h22.566C158.453 5 168 22.718 168 44.524" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M59 88 83.5 5 110 88" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M65 68.597h37" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M4 88V4" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="m4 4 43 84" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='firstColor' d="M47 87V4" />

                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M318 5h-34v41" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M284 46v42h34" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M284 46h29" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M252 46.977h19" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M271 46.946v29.522C266 83.388 259.824 88 252.765 88 238.059 88 226 69.087 226 46.023" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M226 46.023C226 23.233 238.247 5 253.182 5c7.169 0 13.74 4.558 18.818 11.395" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M214 5h-34v41" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M180 46v42h34" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M180 46h29" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M168 46.5c0 22.897-9.547 41.5-23.434 41.5H122V5" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M122 5h22.566C158.453 5 168 22.718 168 44.524" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M59 88 83.5 5 110 88" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M65 68.597h37" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M4 88V4" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="m4 4 43 84" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="7" variants={pathVariants} initial='initial' animate='secondColor' d="M47 87V4" />
                </motion.svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="490" height="91" fill="none" viewBox="0 0 490 91">
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M4 87V4" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M45 87V4" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M45 45.5H4" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M85 4c15.097 0 27 18.642 27 41.722C112 68.358 100.097 87 85 87" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M85 4C69.645 4 57 22.642 57 45.722 57 68.358 69.645 87 85 87" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M175 4v83" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="m124 4 25.203 55.333L175 4" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M124 87V4" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M213.161 43.524h3.007c7.517 0 13.832 9.924 13.832 21.738C230 77.549 223.685 87 216.168 87H187" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M187 4c9.5 0 16.031.482 25.828 0C219.656 4 225 12.676 225 23.762s-5.344 19.762-12.172 19.762H187" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M187 87V4" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M276 4h-34v41" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M242 45v42h34" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M242 45h29" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M288 52V4h24.889C321.185 4 328 14.877 328 28.118" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="m328 87-16-33" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M328 28c0 13.486-6.815 24.322-15.111 24.322H288V87" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M366 45.977h19" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M385 45.946v29.522C380 82.388 373.824 87 366.765 87 352.059 87 340 68.087 340 45.023" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M340 45.023C340 22.233 351.981 4 366.591 4c7.013 0 13.441 4.558 18.409 11.395" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M431 4h-34v41" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M397 45v42h34" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M397 45h29" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M443 87V4" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="m443 4 43 83" />
                    <motion.path stroke="hsl(210, 23%, 50%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='firstColor' d="M486 87V4" />


                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M4 87V4" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M45 87V4" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M45 45.5H4" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M85 4c15.097 0 27 18.642 27 41.722C112 68.358 100.097 87 85 87" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M85 4C69.645 4 57 22.642 57 45.722 57 68.358 69.645 87 85 87" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M175 4v83" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="m124 4 25.203 55.333L175 4" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M124 87V4" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M213.161 43.524h3.007c7.517 0 13.832 9.924 13.832 21.738C230 77.549 223.685 87 216.168 87H187" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M187 4c9.5 0 16.031.482 25.828 0C219.656 4 225 12.676 225 23.762s-5.344 19.762-12.172 19.762H187" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M187 87V4" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M276 4h-34v41" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M242 45v42h34" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M242 45h29" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M288 52V4h24.889C321.185 4 328 14.877 328 28.118" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="m328 87-16-33" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M328 28c0 13.486-6.815 24.322-15.111 24.322H288V87" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M366 45.977h19" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M385 45.946v29.522C380 82.388 373.824 87 366.765 87 352.059 87 340 68.087 340 45.023" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M340 45.023C340 22.233 351.981 4 366.591 4c7.013 0 13.441 4.558 18.409 11.395" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M431 4h-34v41" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M397 45v42h34" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M397 45h29" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M443 87V4" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="m443 4 43 83" />
                    <motion.path stroke="hsl(209, 18%, 30%)" strokeLinecap="round" strokeWidth="10" variants={pathVariants} initial='initial' animate='secondColor' d="M486 87V4" />
                </svg>
            </div>
        </div>
    )
}

export default Name;