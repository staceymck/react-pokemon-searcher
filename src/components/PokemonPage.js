import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  toggleImage = pokemon => {
    const index = this.state.pokemon.indexOf(pokemon)
    this.setState(state => {
      return {
        pokemon: [
          ...state.pokemon.slice(0, index),
          {...pokemon, isClicked: !pokemon.isClicked}, //confused as to why this is set up this way
          ...state.pokemon.slice(index + 1)
        ]
      }
    })
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filterPokemon = () => {
    return this.state.pokemon.filter(p => p.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
  }

  addPokemon = (newPokemon) => {
    this.setState(state => {
      return {
        pokemon: [...state.pokemon, newPokemon]
      }
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search search={this.state.search} onChange={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={this.filterPokemon()} toggleImage={this.toggleImage} />
      </Container>
    )
  }
}

export default PokemonPage
