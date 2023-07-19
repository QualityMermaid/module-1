import "./Reset.css";
import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Modal from "./component/Modal/Modal";
import { useState } from "react";

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

  return (
    <div className="App">
      <Header />
      <Main openModal={handleModal} modalContent={modalContent}/>
      <Footer />
      {showModal && <Modal modalContent={modalContent} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
