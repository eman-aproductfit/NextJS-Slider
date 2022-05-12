import {useState } from 'react';
import styles from '../styles/Home.module.css';
import Modal from "../components/Modal";
export default function Home() {
  const [showModal, setShowModal]= useState(false);
  return (
    <div className={styles.container}>
    <h2>implementing modal</h2>
     <button onClick={()=> setShowModal(true)} className="btn">
       Whats the weather?</button>
       <Modal show={showModal} onClose={()=> setShowModal(false)}>
         lorem impoms efiwifw
       </Modal>
    </div>
  )
}
