import { useSelector } from "react-redux";
import CustomRange from './CustomRange'
import { secondsToTime } from 'utils'
import { Icon } from 'icons'

function FullScreenPlayer({ toggle, state, controls, volumeIcon }) {
  
    const { current } = useSelector(state => state.player )
  
    return (
    <div className="h-full relative" onClick={controls[state?.playing ? 'pause' : 'play']}>
       <div style={{backgroundImage: `url(${current.image})`}} className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30" />
       <div className="absolute top-14 left-8 opacity-70 gap-x-4 text-white flex items-center">
        <Icon size={34} name='logo' />
        <div className="text-xs">
            <p>PLAYING FROM PLAYLIST</p>
            <h6 className="font-semibold">{current.title}</h6>
        </div>
       </div>
       <div className="absolute left-8 bottom-36 flex items-center gap-x-5">
            <img src={current.image} className='w-24 h-24 object-cover' />
            <div className="self-end">
                <h3 className="text-3xl font-bold">{current.title}</h3>
                <p className="text-sm font-medium opacity-50">{current.description}</p>
            </div>
       </div>
       <div onClick={e => {
        e.stopPropagation() 
       }} className="w-full absolute bottom-4 flex flex-col px-8 items-center">
            <div className='w-full flex items-center mb-1.5 gap-x-2'>
                <div className='text-[0.688rem] text-white text-opacity-70'>
                    {secondsToTime(state?.time)}
                </div>
                <CustomRange 
                    step={0.1}
                    min={0}
                    max={state?.duration || 1}
                    value={state?.time}
                    onChange={value => controls.seek(value)}
                />
                <div className='text-[0.688rem] text-white text-opacity-70'>
                    {secondsToTime(state?.duration)}
                </div>
            </div>
                <div className="flex items-center gap-x-5">
                    <button 
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name='shuffle' />
                    </button>
                    <button 
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name='playerPrev' />
                    </button>
                    <button 
                        onClick={controls[state?.playing ? 'pause' : 'play']} className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]">
                        <Icon size={24} name={state?.playing ? 'pause' : 'play'} />
                    </button>
                    <button 
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name='playerNext' />
                    </button>
                    <button 
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name='repeat' />
                    </button>
                </div>
            <div className="flex items-center absolute bottom-3 right-6 gap-x-3">
                <button 
                    onClick={controls[state.muted ? 'unmute' : 'mute']}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name={volumeIcon} />
                </button>
                <div className='w-[5.813rem] max-w-full'>
                    <CustomRange 
                        step={0.01}
                        min={0}
                        max={1}
                        value={state.muted ? 0 : state?.volume}
                        onChange={value => { 
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
                <button
                    onClick={toggle}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
                >
                    <Icon size={24} name='fullScreenOff' />
                </button>
            </div>
        </div>
    </div>
  )
}
export default FullScreenPlayer;