import Link from "next/link"

export function MainNav() {
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        <span className="font-bold">DataViz</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="#" className="transition-colors hover:text-foreground/80">
          Dashboard
        </Link>
        <Link href="#" className="transition-colors hover:text-foreground/80">
          Charts
        </Link>
        <Link href="#" className="transition-colors hover:text-foreground/80">
          Reports
        </Link>
        <Link href="#" className="transition-colors hover:text-foreground/80">
          Analytics
        </Link>
        <Link href="#" className="transition-colors hover:text-foreground/80">
          Settings
        </Link>
      </nav>
    </div>
  )
}
