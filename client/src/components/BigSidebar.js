import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import Wrapper from '../assets/wrappers/BigSidebar'
import { Link } from 'react-router-dom'

const BigSidebar = () => {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Link to='/' className='logo-text'>AppTrak</Link>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
