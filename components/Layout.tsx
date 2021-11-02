import Navbar from './Navbar'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header><Navbar /></header>
      <main>{children}</main>
    </>
  )
}

export default Layout