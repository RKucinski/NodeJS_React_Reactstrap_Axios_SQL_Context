import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { withContext } from "../context/appcontext";

const Filmcard = props => {
  const { movie } = props;
  const { name, genre, image, nationalite, year, plot, id } = movie;

  return (
    <Card>
      {/* <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Card image cap"
      /> */}
      <CardBody>
        <CardTitle style={{ fontSize: "1.5rem" }}>{name}</CardTitle>
        <CardSubtitle style={{ fontStyle: "italic" }}>
          {genre} from {year}
        </CardSubtitle>
        <hr />
        <CardText>{plot}</CardText>
        <CardSubtitle style={{ fontStyle: "italic", color: "gray" }}>
          A film from {nationalite}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default withContext(Filmcard);
