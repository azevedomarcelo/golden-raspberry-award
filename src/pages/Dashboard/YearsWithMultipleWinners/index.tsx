import { useEffect, useState } from "react";
import { ColumnDefinitionType, TYearsWithMultipleWinners } from "../../../@types/global";
import { Table } from "../../../components/Table";
import { API_URL } from "../../../API_URL";

import { Container, Title } from "./styles";
import axios from "axios";

const yearsWithMultipleWinnersColumns: ColumnDefinitionType<
  TYearsWithMultipleWinners,
  keyof TYearsWithMultipleWinners
>[] = [
    { header: 'Year', key: 'year' },
    { header: 'Win Count', key: 'winnerCount' },
  ]

export function YearsWithMultipleWinners() {
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState<
    TYearsWithMultipleWinners[]
  >([])

  useEffect(() => {
    getYearsWithMultipleWinners()
  }, [])

  const getYearsWithMultipleWinners = async () => {
    const response = await axios.get(
      `${API_URL}?projection=years-with-multiple-winners`
    )
    const data: { years: TYearsWithMultipleWinners[] } = await response.data;
    // const dataWithId = addUuid(data.years)
    setYearsWithMultipleWinners(data.years)
  }
  return (
    <Container>
      <Title>Years With Multiple Winners</Title>
      <Table
        columns={yearsWithMultipleWinnersColumns}
        data={yearsWithMultipleWinners}
        dataTestId="table-YearsWithMultipleWinners"
      />
    </Container>
  )
}