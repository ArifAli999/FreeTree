import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BuildSocialComponent from "./BuildSocialComponent";

;

const DraggableList = ({ inputs, setInputs }) => {

    const handleDragEnd = (startIndex, dragInfo) => {
        const dragY = dragInfo.point.y;
        const itemHeight = 200; // adjust this to match your item height
        let endIndex = Math.round(dragY / itemHeight);

        if (endIndex > startIndex) {
            // dragging down
            endIndex--;
        }

        const [reorderedItem] = inputs.splice(startIndex, 1);
        inputs.splice(endIndex, 0, reorderedItem);
        setInputs([...inputs]);
        
    };

    return (
        <div className="flex flex-col gap-4">
            {inputs.map((item, index) => (
                <BuildSocialComponent
                    key={index}
                    item={item}
                    index={index}
                    handleDragEnd={handleDragEnd} />
            ))}
        </div>
    );
};

export default DraggableList;