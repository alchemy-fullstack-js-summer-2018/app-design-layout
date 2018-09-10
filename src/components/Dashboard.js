import React, { PureComponent } from 'react';
//import tunaGlamourShot from './../assets/tunaGlamourShot.jpg';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
//import styles from './Dashboard.css';


class Dashboard extends PureComponent {
  state = {
    name: '',
    showValidationMessage: false,
    showValidationButton: false,
  };

  render() {
    const {
      name,
      showValidationMessage,
      showValidationButton,
    } = this.state;

    return (
      <Grid style={{ paddingTop: '2rem' }}>
        <form style={{ marginBottom: '1rem' }}>
          <FormGroup
            validationState={
              showValidationMessage ? 'success' : null
            }
          >
            <ControlLabel>Tuna intake: </ControlLabel>
            <FormControl
              type="text"
              value={name}
              onFocus={() => {
                this.setState({
                  showValidationMessage: false,
                });
              }}
              onChange={event => {
                this.setState({
                  name: event.target.value,
                  showValidationButton: true,
                });
              }}
            />
            <CSSTransition
              in={showValidationMessage}
              timeout={300}
              classNames="message"
              unmountOnExit
              onExited={() => {
                this.setState({
                  showValidationButton: true,
                });
              }}
            >
              {state => (
                <HelpBlock>
                  This is too much tuna!
                  <CSSTransition
                    in={state === 'entered'}
                    timeout={300}
                    classNames="emoji"
                    unmountOnExit
                  >
                    <div className="emoji">🐟</div>
                  </CSSTransition>
                </HelpBlock>
              )}
            </CSSTransition>
          </FormGroup>
        </form>
        {showValidationButton ? (
          <Button
            onClick={() => {
              // eslint-disable-next-line
              this.setState(state => ({
                showValidationButton: false,
                showValidationMessage: true,
              }));
            }}
          >
            Validate form
          </Button>
        ) : null}
      </Grid>
    );
  }


  // render() {
  //   return (
  //     <section>
  //       <h2>Track that tuna! dashboard</h2>
  //       <div>
  //         <img src={tunaGlamourShot}  />
  //       </div>
  //       <div>
  //         <form onSubmit={this.handleSubmit}>
  //           <input name="name" value={name} readOnly/>
  //           <input name="budget" value={name} readOnly/>
  //           <p>
  //             <button type="submit">Add</button>
  //           </p>
  //         </form>
  //       </div>
  //     </section>
  //   );
  // }
}

// ReactDOM.render(
//   <Dashboard />,
//   document.getElementById('root')
// );
export default Dashboard;