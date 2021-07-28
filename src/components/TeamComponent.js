import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col,Button
} from 'reactstrap';

function TeamComponent() {
  return (
    <div>
      <Row>
        <Col sm="4" >
          <Card>
            <CardImg src="https://media.discordapp.net/attachments/867448147915440129/867448694698016818/photo.png" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Sanjana Jadhav</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Sophomore)</CardSubtitle>
              <CardText>
                Hey y’all! My name is Sanjana Jadhav & I’m an incoming sophomore at UTD majoring in CS.
                Some of my interests are volunteering, working out and hanging out with my friends & family.
                I’m super excited to learn more & see how all our projects turn out !!
                looking forward to connecting with you all.
            </CardText>
              <a href="https://github.com/sanjanajadhavv" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4" >
          <Card>
            <CardImg src="https://cdn.discordapp.com/attachments/854071240448540732/869966804146090004/ike_2.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Ikechukwu Akujobi</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Bowie State University</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Graduate Student in Computer Science)</CardSubtitle>
              <CardText>
                Hello everyone! My name is Ikechukwu Akujobi. I am undergoing a career change.
                I did my BS in Biology from UMD and now, I am studying Computer Science at BSU.
                I enjoy playing/watching sports, watching anime, reading books and working on coding projects.
                Really looking forward to connecting with everyone here.
            </CardText>
              <form action="https://github.com/iakujobi?tab=repositories">
                <input type="submit" value="Go to my Github" />
              </form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4" >
          <Card>
            <CardImg src="https://via.placeholder.com/500x500.png?%20C/O%20https://placeholder.com/" />
            <CardBody>
              <CardTitle tag="h5">Kezia Abraham</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Rising Junior)</CardSubtitle>
              <CardText>
                Hi! I am Kezia Abraham and I am going to be a junior this fall 2021 at UTD majoring in Computer Science.
                I enjoy cooking, traveling, and overall trying new things. I am excited to learn and grow with yall this summer!
            </CardText>
              <form action="https://github.com/keziaabraham">
                <input type="submit" value="Go to my Github" />
              </form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4" >
          <Card>
            <CardImg src="https://via.placeholder.com/500x500.png?%20C/O%20https://placeholder.com/" />
            <CardBody>
              <CardTitle tag="h5">Luis Tapia</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas Rio Grande Valley</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Junior)</CardSubtitle>
              <CardText>
                Back-end developer on the Stock Picker app
            </CardText>
              <form action="https://github.com/Luis-ATapia">
                <input type="submit" value="Go to my Github" />
              </form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4" >
          <Card>
            <CardImg src="https://via.placeholder.com/500x500.png?%20C/O%20https://placeholder.com/" />
            <CardBody>
              <CardTitle tag="h5">Nathan Puskuri</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Sophomore)</CardSubtitle>
              <CardText>
                Back-end developer on the Stock Picker app
            </CardText>
              <form action="https://github.com/NathanP9000">
                <input type="submit" value="Go to my Github" />
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TeamComponent;