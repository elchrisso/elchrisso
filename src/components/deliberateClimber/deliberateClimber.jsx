import React, { Component } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Button,
  ButtonGroup,
  ButtonToolbar
} from "reactstrap";

class DeliberateClimber extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Col className="col-sm-8">
            <Jumbotron>
              <h1>last7Days</h1>
            </Jumbotron>
          </Col>
          <Col className="col-sm-4">
            <ButtonToolbar>
              <ButtonGroup>
                <Button type="button" className="btn btn-primary">
                  Add HeartRate
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button type="button" className="btn btn-primary">
                  Add Workout
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button type="button" className="btn btn-primary">
                  Add Expenditure
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>D3</Jumbotron>
          </Col>
          <Col>
            <Jumbotron>D3</Jumbotron>
          </Col>
          <Col>
            <Jumbotron>D3</Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Heatmap</h1>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DeliberateClimber;
