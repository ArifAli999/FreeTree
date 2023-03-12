import React, { useState } from 'react'
import DraggableList from './Droppable';

 
function PortalComp({ inputs , setInputs}) {

    const [isDropped, setIsDropped] = useState(false);
 

 
    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        }
    }
    const items = ['hi', 'bye']

  return (
      <div className=" flex justify-center items-center mt-4 ">
          <div className="min-h-[80%] w-full  flex flex-col shadow-md rounded-lg overflow-hidden mt-6 border border-black ">
              <div className="h-10 flex items-center bg-gray-800 px-2 dark:dark:bg-gray-800">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 w-full h-5 rounded-full bg-gray-400/90 flex items-center px-6">
                      <span className='text-xs '>https://www.freetree.com/pagetitle</span>
                  </div>
              </div>
              <div className="flex-1 p-4 bg-white dark:bg-slate-700">
                  {/* Your component goes here */}
                  <h1 className="text-xl font-bold mb-4">Hello World</h1>
                  <DraggableList inputs={inputs} setInputs={setInputs}/>
              </div>
          </div>
      </div>
  )
}

export default PortalComp