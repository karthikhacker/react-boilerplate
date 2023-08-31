import React, { useEffect, useState } from 'react'
import { URL } from './constant';
import RestaurantCard, { isOpen } from './RestaurantCard';
import useStatus from '../utils/useStatus';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantIsOpen = isOpen(RestaurantCard);
    useEffect(() => {
        fetchRestaurant()
    }, [])
    const fetchRestaurant = async () => {
        const res = await fetch(URL);
        const jsonData = await res.json();
        setListOfRestaurants(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurant(jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const handleTopRated = () => {
        const topRated = listOfRestaurants.length > 0 && listOfRestaurants.filter(restaurant => restaurant?.info.avgRating > 4);
        setFilterRestaurant(topRated);
    }
    const handleSearch = () => {
        const filterText = listOfRestaurants.filter(restaurant => restaurant?.info.name.toLowerCase().includes(searchText));
        setFilterRestaurant(filterText);
    }
    console.log(listOfRestaurants)

    const onlineStatus = useStatus();
    if (onlineStatus === false) return <h1>Looks like you are offline!</h1>
    return (
        <div className='  p-2 font-sans'>
            <h2>Restaurants list</h2>
            <div className='flex justify-between items-center mb-3 mt-3'>
                <div className='search '>
                    <input className=' border-2 border-gray-100 p-1 mr-1 w-72 outline-0' type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button onClick={handleTopRated}>Filter top rated</button>
            </div>
            <div className='grid grid-cols-4 grid-rows-4 m-0 p-0'>
                {
                    filterRestaurant?.length !== 0 && filterRestaurant?.map(restaurant => (
                        restaurant?.info?.isOpen ? <RestaurantIsOpen key={restaurant.info?.id} restaurant={restaurant} /> : <RestaurantCard key={restaurant.info?.id} restaurant={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body