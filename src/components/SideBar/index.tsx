import { Anchor, SideBarContainer } from './styles';

export function SideBar() {
  return (
    <SideBarContainer>
      <Anchor
        to="/"
        isCurrentPage={location.pathname === '/'}
      >
        Dashboard
      </Anchor>
      <Anchor
        to="/list"
        isCurrentPage={location.pathname === '/list'}
      >
        List
      </Anchor>
    </SideBarContainer>
  )
}