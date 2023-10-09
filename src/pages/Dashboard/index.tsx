import { SideBar } from '../../components/SideBar';
import { LongestShortestInterval } from './LongestShortestInterval';
import { StudiosWithWinners } from './StudiosWithWinners';
import { WinnersByYear } from './WinnersByYear';
import { YearsWithMultipleWinners } from './YearsWithMultipleWinners';

import { Container, Content } from './styles';

export function Dashboard() {
  return (
    <Container>
      <SideBar />

      <Content>
        <YearsWithMultipleWinners />
        <LongestShortestInterval />
      </Content>

      <Content>
        <StudiosWithWinners />
        <WinnersByYear />
      </Content>

    </Container>
  )
}