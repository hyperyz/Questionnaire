import React from 'react';
import styles from './index.module.scss';

interface IMaterialHeaderProps {
    title: string;
    desc: string;
    titleSize: string;
    descSize: string;
    titleWeight: number;
    descWeight: number;
    titleItalic: number;
    descItalic: number;
    titleColor: string;
    descColor: string;
}
function MaterialsHeader({ title, desc, titleSize, descSize, titleWeight, descWeight, titleItalic, descItalic, titleColor, descColor }: IMaterialHeaderProps): React.ReactElement {
    return (
        <div className={`${styles.container} mb-15`}>
            <h2 className='title font-weight-100' style={{ fontSize: titleSize + 'px', color: titleColor }}>
                <span className="mr-10">01.</span>
                <span className={`${!titleWeight ? 'font-bold' : ""} ${!titleItalic ? 'font-italic' : "`"}`}>{title}</span>
            </h2>
            <div className={`${styles.desc} ${!descWeight ? 'font-bold' : ""} ${!descItalic ? 'font-italic' : "`"}`} style={{ fontSize: descSize + 'px', color: descColor }}>{desc}</div>
        </div>
    )
}

export default MaterialsHeader