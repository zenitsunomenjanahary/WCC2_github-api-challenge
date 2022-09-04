import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flex flex-col lg:flex-row ">
        <Form/>
      </div>
    </div>
  );
}

export default App;
