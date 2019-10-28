import React from "react";
import {
  FormControl,
  Input,
  Button
} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import Header from '../../components/header/Header'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: 0
    };
  }

  handleInputChange1(event) {
    this.setState({
      value1: event.target.value
    });
  }

  handleInputChange2(event) {
    this.setState({
      value2: event.target.value
    });
  }

  doOperation(op, event) {
    event.preventDefault();

    let val1 = parseFloat(this.state.value1);
    let val2 = parseFloat(this.state.value2);

    if (Number.isNaN(val1) || Number.isNaN(val2)) {
      return '';
    }

    let val3 = 0;
    switch (op) {
      case '+':
        val3 = val1 + val2;
        break;
      case '-':
        val3 = val1 - val2;
        break;
      case 'x':
        val3 = val1 * val2;
        break;
      case '÷':
        val3 = val1 / val2;
        break;
      default:
        alert('Invalid operation');
    }

    this.setState({
      value3 : val3
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 20,
            padding: 20
          }}
        >
          <form style={{ width: "50%" }}>
            <h1>Calculator</h1>

            <FormControl margin="normal" fullWidth>
              <Input type="number" value={this.state.value1} onChange={e => this.handleInputChange1(e)} />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <Input type="number" value={this.state.value2} onChange={e => this.handleInputChange2(e)} />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <Input disabled type="text" defaultValue="Answer" value={this.state.value3} />
            </FormControl>

            <Grid container justify="center" spacing={5}>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" size="medium" onClick={e => this.doOperation('+', e)} fullWidth>+</Button>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" size="medium" onClick={e => this.doOperation('-', e)} fullWidth>-</Button>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" size="medium" onClick={e => this.doOperation('x', e)} fullWidth>x</Button>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" size="medium" onClick={e => this.doOperation('÷', e)} fullWidth>÷</Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;