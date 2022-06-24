import { motion } from 'framer-motion';

interface FramerAnimationProps {
    children: any;
    className?: string;
    style?: Record<string, any>;
    damping?: number;
    x?: number;
}

const FramerAnimation = (props: FramerAnimationProps) => {
    const {
        children,
        className = '',
        damping = 10,
        x = -300,
        style = {},
    } = props;
    return (
        <motion.div
            initial={{ x }}
            animate={{
                x: 0,
            }}
            transition={{
                type: 'spring',
                damping: damping,
                stiffness: 100,
            }}
            style={style}
            className={className}
        >
            {children}
        </motion.div>
    );
};
export default FramerAnimation;
