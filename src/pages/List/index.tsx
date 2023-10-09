import { useCallback, useEffect, useState } from "react";
import { ColumnDefinitionType, TMovie, TMovieRes } from "../../@types/global";
import { Container } from "../Dashboard/styles"
import { SideBar } from "../../components/SideBar"
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { SearchIcon } from "../../components/Icons";
import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";

import { Content, Filter, Text, Title } from "./styles";
import { API_URL } from "../../API_URL";
import axios from "axios";

const movieColumns: ColumnDefinitionType<TMovie, keyof TMovie>[] = [
  { header: 'ID', key: 'id' },
  { header: 'Year', key: 'year' },
  { header: 'Title', key: 'title' },
  {
    header: 'Winner',
    key: 'winner',
    render: (row) => (row.winner ? 'Yes' : 'No'),
  },
]

export function List() {
  const [movies, setMovies] = useState<TMovie[]>([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [year, setYear] = useState<number | undefined>(undefined)
  const [winner, setWinner] = useState<number | undefined>(undefined)

  const getMovies = useCallback(async () => {
    let url = `${API_URL}?page=${page}&size=10`

    const isWinner = winner === 2 ? true : winner === 3 ? false : undefined
    if (isWinner !== undefined) {
      url = url.concat(`&winner=${isWinner}`)
    }

    if (year) {
      url = url.concat(`&year=${year}`)
    }

    const response = await axios.get(url)

    const data: TMovieRes = await response.data

    setMovies(data.content)
    setTotalPages(data.totalPages)
  }, [page, winner, year])

  useEffect(() => {
    const url = `${API_URL}?page=${page}&size=10`
    axios.get(url).then(response => response.data).then(data => {
      setMovies(data.content)
      setTotalPages(data.totalPages)
    });

  }, [page]);

  const handlePageChange = (page: number) => setPage(page)

  return (
    <Container>
      <SideBar />
      <Content>
        <Title>List movies</Title>

        <Filter>
          <Text>Filters:</Text>

          <Input
            placeholder="Search by year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />

          <Select
            options={[
              { value: 1, label: 'Yes/No' },
              { value: 2, label: 'Yes' },
              { value: 3, label: 'No' },
            ]}
            value={winner}
            onChange={(e) => setWinner(Number(e.target.value))}
          />

          <Button onClick={getMovies}>
            <SearchIcon />
          </Button>

        </Filter>
        <>
          <Table
            columns={movieColumns}
            data={movies}
            dataTestId="table-list"
          />

          <Pagination
            onPageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={page}
            dataTestId="pagination"
          />
        </>

      </Content>
    </Container>
  )
}