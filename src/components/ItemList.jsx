import React from 'react'
import { IMAGE_URL } from './constant';
const ItemList = ({ itemCards }) => {
    //console.log(itemCards);
    return (
        <div className='p-2 mt-4 text-center transition-transform duration-1000'>
            {itemCards?.map(item => (
                <div key={item?.card?.info?.id} className=' flex justify-between mb-4 p-4 text-left font-light border-b-2 '>
                    <div>
                        <h5>{item?.card?.info?.name}</h5>
                        <span> &#8377; {item?.card?.info?.price / 100}</span>
                        <p className=' w-60  font-light text-gray-300 mt-2 text-sm'>{item?.card?.info?.description}</p>
                    </div>
                    <div className='w-40 relative'>
                        <img src={`${IMAGE_URL}/${item?.card?.info?.imageId}`} className='w-full' />
                        <div className='absolute top-20 left-4'>
                            <button className='p-1 w-32 outline-none border-none shadow-lg  bg-emerald-500 text-white '>ADD</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default ItemList