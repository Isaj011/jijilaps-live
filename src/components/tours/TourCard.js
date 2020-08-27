import React from "react";
import "../../util/tours.css"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";


const TourCard = ({ tourcard }) => {
  const { img, alt, title, subtitle } = tourcard;
  return (
     <Container className="conntainerA" > 
    <Card className="card">
      <CardImg top width="100%" src={img} alt={alt} className="card-img-top"/>
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
        <CardSubtitle className="card-subtitle">{subtitle}</CardSubtitle>
        <Button outline color="secondary" className="float-right" href="tour">
          Read more
        </Button>
      </CardBody>
    </Card>
    </Container>
    
  );
};
export default TourCard;
