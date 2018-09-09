import React, { Component } from 'react';
import styles from './About.css';

class About extends Component {
  render() { 
    return (
      <main className={styles.about}>
        <section className="about-container">
          <h2>Robyn Alexander Navarro de la Cruz</h2>

          <p>I am a full-stack developer with experience in HTML, CSS, JavaScript, VueJS, ReactJS, Redux, NodeJS, ExpressJS, MongoDB, Mongoose and PostgreSQL currently residing in the beautiful city of Portland. Before I realized that I wanted to become a developer, I worked with Walt Disney World as one of their managers at the All-Star Resorts, leading a group of 20+ employees.</p>

          <p>I am a people-person by nature, and my previous role as leader taught me much about how to relate to others and get their best side to show. I have a passion for learning and think you can always learn something from anyone; when someone wants to share, I do my best to listen. I'm a careful thinker, especially when it comes to finding solutions, always considering all contributing factors before making important decisions.</p>

          <p>I am a kind and considerate person with a positive mindset. I enjoy exploring the city with my partner and our dog Puchungo, playing Super Smash Bros. Melee and other video games, solving riddles, eating good food (which I sometimes cook), listening to my favorite podcasts and traveling.</p>
        </section>
      </main>
    );
  }
}
 
export default About;