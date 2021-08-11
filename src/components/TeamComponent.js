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
            <a href="https://github.com/iakujobi?tab=repositories" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4" >
          <Card>
            <CardImg src="https://media.discordapp.net/attachments/669013100824887317/874289962432999444/unknown.png" alt = "Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Kezia Abraham</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Rising Junior)</CardSubtitle>
              <CardText>
                Hi! I am Kezia Abraham and I am going to be a junior this fall 2021 at UTD majoring in Computer Science.
                I enjoy cooking, traveling, and overall trying new things. I am excited to learn and grow with yall this summer!
            </CardText>
            <a href="https://github.com/keziaabraham" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
            </CardBody>
          </Card>
        </Col>
        
        <Col sm="4" >
          <Card>
            <CardImg src="https://media.discordapp.net/attachments/669013100824887317/874284846636208148/DRbX6YiUIAAYkHP.png" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Abhik Kumar</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Sophomore)</CardSubtitle>
              <CardText>
              Hey y'all! My name is Abhik Kumar and I'm an incoming sophmore at the University of Texas at Dallas (UTD). 
              I'm currently a CS major with a bio minor! In my free time, I like to read skateboard, work out, watch/play sports and hang out with friends. 
              I look forward to meeting and working with y'all!
            </CardText>
              <a href="https://github.com/abhikTheFirst" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4" >
          <Card>
            <CardImg src="https://media-exp1.licdn.com/dms/image/C4E22AQGYotrSGzDgwQ/feedshare-shrink_2048_1536/0/1602745196206?e=1631145600&v=beta&t=mB4gtZIXS3QWUCl1eeLv8pqLKrj0FzmlotihKzDbhMs" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Nathan Puskuri</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas at Dallas</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Sophomore)</CardSubtitle>
              <CardText>
                Back-end developer on the Stock Picker app
            </CardText>
              <a href="https://github.com/NathanP9000" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
              </CardBody>
          </Card>
        </Col>
        <Col sm="4" >
          <Card>
            <CardImg src="https://pbs.twimg.com/media/D84F8mEW4AItmFR.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Luis Tapia</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas Rio Grande Valley</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Junior)</CardSubtitle>
              <CardText>
                Back-end developer on the Stock Picker app
            </CardText>
              <a href="https://github.com/Luis-ATapia" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
              </CardBody>
          </Card>
        </Col>

        <Col sm="4" >
          <Card>
            <CardImg src="https://media-exp1.licdn.com/dms/image/C4D03AQG-Wu6zwfZBWQ/profile-displayphoto-shrink_800_800/0/1567445288793?e=1634169600&v=beta&t=Lt7IZJHOVDNSlDLSbKcz9NHmpJE09l2X2el7kZ0dP1g" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Brandon Alexander Lopez</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of North Texas</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Junior)</CardSubtitle>
              <CardText>
                I am pursuing a bachelors in computer science at the University of North Texas in Denton, where I have learned to program in C and C++.
                I have also happily attended hackathons, make-a-thons, and innovation design competitions where I have developed data analytical simulations, biomedical solutions
                websites, and innovative solutions to customer expereinces through technical challenges. I am happy to be a part of the front end dev team for the Stock Picker App.
                Check out my github for the Stock Picker App repo.
            </CardText>
              <a href="https://github.com/BrandonAlexanderLopez" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4" >
          <Card>
            <CardImg src="https://media.discordapp.net/attachments/669013100824887317/874300234765832282/unknown.png" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Joel Patino-Guzman</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas Rio Grande Valley</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Senior)</CardSubtitle>
              <CardText>
              Hello, My name is Joel Patino-Guzman, but go by my middle name Aron. I'm a senior majoring in computer science from UTRGV. 
              Some interests of mine are reading, streaming and card collecting. Really exited to be working on this project and connecting with everyone.
            </CardText>
              <a href="https://github.com/Sakamoto448" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4" >
          <Card>
            <CardImg src="https://media.discordapp.net/attachments/669013100824887317/874297737351405598/unknown.png" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Miguel Serrato</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">University of Texas Rio Grande Valley</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">(Junior)</CardSubtitle>
              <CardText>
              I'm a junior at UTRGV majoring in CS. I love playing video games, listening to music, playing my guitar, skating, and working out. 
              This is my first Codubee internship, and I am excited to be part of the front end team!
            </CardText>
              <a href="https://github.com/Miguel-S117" target="_blank" rel="noreferrer">
                <Button color = "success">Github</Button>
              </a>
            </CardBody>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default TeamComponent;