type ColumnDefinitionType<T, K extends keyof T> = {
  key: K
  header: string
  render?: (value: T) => string;
}

type TProps<T, K extends keyof T> = {
  data: Array<T> | undefined
  columns: Array<ColumnDefinitionType<T, K>>
  dataTestId?: string;
}

type TYearsWithMultipleWinners = {
  id: string
  year: number
  winnerCount: number
}

type TStudiosWithWinners = {
  id: string
  name: string
  winCount: number
}

type TLongestShortestIntervalData = {
  min: TLongestShortestInterval[]
  max: TLongestShortestInterval[]
}

type TLongestShortestInterval = {
  id: string
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

type TMovieWinnersByYear = {
  id: number
  year: number
  title: string
}

type TMovie = {
  id: number
  year: number
  title: string
  winner: boolean
}

type TMovieRes = {
  content: TMovie[]
  totalPages: number
}

export type {
  ColumnDefinitionType,
  TProps,
  TYearsWithMultipleWinners,
  TStudiosWithWinners,
  TLongestShortestIntervalData,
  TLongestShortestInterval,
  TMovieWinnersByYear,
  TMovie,
  TMovieRes,
}