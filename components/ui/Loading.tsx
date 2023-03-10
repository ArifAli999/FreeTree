import React from "react";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <svg
                className="animate-spin h-10 w-10 text-gray-500 mb-4"
                viewBox="0 0 24 24"
            >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10-10.582A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4zm2 5.291l3 2.647A7.962 7.962 0 0120 12h-4z"></path>
            </svg>
            <p className="text-gray-500 text-xl">Loading...</p>
        </div>
    );
};

export default Loading;
