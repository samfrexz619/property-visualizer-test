import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DefaultLayout: React.FC = () => {
  const links = [
    {
      routeName: 'home',
      route: '/',
      id: 1
    },
    {
      routeName: 'about',
      route: '#',
      id: 2
    },
    {
      routeName: 'career',
      route: '#',
      id: 3
    },
  ]
  return (
    <>
      <header className='w-full px-5 xl:p-x-0 bg-grey-10 h-20 sticky top-0 z-50'>
        <nav className='text-white w-full xl:w-[1200px] mx-auto h-full flex items-center justify-between'>
          <Link to='/' className='block text-2xl italic font-bold'>
            <span>Propertyvisualizer</span>
          </Link>

          <ul className='hidden md:flex items-center gap-x-7 transition-all duration-200'>
            {links.map(link => (
              <li key={link.id} className='font-semibold capitalize hover:text-yellow-10'>
                <Link to={link.route}>{link.routeName}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className='w-full bg-blue-50 py-16'>
        <section className='w-full xl:w-[1200px] mx-auto min-h-[60vh] px-5 xl:px-0'>
          <Outlet />
        </section>
      </main>
      <footer className='w-full bg-grey-10 h-[200px]'>

      </footer>
    </>
  )
}

export default DefaultLayout