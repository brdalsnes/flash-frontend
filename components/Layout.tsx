import styled from '@emotion/styled'
import Navbar from './Navbar'
import colors from '../styles/colors'

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.primary}
`

const StyledHeader = styled.header`
  width: 100%;
`

const StyledMain = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <StyledContainer>
      <StyledHeader><Navbar /></StyledHeader>
      <StyledMain>{children}</StyledMain>
    </StyledContainer>
  )
}

export default Layout