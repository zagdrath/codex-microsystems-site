import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <Link href='/' className='nav-logo'>
          <a>
            <Image src='/images/logo.png' alt='Codex Microsystems' height={40} width={110} className='nav-logo-image' />
          </a>
        </Link>
        <ul className='nav-items'>
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
      </div>
    </div>
  )
}
