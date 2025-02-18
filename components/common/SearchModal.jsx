import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";

const SearchModal = () => {
  const router = useRouter();
  const handleSearchSubmit = (e) => {
    const value = e.target[0].value;
    console.log("searching...", value);
    router.push(`/search?q=${value}`);
  };
  return (
    <dialog id="search-modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box relative">
        <form method="dialog">
          <button className="btn kbd btn-sm absolute right-6 top-4">esc</button>
        </form>
        <form
          className="form-control relative my-6"
          onSubmit={handleSearchSubmit}
        >
          <label className="label">
            <span className="label-text">Search</span>
          </label>
          <input
            tabIndex={0}
            type="text"
            placeholder="videos, playlists, and more"
            className="input input-bordered"
          />
          <button
            className="btn btn-sm absolute bottom-2 right-2"
            type="submit"
          >
            <BiSearch className="" size={32} />
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default SearchModal;
