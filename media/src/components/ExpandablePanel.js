import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    let content = '';

    if (expanded) {
        content = <div className="p-2 border-t">
            {children}
        </div>;
    }

    return (
        <div className="mb-2 border rounded">
            <div onClick={handleClick} className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                {expanded ? <GoChevronDown/> : <GoChevronLeft />}
            </div>
            {content}
        </div>
    );
}

export default ExpandablePanel;