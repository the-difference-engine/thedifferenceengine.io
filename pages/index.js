import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'react-emotion'
import { Navbar, NavbarBrand } from 'reactstrap'

const Brand = styled('span')`
  color: blue;
`

const Index = () => (
  <div>
    <Navbar>
      <NavbarBrand>
        <Brand>The Difference Engine</Brand>
      </NavbarBrand>
    </Navbar>
    <h1>Coming Soon!</h1>
  </div>
)

export default Index
