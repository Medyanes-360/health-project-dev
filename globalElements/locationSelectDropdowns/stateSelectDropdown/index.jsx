import { useEffect, useRef, useState } from "react";

const StateSelectDropdown = ({
  setSelectedState,
  selectedState,
  states,

  toLeft,
  toRight,
}) => {
  //  state data'mızı alıyoruz:
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [filteredStates, setFilteredStates] = useState(states);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFiltering = (e) => {
    setSearchValue(e.currentTarget.value);
    const filtered = states.filter((state) =>
      state.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredStates(filtered);
  };
  const handleSelect = (state) => {
    setSelectedState(state);
    setFilteredStates(states);
    setSearchValue("");
    setIsOpen(false);
  };
  useEffect((e) => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (document != undefined) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className="relative  w-[120px]  inline-block text-left"
    >
      <div className="w-full ">
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex   w-full py-2 h-full  overflow-hidden  items-center    justify-center   px-2  rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedState ? (
            <>
              <span className=" overflow-hidden " title={selectedState.name}>
                {selectedState.name}
              </span>
            </>
          ) : (
            <span title={"Select a state"}>State..</span>
          )}
          <svg
            className="-mr-1 ml-2 h-5 w-4"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#5E6670"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && states && (
        <div
          className={`${
            (toRight && "right-0") || (toLeft && "left-0")
          } w-[300px] max-h-[15rem] overflow-x-scroll z-[500] origin-top-right absolute      mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className=" bg-white   w-full  mt-2  px-2  ">
            <input
              value={searchValue}
              onChange={handleFiltering}
              className=" w-full outline-none p-2  text-sm  border rounded-md  "
              type="text"
              placeholder="Search.."
            />
          </div>
          <div className=" py-1">
            {filteredStates.map((state) => (
              <button
                key={state.isoCode}
                title={state.name}
                onClick={() => handleSelect(state)}
                className="flex items-center w-full truncate   px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <span className="pl-2">
                  {state.name.slice(
                    0,
                    state.name
                      .toLowerCase()

                      .indexOf(searchValue.trim().toLowerCase())
                  )}
                  <span className="font-semibold">
                    {state.name.slice(
                      state.name
                        .toLowerCase()
                        .indexOf(searchValue.trim().toLowerCase()),
                      state.name
                        .toLowerCase()
                        .indexOf(searchValue.trim().toLowerCase()) +
                        searchValue.trim().length
                    )}
                  </span>
                  {state.name.slice(
                    state.name
                      .toLowerCase()

                      .indexOf(searchValue.trim().toLowerCase()) +
                      searchValue.trim().length
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default StateSelectDropdown;
