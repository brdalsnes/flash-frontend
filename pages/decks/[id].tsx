import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Meta from '../../components/Meta'
import { decksMock } from '../../mocks/mocks'

const Deck: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const deck = decksMock.find(mock => mock.id === id)
  return (
    <>
      <Meta title={deck?.title || ''}/>
      <h1>{deck?.title}</h1>
    </>
  )
}

export default Deck