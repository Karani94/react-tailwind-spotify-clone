import logo from 'img/logo.svg'
import { Icon } from 'icons'
import Menu from './Sidebar/Menu'
import Playlists from './Sidebar/Playlists'
import Download from './Sidebar/Download'
import { useSelector } from 'react-redux'
import SidebarCover from './Sidebar/SidebarCover'

function Sidebar() {

  const sidebar = useSelector(state => state.player.sidebar)

  return (
    <aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
      <a href='#' className='mb-7 px-6'>
          <img src={logo} className='h-10'/>
      </a>
      
      <Menu />
      
      <nav className='mt-6'>
          <ul>
              <li>
                  <a href='#' className='flex items-center group py-2 px-6 text-sm text-link font-semibold hover:text-white'>
                    <span className='w-6 h-6 flex items-center justify-center group-hover:bg-opacity-100 bg-opacity-70 mr-4 bg-white rounded-sm text-black'>
                      <Icon name='plus' size={12} />
                    </span>
                    Create Playlist
                  </a>
              </li>
              <li>
                  <a href='#' className='flex items-center group py-2 px-6 text-sm text-link font-semibold hover:text-white'>
                    <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 rounded-sm text-white opacity-70 group-hover:opacity-100'>
                      <Icon name='heartFilled' size={12} />
                    </span>
                    Liked Songs
                  </a>
              </li>
          </ul>
      </nav>

      <Playlists />
      <Download />

      {sidebar && <SidebarCover />}
    </aside>
  )
}
export default Sidebar;