import Link from 'next/link'
import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Meta from '../../components/Meta'
import colors from '../../styles/colors'
import { decksMock } from '../../mocks/mocks'

const DeckList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const DeckItem = styled.li`
  padding-bottom: 20px;
`

const DeckView = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  border: solid ${colors.primary};
  border-radius: 2px;
  background-color: white;
  padding: 20px;
`

const Title = styled.div`
  color: ${colors.primary};
  font-size: 32px;
`

const Decks: NextPage = () => {
  return (
    <>
      <Meta title="Decks"/>
      <DeckList>
        {decksMock.map(deck => (
          <DeckItem key={deck.id}>
            <Link href={`decks/${deck.id}`} passHref>
              <DeckView>
                <Title>{deck.title}</Title>
              </DeckView>
            </Link>
          </DeckItem>
        ))}
      </DeckList>
    </>
  )
}

export default Decks