import { connect } from 'react-redux'

export function Count({ items }) {
  return (
    <div>
      {items.reduce((accumulator, item) => accumulator + item.name.length, 0)}
    </div>
  )
}


function mapFavoritesStateToCountProps(state) {
  return {
    items: state.favorites,
  }
}

export const ConnectedCount = connect(
  mapFavoritesStateToCountProps,
)(Count)
