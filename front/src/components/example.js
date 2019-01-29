class movieApp extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
      currentPage: 1,
      moviesPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { movies, currentPage, moviesPerPage } = this.state;

    // Logic for displaying current movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentmovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const rendermovies = currentmovies.map((movie, index) => {
      return <li key={index}>{movie}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>{rendermovies}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}

ReactDOM.render(<movieApp />, document.getElementById("app"));

///// DROPDOWN EXAMPLE

<Dropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle>Dropdown</DropdownToggle>
  <DropdownMenu
    modifiers={{
      setMaxHeight: {
        enabled: true,
        order: 890,
        fn: data => {
          return {
            ...data,
            styles: {
              ...data.styles,
              overflow: "auto",
              maxHeight: 100
            }
          };
        }
      }
    }}
  >
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>;
