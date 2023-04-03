import { ColorSetup, FacebookStyles, TwitterStyles } from '@/config/colorSetup';
import { motion, MotionStyle } from 'framer-motion';
import { ArrowRightIcon, Facebook, FacebookIcon, Instagram, LucideFacebook, Twitter } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function BuildSocialComponent({ item, index, handleDragEnd }) {

    const [isDragging, setIsDragging] = useState(false);
    const [boxProps, setBoxProps] = useState<ColorSetup>()
    const [boxText, setText] = useState();





    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDrag = (event, info) => { };

    const handleDragStop = (event, info) => {
        setIsDragging(false);
        handleDragEnd(index, info);
    };

    function generateStyle(value): MotionStyle {

        if (value === 'facebook') {
            return {

                borderColor: '#4267B2',
                borderWidth: '2px',
                color: 'white',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                WebkitBackdropFilter: 'blur(2.5px)',

            }
        }
        else if (value === 'twitter' || value === 'Twitter') {
            return {
                borderColor: '#1DA1F2',
                borderWidth: '2px',
                color: 'white',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                WebkitBackdropFilter: 'blur(2.5px)',
            }
        }
        else if (value === 'instagram' || value === 'Instagram') {
            return {
                borderColor: '#FFC0CB',
                borderWidth: '2px',
                color: 'white',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                WebkitBackdropFilter: 'blur(2.5px)',

            }
        }
    }



    return (

        item.value && item.value.length > 0 ? <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragStop}
            animate={{ opacity: isDragging ? '0.4' : '0.88', color: isDragging ? 'black' : 'white' }}
            style={generateStyle(item.key)}
            className='text-white bg-black shadow-sm shadow-black/80 flex flex-row items-center cursor-pointer  transition-all duration-150 justify-between rounded-md  dark:bg-slate-800 p-4'
        >

            {item.key === 'facebook' ? (
                <div className='flex flex-row gap-4 items-center'>
                    <FacebookIcon
                        color='#4267B2' />
                    <p className=''>{item.value}</p>
                </div>
            ) : null}
            {item.key === 'twitter' ? (
                <div className='flex flex-row gap-4 items-center'>
                    <Twitter color='#1DA1F2' />
                    <p className=''>{item.value}</p>
                </div>
            ) : null}
            {item.key === 'instagram' ? (
                <div className='flex flex-row gap-4 items-center'>
                    <Instagram color='#FFC0CB' />
                    <p className=''>{item.value}</p>
                </div>
            ) : null}

            <ArrowRightIcon />

        </motion.div> : null

    );
}

export default BuildSocialComponent