import { useState } from "react";
import { motion } from "framer-motion";

const DraggableItem = ({ item, index, handleDragEnd }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDrag = (event, info) => { };

    const handleDragStop = (event, info) => {
        setIsDragging(false);
        handleDragEnd(index, info);
    };

    return (
        <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragStop}
            animate={{ opacity: isDragging ? 0.5 : 1 }}
            style={{ paddingBottom: "10px" }}
            className='bg-slate-800 p-4'
        >
            {item.value}
        </motion.div>
    );
};

const DraggableList = ({ items }) => {
    const [listItems, setListItems] = useState(items);

    const handleDragEnd = (startIndex, dragInfo) => {
        const dragY = dragInfo.point.y;
        const itemHeight = 200; // adjust this to match your item height
        let endIndex = Math.round(dragY / itemHeight);

        if (endIndex > startIndex) {
            // dragging down
            endIndex--;
        }

        const [reorderedItem] = listItems.splice(startIndex, 1);
        listItems.splice(endIndex, 0, reorderedItem);
        setListItems([...listItems]);
    };

    return (
        <div className="flex flex-col gap-4">
            {listItems.map((item, index) => (
                <DraggableItem
                    key={index}
                    item={item}
                    index={index}
                    handleDragEnd={handleDragEnd}
                />
            ))}
        </div>
    );
};

export default DraggableList;