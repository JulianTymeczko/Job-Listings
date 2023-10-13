import "./App.css";
import data from "./data.json";
import "./reset.css";
function App() {
  return (
    <>
      <main>
        {data.map((el) => (
          <div className="job-card" key={el.id}>
            <div>
              <img
                src={`/src/assets${el.logo.slice(1)}`}
                alt=""
                height={"88px"}
                width={"88px"}
              />
              <div>
                <div>
                  <h3>{el.company}</h3>
                  {el.new && <h3>NEW!</h3>}
                  {el.featured && <h3>FEATURED</h3>}
                </div>
                <div>
                  <h1>{el.position}</h1>
                </div>
                <div>
                  <h2>{el.postedAt}</h2>
                  <h2>{el.contract}</h2>
                  <h2>{el.location}</h2>
                </div>
              </div>
            </div>
            <div>
              <h3>{el.role}</h3>
              <h3>{el.level}</h3>
              {el.languages.map((item) => (
                <>
                  <h3>{item}</h3>
                </>
              ))}
              {el.tools.map((item) => (
                <>
                  <h3>{item}</h3>
                </>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
