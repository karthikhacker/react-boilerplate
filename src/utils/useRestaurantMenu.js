import { useEffect, useState } from "react";
import { MENU_URL } from "../components/constant";
const useRestaurantMenu = (id) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const res = await fetch(`${MENU_URL}&restaurantId=${id}`)
        const menuData = await res.json();
        // console.log(menuData.data);
        setResInfo(menuData?.data?.cards)
    }
    return resInfo;
}

export default useRestaurantMenu;