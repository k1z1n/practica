import React from "react";
import arrow from '/products/arrow.svg'
import './CustomUrl.css'

export default function CustomUrl({ values }) {
    const valueArray = values.split(',').map((value) => value.trim());
    return (
        <div className='custom-url'>
            {valueArray.map((value, index) => (
                <div key={index}>
                    {value}
                    {index < valueArray.length - 1 && (
                        <img src={arrow} alt="arrow" />
                    )}
                </div>
            ))}
        </div>
    );
}