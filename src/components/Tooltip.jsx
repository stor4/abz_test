import React, { useState } from 'react';

const Tooltip = ({ text, tooltipText }) => {
    const [visible, setVisible] = useState(false)

    const showTooltip = () => {
        setVisible(true)
    };

    const hideTooltip = () => {
        setVisible(false)
    };

    return (
        <div className="tooltip">
            <span 
                className="tooltip-trigger" 
                onMouseEnter={showTooltip} 
                onMouseLeave={hideTooltip}
            >
                {text}
            </span>
            {visible && <div className="tooltip-content">{tooltipText}</div>}
        </div>
    );
};

export default Tooltip;
