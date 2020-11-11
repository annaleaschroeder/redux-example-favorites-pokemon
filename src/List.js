import { connect } from 'react-redux'
import { ListItem } from './ListItem'
import { buildAddToFavorites, buildRemoveFromFavorites } from './reducer'

export function List({ items, type }) {
  const listItems = items.map(function(item, index) {
    return (
      <ListItem
        name={item.name}
        onClick={type === 'favorites' ? buildRemoveFromFavorites(item) : buildAddToFavorites(item)}
        key={index} />
    )
  })

  return (
    <ul>
      {listItems}
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    items: state.items,
    type: 'default',
  }
}

export const ConnectedList = connect(
  mapStateToProps,
)(List)

function mapFavoritesStateToProps(state) {
  return {
    items: state.favorites,
    type: 'favorites',
  }
}

export const ConnectedFavoriteList = connect(
  mapFavoritesStateToProps,
)(List)
