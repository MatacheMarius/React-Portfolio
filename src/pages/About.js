import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col size="lg-10" className="my-5 p-3 pgBody shadow">
          <h1 className="text-center">Matache Marius</h1>
          <hr />
          <div class="ml-2 mr-3 float-left profileImg">
            <img src="img/Marius.jpg" className="img-fluid rounded"/>
          </div>
          <main>
           
            <p>My name is Marius Gabriel Matache and I was born in Bucharest, capital of Romania in 1992.
                I'm 28 years old and I have lived in Seattle for 3 years now.
                I was born in a poor familiy and my father died when I was 6 years old. But these things helped me to form a strong character and to have a different way of thinking about life.
                From a fairly young age I started working and raising my own money so I could cover my expenses. Studying for me was a main goal.</p>
            <p>I graduated University of law in Bucharest and after that I had the opportunity to come to USA.
                It was a hard decision for me because I started again from 0, with only 700$ in my pocket, alone, with no family, no friends and 6000 mile away from my country.
                I worked for a moving company for 3 years. I was able to save some money and I found an opportunity for me. Now I have decided to invest this money in my education as well.</p>
            <p>I like to travel a lot and this is one of the reasons that pushed me to take this step.
                In the US it's a matter of "TIME MEANS MONEY". But for me my time is more important than money.
                And I learned that on my own.</p>
            
          </main>
        </Col>
      </Row>
    </Container>
  );
}


export default Home;
