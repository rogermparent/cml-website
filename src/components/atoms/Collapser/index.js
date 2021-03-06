import React from 'react'
import { Flex } from '@theme-ui/components'

const Collapser = ({ children, sx = {}, className = '', bp = 2 }) => {
  const flexDirection = ['column']
  for (let i = 1; i < bp; i++) {
    flexDirection.push('')
  }
  flexDirection.push('row')

  return (
    <Flex
      className={className}
      sx={{
        flexDirection,
        flexWrap: 'nowrap',
        '>*': {
          flex: '1'
        },
        ...sx
      }}
    >
      {children}
    </Flex>
  )
}

export default Collapser
