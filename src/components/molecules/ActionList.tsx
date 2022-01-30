import { List, ListProps, ListItem } from '@chakra-ui/react'

import { LargeButton } from '../atoms/LargeButton'

interface ActionListProps extends ListProps {
  data: {
    id: number
    name: string
  }[]
  onClick?: (item: any) => void
}

export const ActionList: React.FC<ActionListProps> = ({
  data,
  onClick,
  ...props
}) => {
  return (
    <List
      spacing={2}
      sx={{
        '&::-webkit-scrollbar': {
          width: '8px',
          borderRadius: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.20)'
        }
      }}
      {...props}
    >
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
