import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { withContext } from "../context/appcontext";

class DropdownCustom extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      message: this.props.message
    };
    this.callbackFilterGenre = this.props.filterGenre;
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  filtering = event => {
    this.setState({
      message: event.target.value
    });
    this.callbackFilterGenre(event);
  };

  render() {
    const { appData } = this.props;
    const { message } = this.state;

    const genres = appData.map(item => item.genre);
    let genresWithoutDuplicate = [...new Set(genres)];

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{message}</DropdownToggle>
        <DropdownMenu>
          {genresWithoutDuplicate.map(e => (
            <DropdownItem onClick={this.filtering} value={e} key={e.toString()}>
              {e}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default withContext(DropdownCustom);
