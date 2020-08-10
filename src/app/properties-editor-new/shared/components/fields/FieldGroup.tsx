import React from 'react';

interface FieldGroupProps {
    group: string;
}
export const FieldGroup: React.FC<FieldGroupProps> = ({ children, group }) => {
    return (
        <div className="flex-column">
            <hr className="hr hr-white margin-top-m " />
            <div className="padding-m padding-left-s">{group.toUpperCase()}</div>
            <div className="flex-column">
                {children}
            </div>
        </div>
    );
}
