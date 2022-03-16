import React, { FC } from 'react';

interface ButtonProps {
    title?: string;
}

const Tag: FC<ButtonProps> = ({ title = "Submit" }) => {
    return (
        <button type="button" className="btn btn-primary">
            {title}
        </button>
    )
}

export default Tag;