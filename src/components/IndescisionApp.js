import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import Header from "./Header";
import OptionModal from "./OptionModal";

// pull the state out of constructor
// convert all 4 event handlers to class properties (arrow func)
// delete the constructor completely
// start with class properties,

export default class IndescisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  // handleDeleteOptions
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };
  // randomly pick an option and alert
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const randomOption = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: randomOption,
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  // Lifecycle method
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
    }
  }
  // this fires whenever a component changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  // this fires when a new page gets mounted
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          // ariaHideApp={false}
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

// IndescisionApp.defaultProps = {
//   options: [],
// };
