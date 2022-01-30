import { useState, useEffect, useCallback, FormEvent } from 'react'
import { Input, Box, Divider, Text } from '@chakra-ui/react'
import { MdLocationOn } from 'react-icons/md'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useGeoLocation } from '../../hooks/geoLocation'

import { IWeatherCity, IWeatherParameters } from '../../store/weather/types'
import { getWeather } from '../../store/weather/weatherSlice'
import { closeModal, openModal } from '../../store/modal/modalSlice'

import { LargeButton } from '../atoms/LargeButton'
import { ActionList } from '../molecules/ActionList'
import { EnableLocation } from '../molecules/EnableLocation'

export const Search = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const [locations, setLocations] = useState<IWeatherCity[]>([])
  const { recentSearch } = useAppSelector(state => state.weather)
  const location = useGeoLocation()

  useEffect(() => {
    const results = recentSearch.filter(location =>
      location.name.toLowerCase().includes(search.toLowerCase())
    )
    setLocations(results)
  }, [search, recentSearch])

  const handleSearch = useCallback(
    (params: IWeatherParameters) => {
      dispatch(getWeather(params))
      dispatch(closeModal())
    },
    [dispatch]
  )

  const handleSearchRecent = useCallback((location: IWeatherCity) => {
    setSearch(location.name)
    handleSearch({ id: location.id })
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    handleSearch({ q: search })
  }

  const handleErrorOnGetLocation = (code: number) => {
    if (code === 1) {
      dispatch(
        openModal({
          children: <EnableLocation />,
          modalProps: {
            closeButton: true
          }
        })
      )
    }
  }

  const handleSearchByGeoLocation = () => {
    if (location?.error) {
      handleErrorOnGetLocation(location?.code || 500)
    } else if (location?.coords) {
      handleSearch({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      })
    }
  }

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Search"
          variant="filled"
          size="lg"
          rounded="lg"
          w="100%"
          value={search}
          onChange={e => setSearch(e.target.value)}
          _focus={{
            outline: 'none',
            boxShadow: 'outline'
          }}
        />
      </form>

      <Box mt={10}>
        <LargeButton
          onClick={handleSearchByGeoLocation}
          justifyContent="space-between"
          rightIcon={<MdLocationOn size={24} />}
        >
          Use my Location
        </LargeButton>
        <Divider my={6} />

        {locations.length > 0 && (
          <Text fontSize={16} fontWeight="500" mb={3}>
            Recent Searches
          </Text>
        )}

        <ActionList
          data={locations}
          onClick={handleSearchRecent}
          maxH={400}
          overflowY="auto"
        />
      </Box>
    </Box>
  )
}
