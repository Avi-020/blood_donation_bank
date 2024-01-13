import React from 'react'
import { Progress } from '@chakra-ui/react'

function Dashboard() {
  return (
    <div>
      Dashboard

      <Progress value={20} size='xs' colorScheme='pink' /><br />
      <Progress value={20} size='xs' colorScheme='pink' /><br />
      <Progress value={20} size='xs' colorScheme='pink' /><br />
    </div>
  )
}

export default Dashboard
