import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleOnChangeType = (newType) => {
    this.setState({ 
      filters: {
        type: newType,
      }      
    })
  }

  getPets = () => {
    const type = this.state.filters.type
    const url = type === 'all' ? '/api/pets' : `/api/pets?type=${type}`
    const fetchedPets = fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error))
    this.setState({
      pets: fetchedPets,
    })
  }
  
  handleOnAdoptPet = (petId) => {
    // this.setState( prevState => {
    //   pets: [...prevState[pets]]
    // })
  }

  filteredPets = () => {
    const desiredType = this.state.filters.type
    const pets = this.state.pets.filter( pet => desiredType === pet.type)
    return pets;
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleOnChangeType} onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleOnAdoptPet} pets={this.filteredPets()}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
