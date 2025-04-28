import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search..."
        className="h-9 rounded-md border border-input bg-background px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <kbd className="pointer-events-none absolute right-2.5 top-2.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </div>
  )
}
