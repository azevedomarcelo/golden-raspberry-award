import { useState } from "react";
import { ColumnDefinitionType, TMovieWinnersByYear } from "../../../@types/global";
import { Table } from "../../../components/Table";
import { SearchIcon } from "../../../components/Icons";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { API_URL } from "../../../API_URL";

import { Container, Title, Content } from "./styles";
import axios from "axios";

const movieWinnersByYearColumns: ColumnDefinitionType<
  TMovieWinnersByYear,
  keyof TMovieWinnersByYear
>[] = [
    { header: 'ID', key: 'id' },
    { header: 'Year', key: 'year' },
    { header: 'Title', key: 'title' },
  ]

export function WinnersByYear() {
  const [movieWinnersByYears, setMovieWinnersByYears] = useState<
    TMovieWinnersByYear[]
  >([])

  const [year, setYear] = useState<string | undefined>('')

  const getMovieByYear = async () => {
    const response = await axios.get(`${API_URL}?winner=true&year=${year}`
    )
    const data: TMovieWinnersByYear[] = await response.data
    setMovieWinnersByYears(data)
  }
  return (
    <Container>
      <Title>WinnersByYear</Title>

      <Content>
        <Input
          placeholder="Search by year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <Button
          onClick={getMovieByYear}
          data-testid="search-by-year"
        >
          <SearchIcon />
        </Button>
      </Content>
      <Table
        columns={movieWinnersByYearColumns}
        data={movieWinnersByYears}
        dataTestId="table-winnersByYear"
      />

    </Container>
  )
}