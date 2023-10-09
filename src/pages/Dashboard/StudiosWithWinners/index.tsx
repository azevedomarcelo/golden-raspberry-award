import { useEffect, useState } from "react";
import { ColumnDefinitionType, TStudiosWithWinners } from "../../../@types/global";
import { Table } from "../../../components/Table";
import { API_URL } from "../../../API_URL";

import { Container, Title } from "./styles";
import axios from "axios";

const studiosWithWinnersColumns: ColumnDefinitionType<
  TStudiosWithWinners,
  keyof TStudiosWithWinners
>[] = [
    { header: 'Name', key: 'name' },
    { header: 'Win Count', key: 'winCount' },
  ]

export function StudiosWithWinners() {
  const [studiosWithWinners, setStudiosWithWinners] = useState<
    TStudiosWithWinners[]
  >([])

  useEffect(() => {
    getStudiosWithWinners()
  }, [])

  const getStudiosWithWinners = async () => {
    try {
      const response = await axios.get(
        `${API_URL}?projection=studios-with-win-count`
      )
      const data: { studios: TStudiosWithWinners[] } = await response.data

      setStudiosWithWinners(data.studios.slice(0, 3))

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Container>
      <Title>StudiosWithWinners</Title>
      <Table
        columns={studiosWithWinnersColumns}
        data={studiosWithWinners}
        dataTestId="table-studioWithWinner"
      />
    </Container>
  )
}