import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {url: '/search', text: 'Search 🔍'},
    {url: '/news', text: 'News 📰'},
    {url: '/image', text: 'Images 📷'},
    {url: '/video', text: 'Videos 🎬'},
]

const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map(({url, text}, index) => (
            <NavLink to={url} className={({isActive}) => isActive ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 mx-2 mt-2': 'mx-2 mt-2'} key={index} >
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Links