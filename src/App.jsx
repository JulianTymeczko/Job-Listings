import "./App.css";
import data from "./data.json";
import "./reset.css";
import Nav from "./Nav";
import { useEffect, useState } from "react";

function App() {
  const [tags, setTags] = useState([]);
  const addTag = (el) => {
    for (let x of tags) {
      if (el == x) {
        return;
      }
    }
    setTags([...tags, el]);
  };
  function isSubset(subArray, mainArray) {
    for (let i = 0; i < subArray.length; i++) {
      if (mainArray.indexOf(subArray[i]) === -1) {
        return false;
      }
    }
    return true;
  }

  return (
    <>
      <main>
        <Nav tags={tags} setTags={setTags}></Nav>
        {data
          .filter((el) => {
            return isSubset(tags, [
              ...el.languages,
              ...el.tools,
              el.role,
              el.level,
            ]);
          })
          .map((el) => (
            <>
              <div className="job-card" key={el.id}>
                {el.featured && <div className="green-line"></div>}
                <div>
                  <img
                    src={`./assets${el.logo.slice(1)}`}
                    alt=""
                    height={"88px"}
                    width={"88px"}
                  />
                  <div className="right-of-image">
                    <div>
                      <h3>{el.company}</h3>
                      {el.new && <h3 id="New">NEW!</h3>}
                      {el.featured && <h3 id="Featured">FEATURED</h3>}
                    </div>
                    <div>
                      <h1>{el.position}</h1>
                    </div>
                    <div>
                      <h2>
                        {el.postedAt} <span>.</span>
                      </h2>
                      <h2>
                        {el.contract} <span>.</span>
                      </h2>
                      <h2>{el.location}</h2>
                    </div>
                  </div>
                </div>
                <div className="tags">
                  <h3
                    onClick={() => {
                      addTag(el.role);
                    }}
                  >
                    {el.role}
                  </h3>
                  <h3
                    onClick={() => {
                      addTag(el.level);
                    }}
                  >
                    {el.level}
                  </h3>
                  {el.languages.map((item) => (
                    <>
                      <h3
                        onClick={() => {
                          addTag(item);
                        }}
                      >
                        {item}
                      </h3>
                    </>
                  ))}
                  {el.tools.map((item) => (
                    <>
                      <h3
                        onClick={() => {
                          addTag(item);
                        }}
                      >
                        {item}
                      </h3>
                    </>
                  ))}
                </div>
              </div>
            </>
          ))}
      </main>
    </>
  );
}

export default App;
