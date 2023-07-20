import "./Reset.css";
import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import SelectedBeast from "./component/SelectedBeast/SelectedBeast";
import { useState } from "react";
import data from "./data.json"

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
    console.log(beastNum)
    console.log("beast data  " + beastData)

    const filteredBeasts= data.filter((beast) => beast.horns === beastNum);
    console.log(beastData)
    console.log(filteredBeasts)

  
  event.target.value === "" ? setBeastData(data) : setBeastData(filteredBeasts);



  console.log("data" + data)
  console.log("filtered " + filteredBeasts)
  console.log("data to filter" + data)
  console.log(event.target.value )
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
      </form>
      <Main data={beastData} openModal={handleModal} modalContent={modalContent} />
      <Footer />
      {showModal && <SelectedBeast modalContent={modalContent} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
