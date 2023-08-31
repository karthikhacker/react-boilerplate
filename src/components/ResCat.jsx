import React, { useState } from 'react'
import ItemList from './ItemList';

const ResCat = ({ c, show, setShow }) => {
    //console.log(c);
    const handleShow = () => {
        setShow()
    }
    return (
        <div className='w-6/12'>
            <div className='mb-3 shadow-lg'>
                <div className='flex justify-between  p-2 cursor-pointer' onClick={handleShow}>
                    <span className='font-medium'>{c?.card?.card?.title}  ({c?.card?.card?.itemCards.length}) </span>
                    <span className='cursor-pointer'>&#x2193;</span>
                </div>
                {/* controlled component */}
                {show && (<ItemList itemCards={c?.card?.card?.itemCards} />)}

            </div>
        </div>
    )
}

export default ResCat