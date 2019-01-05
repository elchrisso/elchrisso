import React, { Component } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Button,
  ButtonGroup,
  ButtonToolbar
} from "reactstrap";

import { RecentPerformanceList } from "./recentPerformanceList";

class DeliberateClimber extends Component {
  state = {};
  render() {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    console.log(new Intl.DateTimeFormat(["ban", "id"]).format(oneWeekAgo));

    return (
      <div>
        <Row>
          <Col className="col-sm-8">
            <Jumbotron>
              <RecentPerformanceList one_week_ago={oneWeekAgo} />
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
