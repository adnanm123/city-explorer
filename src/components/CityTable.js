import React from "react";
import "./CityTable.css";
import Table from "react-bootstrap/Table";

class CityTable extends React.Component {
  render() {
    return (
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.cityDisplayName}</td>
            <td>{this.props.lat}</td>
            <td>{this.props.lon}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default CityTable;
