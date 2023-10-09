import { LinkPagination, PaginationNav } from "./styles"

type TProps = {
  onPageChange: (page: number) => void;
  totalPages: number;
  currentPage: number;
  dataTestId: string;
}

export const Pagination = ({ onPageChange, totalPages, currentPage, dataTestId }: TProps) => {
  const getPages = () => {
    const maxPageButtons = 5
    const halfMaxButtons = Math.floor(maxPageButtons / 2)
    let startPage = currentPage - halfMaxButtons
    let endPage = currentPage + halfMaxButtons

    if (startPage < 0) {
      startPage = 0
      endPage = maxPageButtons - 1
    }

    if (endPage >= totalPages) {
      endPage = totalPages - 1
      startPage = Math.max(totalPages - maxPageButtons, 0)
    }

    const pages = []

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }
  console.log("PAGE __________ ", dataTestId)

  return (
    <PaginationNav data-testid={dataTestId}>
      <LinkPagination
        onClick={() => onPageChange(0)}
        aria-disabled={currentPage === 0}
      >
        <span aria-hidden="true">First</span>
      </LinkPagination>

      {getPages().map((page) => (
        <LinkPagination
          key={page}
          currentPage={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page + 1}
        </LinkPagination>
      ))}

      <LinkPagination
        onClick={() => onPageChange(totalPages - 1)}
        aria-disabled={currentPage === totalPages - 1}
      >
        <span aria-hidden="true">Last</span>
      </LinkPagination>
    </PaginationNav>
  )
}