import "./App.css";
import Search from "./components/search/Search";

function App() {
  const handlerOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handlerOnSearchChange} />
    </div>
  );
}

export default App;
