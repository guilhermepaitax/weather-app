import { List, ListItem } from '@chakra-ui/react'

import { LargeButton } from '../atoms/LargeButton'

interface ActionListProps {
  data: {
    id: number
    name: string
  }[]
  onClick?: (item: any) => void
}

export const ActionList: React.FC<ActionListProps> = ({ data, onClick }) => {
  return (
    <List spacing={2}>
      {data.map(item => (
        <ListItem key={item.id}>
          <LargeButton onClick={() => onClick && onClick(item)}>
            {item.name}
          </LargeButton>
        </ListItem>
      ))}
    </List>
  )
}
