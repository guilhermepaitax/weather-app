import { Grid, GridItem } from '@chakra-ui/react'

import { TemperatureCard } from '../molecules/TemperatureCard'
import { MinMaxCard } from '../molecules/MinMaxCard'
import { PressureCard } from '../molecules/PressureCard'

export const WeatherCards = () => {
  return (
    <Grid
      mt={4}
      columnGap={{
        lg: 6,
        base: 4
      }}
      rowGap={6}
      templateColumns="repeat(2, 1fr)"
    >
      <GridItem colSpan={2}>
        <TemperatureCard />
      </GridItem>
      <GridItem
        colSpan={{
          md: 1,
          base: 2
        }}
      >
        <MinMaxCard />
      </GridItem>
      <GridItem
        colSpan={{
          md: 1,
          base: 2
        }}
      >
        <PressureCard />
      </GridItem>
    </Grid>
  )
}
