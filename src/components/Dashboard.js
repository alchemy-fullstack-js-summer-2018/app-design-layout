import React, { PureComponent } from 'react';
import tunaGlamourShot from './../assets/tunaGlamourShot.jpg';
//import PropTypes from 'prop-types';


class Dashboard extends PureComponent {

  render() {
    return (
      <section>
        <h2>Track that tuna! dashboard</h2>
        <div>
          <img src={tunaGlamourShot}  />
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input name="name" value={name} readOnly/>
            <input name="budget" value={name} readOnly/>
            <p>
              <button type="submit">Add</button>
            </p>
          </form>
        </div>
      </section>
    );
  }
}

export default Dashboard;