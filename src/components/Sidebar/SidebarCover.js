import { useDispatch, useSelector } from "react-redux";
import { Icon } from 'icons'
import { setSidebar } from 'stores/player'

function SidebarCover() {

  const dispatch = useDispatch()  
  const current = useSelector(state => state.player.current) 
  
  return (
    <div className='pt-[100%] relative bg-black group'>
        <img src={current.image} className='w-full h-full object-cover absolute top-0 left-0' />
        <button 
            onClick={() => dispatch(setSidebar(false))}
            className='w-6 h-6 bg-black rounded-full opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rotate-180 absolute top-1 right-1 flex items-center justify-center'>
                <Icon name='arrowLeft' size={16} />
        </button>
    </div>
  )
}
export default SidebarCover;