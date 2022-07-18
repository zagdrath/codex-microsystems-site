import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div className="header">
      <div className="nav">
        <Link href='/' className='nav-logo'>
          <Image src='/images/logo.png' alt='Codex Microsystems' height={40} width={110} className='nav-logo-image' />
        </Link>
        <ul className={isNavExpanded ? "nav-items-expanded" : "nav-items"}>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-item-link'>Home</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href=''>
              <a className='nav-item-link'>Projects</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href=''>
              <a className='nav-item-link'>Contact</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href=''>
              <a className='nav-item-link'>About</a>
            </Link>
          </li>
        </ul>
        <button onClick={() => { setIsNavExpanded(!isNavExpanded) }} className='menu'>
          <Image src='/images/menu.svg' alt='Menu' height={30} width={30} />
        </button>
      </div>
    </div>
  )
}
