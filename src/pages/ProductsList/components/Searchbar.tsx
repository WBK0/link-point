type SearchbarProps ={
  search: string,
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Searchbar = ({ search, handleSearch } : SearchbarProps) => {
  return (
    <input
      type="text"
      placeholder="What are you looking for?"
      value={search}
      onChange={handleSearch}
      className="ring-2 ring-zinc-500 outline-none w-full py-1 px-3 rounded-full text-lg font-semibold focus:ring-blue-500"
    />
  )
}

export default Searchbar;