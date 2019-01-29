import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput,
  Collapse,
  Alert
} from "reactstrap";
import Axios from "axios";
import "../App.css";

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      name: "",
      year: "",
      genre: "",
      nationalite: "",
      realisateur: "",
      plot: "",
      alertVisible: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onDismiss() {
    this.setState({ alertVisible: false });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, year, genre, nationalite, realisateur, plot } = this.state;
    Axios.post("/api/films/add", {
      name: name,
      year: year,
      genre: genre,
      nationalite: nationalite,
      plot: plot
      // realisateur: realisateur
    }).then(
      this.setState({
        alertVisible: true
      })
    );
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Title
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Please write here"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="year" sm={2}>
            Release Year
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="year"
              id="year"
              placeholder="Enter movie's release year"
              value={this.state.year}
              onChange={this.handleChange}
              // maxLength="4"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="genre" sm={2}>
            Select genre
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="genre"
              id="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option />
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Comedy</option>
              <option>Horror</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="nationalite" sm={2}>
            Select continent
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="nationalite"
              id="nationalite"
              value={this.state.nationalite}
              onChange={this.handleChange}
            >
              <option />
              <option>North America</option>
              <option>South America</option>
              <option>Europe</option>
              <option>Africa</option>
              <option>Asia</option>
              <option>Australia and Oceania</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="realisateur" sm={2}>
            Select director
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="realisateur"
              id="realisateur"
              value={this.state.realisateur}
              onChange={this.handleChange}
            >
              <option />
              <option>Peter Weir</option>
              <option>Steven Spielberg</option>
              <option>Georges Lucas</option>
              <option>Christopher Nolan</option>
              <option>Quentin Tarantino</option>
            </Input>
            <CustomInput
              type="checkbox"
              id="exampleCustomCheckbox2"
              label="Director not listed ?"
              onChange={this.toggle}
            />
            <Collapse isOpen={this.state.collapse}>
              <Col sm={10}>
                <Input
                  type="text"
                  name="realisateur"
                  id="realisateur"
                  placeholder="Enter your director"
                  value={this.state.realisateur}
                  onChange={this.handleChange}
                />
              </Col>
            </Collapse>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="plot" sm={2}>
            Plot / Synopsis
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="plot"
              id="plot"
              value={this.state.plot}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Moviecover
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" disabled />
            <FormText color="muted">
              Maximum size 500 Ko // Disabled for the moment
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Col>
        </FormGroup>
        <Alert
          color="success"
          isOpen={this.state.alertVisible}
          toggle={this.onDismiss}
          className="alert"
        >
          Film bien enregistré dans la DB !
        </Alert>
      </Form>
    );
  }
}
