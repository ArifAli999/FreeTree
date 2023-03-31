import { ColorSetup, FacebookStyles, TwitterStyles } from '@/config/colorSetup';
import { motion, MotionStyle } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function BuildSocialComponent({ item, index, handleDragEnd }) {

    const [isDragging, setIsDragging] = useState(false);
    const [boxProps, setBoxProps] = useState<ColorSetup>()

    useEffect(() => {
        if (!item.value) return null;

        if (item.value === 'Twitter') {
            setBoxProps(TwitterStyles);
        }

        else if (item.value === 'Facebook' || item.value === 'facebook') {
            setBoxProps(FacebookStyles);
        }
    }, [item.value])



    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDrag = (event, info) => { };

    const handleDragStop = (event, info) => {
        setIsDragging(false);
        handleDragEnd(index, info);
    };

    function generateStyle(value): MotionStyle {

        if (value === 'Facebook') {
            return {
                backgroundColor: 'red',
                color: 'white'
            }
        }
    }

    return (

        item.value.length > 0 ? <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragStop}
            animate={{ opacity: isDragging ? '0.6' : '1', color: isDragging ? 'black' : 'white' }}
            style={generateStyle(item.value)}
            className='text-white bg-black rounded-md shadow-md dark:bg-slate-800 p-4'
        >
            {item.value}
        </motion.div> : null

    );
}

export default BuildSocialComponent