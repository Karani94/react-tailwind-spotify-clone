import { Route, Switch } from 'react-router-dom';
import Auth from './Navbar/Auth';
import Navigation from './Navbar/Navigation';
import Search from './Navbar/Search'

function Navbar() {
  
  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
        <Navigation />
    
        <Switch>
            <Route exact path='/'>
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/collection'>
              Collection
            </Route>
          </Switch>

        <Auth />
    </nav>
  )
}
export default Navbar;