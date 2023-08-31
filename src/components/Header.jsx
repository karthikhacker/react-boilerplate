import React, { useContext } from 'react'
import useStatus from '../utils/useStatus';
import UserContext from '../utils/UserContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Header = () => {
    const onlineStatus = useStatus();
    const data = useContext(UserContext);
    console.log(data);
    return (
        <div className='flex justify-between items-center shadow-lg p-2'>
            <div className='logo-container'>
                <img src="https://i.pinimg.com/564x/05/64/db/0564db618b8e778534e882cfda48dd2f.jpg" className='w-20' />
            </div>
            <ul className='flex justify-between items-center '>
                <li className='mr-5'>Online status : {onlineStatus ? "ONLINE" : "FALSE"} </li>
                <li className='mr-5'>Home</li>
                <li className='mr-5'>About</li>
                <li className='mr-5'><Link to="/cart">Cart</Link></li>
                <li className='mr-5'>{data?.loggedInUser}</li>

            </ul>
        </div>
    )
}

export default Header