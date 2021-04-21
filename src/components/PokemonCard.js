import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  render() {
    const pokemon = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.props.toggleImage(pokemon)}>
            <img alt={pokemon.name} src={pokemon.isClicked ? pokemon.sprites.back : pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
