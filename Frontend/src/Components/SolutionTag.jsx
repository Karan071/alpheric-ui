import React from "react";

const SolutionTag = ({ label, onClick, className }) => {
    return (
        <button
            className={`px-3 py-2 m-2 border rounded-[70px] ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default SolutionTag;
