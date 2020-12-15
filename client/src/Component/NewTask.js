import axios from "axios";
import React, { Component } from "react";
import { config } from "../constants";

export default class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      materials: [{ name: "" }],
      importance: "",
    };
  }

  handleMaterialChange = (e) => {
    const newMaterials = [...this.state.materials];
    newMaterials[e.target.id].name = e.target.value;
    this.setState({
      materials: newMaterials,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(config.url.API_URL + "/api/task", {
      title: this.state.title,
      materials: this.state.materials,
      importance: this.state.importance,
    });
    this.setState({
      title: "",
      materials: [{ name: "" }],
      importance: "",
    });
    this.props.history.push("/");
  };

  handleAddButton = () => {
    this.setState((prevState) => ({
      materials: [...prevState.materials, { name: "" }],
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form>
          <div>
            <label htmlFor="title">Name Of Task: </label>
            <input
              type="text"
              name="title"
              onChange={(e) => this.handleChange(e)}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="materials">Materials for Task: </label>
            {/* MAP FUNCTION FOR ADDING INPUTS */}
            {this.state.materials.map((material, idx) => {
              return (
                <input
                  type="text"
                  name="materials"
                  id={idx}
                  onChange={this.handleMaterialChange}
                  value={this.state.materials[idx].name}
                />
              );
            })}
            <div>
              <button
                type="button"
                style={{
                  background: "blue",
                  borderRadius: "50%",
                  color: "white",
                  border: "none",
                  fontSize: "32px",
                  width: "32px",
                  height: "32px",
                }}
                onClick={this.handleAddButton}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="importance">Importance: </label>
            <input
              type="text"
              name="importance"
              onChange={(e) => this.handleChange(e)}
              value={this.state.importance}
            />
          </div>
          <a
            href="#"
            style={{
              display: "inline-block",
              background: "blue",
              width: "100px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={this.handleSubmit}
          >
            Button
          </a>
        </form>
      </div>
    );
  }
}
