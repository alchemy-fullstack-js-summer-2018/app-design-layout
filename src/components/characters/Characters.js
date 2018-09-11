import React, { Component } from 'react';
import styles from './Characters.css';
import mario from '../../assets/mario.jpg';
import luigi from '../../assets/luigi.jpg';
import yoshi from '../../assets/yoshi.jpg';
import dk from '../../assets/dk.jpg';
import link from '../../assets/link.jpg';
import samus from '../../assets/samus.jpg';
import kirby from '../../assets/kirby.jpg';
import fox from '../../assets/fox.jpg';
import pika from '../../assets/pika.jpg';
import puff from '../../assets/puff.jpg';
import cf from '../../assets/cf.jpg';
import ness from '../../assets/ness.jpg';
import peach from '../../assets/peach.jpg';
import bowser from '../../assets/bowser.jpg';
import drMario from '../../assets/dr_mario.jpg';
import zelda from '../../assets/zelda.jpg';
import sheik from '../../assets/sheik.jpg';
import ganondorf from '../../assets/ganondorf.jpg';
import young_link from '../../assets/young_link.jpg';
import falco from '../../assets/falco.jpg';
import mewtwo from '../../assets/mewtwo.jpg';
import pichu from '../../assets/pichu.jpg';
import ic from '../../assets/ic.jpg';
import marth from '../../assets/marth.jpg';
import roy from '../../assets/roy.jpg';
import mrGW from '../../assets/mr_g&w.jpg';

class Characters extends Component {
  render() { 
    return (
      <div className={styles.characters}>
        <h2>Every character in Melee</h2>
        <section className="characters-container">
          
          <img src={mario} alt="Mario"/>
          <img src={luigi} alt="Luigi"/>
          <img src={yoshi} alt="Yoshi"/>
          <img src={dk} alt="Donkey Kong"/>
          <img src={link} alt="Link"/>
          <img src={samus} alt="Samuss"/>
          <img src={kirby} alt="Kirby"/>
          
          
          <img src={fox} alt="Fox"/>
          <img src={pika} alt="Pikachu"/>
          <img src={puff} alt="Jigglypuff"/>
          <img src={cf} alt="Captain Falcon"/>
          <img src={ness} alt="Ness"/>
          <img src={peach} alt="Peach"/>
          <img src={bowser} alt="Bowser"/>
          
          
          <img src={drMario} alt="Dr. Mario"/>
          <img src={zelda} alt="Zelda"/>
          <img src={sheik} alt="Sheik"/>
          <img src={ganondorf} alt="Ganondorf"/>
          <img src={young_link} alt="Young Link"/>
          <img src={falco} alt="Falco"/>
          <img src={mewtwo} alt="Mewtwo"/>
          
          
          <img src={pichu} alt="Pichu"/>
          <img src={ic} alt="Ice Climbers"/>
          <img src={marth} alt="Marth"/>
          <img src={roy} alt="Roy"/>
          <img src={mrGW} alt="Mr. Game &amp; Watch"/>
          
        </section>
      </div>
    );
  }
}
 
export default Characters;