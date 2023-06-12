import { Icon } from 'icons'

function Search() {
  return (
    <div className="mr-auto relative ml-4">
      <label htmlFor='search-input' className='w-12 h-10 text-black flex absolute top-0 left-0 items-center justify-center'>
        <Icon name='search' size={24}/>
      </label>
        <input autoFocus={true} type='text' id='search-input' className="h-10 pl-12 font-medium outline-none text-black bg-white rounded-3xl placeholder-black/60 max-w-full w-[22.75rem] text-sm" placeholder="What do you want to listen to?" />
    </div>
  )
}
export default Search;