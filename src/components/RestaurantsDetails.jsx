import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { MENU_URL } from './constant';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ResCat from './ResCat';
const RestaurantsDetails = () => {
    const [show, setShow] = useState(0);
    const params = useParams();
    const resInfo = useRestaurantMenu(params?.id);
    // console.log(resInfo);
    const categories = resInfo !== null && resInfo?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);
    return (
        <div className=' mt-4 ml-28'>
            <h2 className='subpixel-antialiased font-bold '>{resInfo?.[0]?.card?.card?.info?.name}</h2>
            <h5>{resInfo?.[0]?.card?.card?.info?.costForTwoMessage}</h5>
            {categories !== false && categories.map((c, index) => <ResCat c={c} show={index === show && true} setShow={() => setShow(index)} key={c?.card?.card?.title} />)}
        </div>
    )
}

export default RestaurantsDetails