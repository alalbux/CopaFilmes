import React from 'react'
import {
  arrayOf,
  shape
} from 'prop-types'
import { 
  WinnerCard,
  Flexbox
} from '../../components'

const WinnersList = ({ winners }) => {
  const winnersComponent = winners.map((winner) => {
    console.log(winners)
    return (
      <WinnerCard
        key={winner.id}
        // winnerPosition={winners[winner]}
        {...winner}
      />
    )
  })

  return (
    <Flexbox wrap>
      {winnersComponent}
    </Flexbox>
  )
}

WinnersList.defaultProps = {
  winners: []
}

WinnersList.propTypes = {
  winners: arrayOf(
    shape({})
  )
}

export default WinnersList
