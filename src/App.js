import "./Reset.css";
import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import SelectedBeast from "./component/SelectedBeast/SelectedBeast";
import { useState } from "react";
import data from "./data.json"
import Fuse from "fuse.js"

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function handleModal(beast){
    setShowModal(!showModal)
    setModalContent(beast)
  }
  function closeModal(beast){
    setShowModal(!showModal)
    setModalContent(beast)
  }

  const [beastData, setBeastData] = useState(data);

  function handleBeastSearch(event){
    const beastNum = parseInt(event.target.value)
    const filteredBeasts= data.filter((beast) => beast.horns === beastNum);
    event.target.value === "" ? setBeastData(data) : setBeastData(filteredBeasts);
  }

  const [beastKeyword, setBeastKeyword] = useState({keyword:""});

  function handleBeastSearchKeyword(event){
    const options = {
    keys: ["keyword"]
    };
    const fuse = new Fuse(data, options);
  //  const beastKeyword = [event.target.value]
    const searchResults = fuse.search(event.target.value);
    console.log(searchResults)
    const filteredBeasts= data.filter((beast) => beast.keyword === searchResults);
    console.log(filteredBeasts)
    event.target.value === "" ? setBeastData(data) : setBeastData(searchResults);

  }

  return (
    <div className="App">
      <Header />
      <form className='beastSearch-container'>
          <legend>Beast Search</legend>
          <label htmlFor="horns">Number of Horns</label>
          <select name="selectedHorns" id="horns" onChange={handleBeastSearch}>
            <option value={""}> All </option>
            <option value={"1"}> 1 </option>
            <option value={"2"}> 2 </option>
            <option value={"3"}> 3 </option>
            <option value={"100"}> 100</option>
          </select>
          <label htmlFor="keyword">Keyword</label>
          <input typeof='text' name="keyword" onChange={handleBeastSearchKeyword} placeholder='Keyword of Beast'></input>
          {/* <input type='text' name="keyword"  placeholder='Keyword of Beast'></input> */}
          {/* <button type="submit" onSubmit={handleBeastSearchKeyword}> Search</button>       */}
      </form>
      <Main data={beastData} openModal={handleModal} modalContent={modalContent} />
      <Footer />
      {showModal && <SelectedBeast modalContent={modalContent} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
