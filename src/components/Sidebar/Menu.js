import { Icon } from 'icons'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                <NavLink activeClassName='bg-active text-white' exact to={'/'} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                    <span>
                        <Icon name='home' />
                    </span>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='bg-active text-white' exact to={'/search'} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                    <span>
                        <Icon name='search' />
                    </span>
                    Search
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='bg-active text-white' exact to={'/collection'} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                    <span>
                        <Icon name='collection' />
                    </span>
                    Your Library
                </NavLink>
            </li>
        </ul> 
    </nav>
  )
}
export default Menu;