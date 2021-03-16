import MainNav from '../layout/main-nav'

const Layout = ({children}) => (
  <>
    <MainNav />
    <main>{children}</main>
  </>
)

export default Layout
