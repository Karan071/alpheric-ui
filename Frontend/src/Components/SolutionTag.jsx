import React from "react";

const SolutionTag = ({tagName}) => {
    return (
        <button
            className={`font-urbanist px-3 py-1 m-2.5 border rounded-[70px] font-[32px]`}
        >
            {tagName}
        </button>
    );
};

export default SolutionTag;
