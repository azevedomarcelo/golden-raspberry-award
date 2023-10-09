import { useEffect, useState } from "react"
import { ColumnDefinitionType, TLongestShortestInterval, TLongestShortestIntervalData } from "../../../@types/global";
import { Table } from "../../../components/Table";
import { API_URL } from "../../../API_URL";

import { Container, Content, Title, Text } from "./styles";
import axios from "axios";

const longestShortestIntervalColumns: ColumnDefinitionType<
  TLongestShortestInterval,
  keyof TLongestShortestInterval
>[] = [
    { header: 'Producer', key: 'producer' },
    { header: 'Interval', key: 'interval' },
    { header: 'Previous Year', key: 'previousWin' },
    { header: 'Following Year', key: 'followingWin' },
  ]

export function LongestShortestInterval() {
  const [longestShortestIntervalMin, setLongestShortestIntervalMin] = useState<
    TLongestShortestInterval[]
  >([])

  const [longestShortestIntervalMax, setLongestShortestIntervalMax] = useState<
    TLongestShortestInterval[]
  >([])

  useEffect(() => {
    getLongestShortestInterval()
  }, [])

  const getLongestShortestInterval = async () => {
    try {
      const response = await axios.get(
        `${API_URL}?projection=max-min-win-interval-for-producers`
      );
      const data: TLongestShortestIntervalData = await response.data
      setLongestShortestIntervalMin((data.min));
      setLongestShortestIntervalMax((data.max));

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Container>
      <Title
        data-testid="title-content"
      >
        Producers with longest and shortest interval between wins
      </Title>

      <Content>
        <Text>Maximum</Text>
        <Table
          columns={longestShortestIntervalColumns}
          data={longestShortestIntervalMax}
          dataTestId="table-maximum"
        />
      </Content>

      <Content>
        <Text>Minimum</Text>
        <Table
          dataTestId="table-minimum"
          columns={longestShortestIntervalColumns}
          data={longestShortestIntervalMin}
        />
      </Content>

    </Container>
  )
}