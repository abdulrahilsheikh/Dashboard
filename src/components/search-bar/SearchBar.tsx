export const SearchBar = ({ search, rows, setSearch, setOpenAddNew }: any) => (
  <form className="flex gap-4 justify-center p-1 mr-2">
    {search && !rows.length && (
      <button
        onClick={setOpenAddNew}
        type="button"
        className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        Add new item
      </button>
    )}
    <input
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      id='"form-subscribe-Search'
      className=" rounded-lg border-transparent flex-1 appearance-none  border-gray-300 p-2 w-full h-full px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      placeholder="Search"
    />
  </form>
);
