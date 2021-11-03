import Link from 'next/link'
import styled from '@emotion/styled'
import colors from '../styles/colors'

const Nav = styled.nav`
  display: flex;
  background-color: ${colors.secondary};
  justify-content: flex-end; 
  padding: 12px;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  display: inline;
  margin: 20px;
  font-weight: bold;
  color: ${colors.primary};
`

const links: Record<string, string> = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/decks': 'Decks',
  '/about': 'About',
}

const Navbar = () => {
  return (
    <Nav>
      <List>
        {Object.keys(links).map(path => 
          <ListItem key={path}>
            <Link href={path}>{links[path]}</Link>
          </ListItem>
        )}
      </List>
    </Nav>
  )
}

export default Navbar