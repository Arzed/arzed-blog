import Link from 'next/link'

export function Navigation() {
  return (
    <nav>
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="https://arzed.netlify.app" className="nav-link">
        Portfolio
      </Link>
    </nav>
  )
}
