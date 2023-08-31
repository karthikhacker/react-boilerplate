import React from 'react'
import { IMAGE_URL } from './constant'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ restaurant }) => {
    //console.log(restaurant)
    return (
        <div className=' w-72  h-80  pb-4 text-black  rounded-xl '>
            <Link to={`restaurants/${restaurant?.info?.id}`}>
                <div className='w-full rounded-xl' key={restaurant?.info?.id}>
                    <img className='w-full h-40 rounded-t-xl' src={`${IMAGE_URL}/${restaurant?.info?.cloudinaryImageId}`} />
                </div>
                <div className='p-2'>
                    <h5>{restaurant?.info?.name}</h5>
                </div>
                <div className='flex flex-wrap p-2 '>
                    <span className='text-xs'>{restaurant?.info?.cuisines.join(",")}</span>
                </div>
                <span className='p-2'>{restaurant?.info.avgRating}</span>
                <p className='p-2'>{restaurant?.info?.costForTwo}</p>
            </Link>

        </div>
    )
}

//Higher order component - Takes component as input and returns a new component
export const isOpen = () => {
    return ({ restaurant }) => {
        return (
            <div>
                <label>Open</label>
                <RestaurantCard restaurant={restaurant} />
            </div>
        )
    }
}

export default RestaurantCard