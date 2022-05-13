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
       <div tabindex="-1" styles="margin-top:30px">
                            <div className="float-left">
                                <h1> Davao City</h1>
                                <h3> 2022-05-13 00:00</h3>
                                <h4> Humidity:84</h4>
                                <h4> Chance of rain:0%</h4>
                                <div class="weathercondition">Partly cloudy</div>
                            </div>
                            <div className="float-right">
                                <div className="icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/night/116.png" />
                                </div>
                            </div>
                            <div className="reset">
                            </div>
                        </div>
       </Modal>
    </div>
  )
}
