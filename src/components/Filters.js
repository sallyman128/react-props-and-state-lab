import React from 'react'

class Filters extends React.Component {

  handleOnChange = (e) => {
    const value = e.target.value
    this.props.onChangeType(value)
  }

  handleOnClick = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleOnChange} >
            <option value="all" >All</option>
            <option value="cat" >Cats</option>
            <option value="dog" >Dogs</option>
            <option value="micropig" onChange={this.handleOnChange}>Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleOnClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
