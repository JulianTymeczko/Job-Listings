import "./Nav.css";
export default function Nav({ tags, setTags }) {
  // Function to remove an item from the array
  const removeItem = (itemToRemove) => {
    // Use the spread operator to create a new array without the item to be removed
    const updatedItems = tags.filter((item) => item !== itemToRemove);

    // Update the state with the new array
    setTags(updatedItems);
  };

  return (
    <>
      {tags?.length > 0 && (
        <nav id="nav">
          <div>
            {tags?.map((el) => (
              <div key={el} id="tag">
                <h3>{el}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="14"
                  onClick={() => {
                    removeItem(el);
                  }}
                >
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </div>
            ))}
          </div>
          <div>
            <h4
              onClick={() => {
                setTags([]);
              }}
            >
              Clear
            </h4>
          </div>
        </nav>
      )}
    </>
  );
}
