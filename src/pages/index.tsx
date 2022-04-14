import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { ThemeContext } from '_config/context/theme'

const Title = styled.h1`
  color: ${({ theme }) => theme.color.elements.strong};
  background-color: ${({ theme }) => theme.color.background.light};
  font-size: 50px;
`

export default function Home() {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <Title>My page</Title>
      <Button
        colorScheme='blue'
        bg={theme.color.background.strong}
        onClick={() => theme.setTheme('dark')}
      >Dark Theme</Button>
      <Button
        colorScheme='blue'
        bg={theme.color.background.light}
        color={theme.color.elements.strong}
        onClick={() => theme.setTheme('light')}
      >Light Theme</Button>
    </div>)
}