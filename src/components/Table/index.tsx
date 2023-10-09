
import { ReactNode } from 'react'
import { TProps } from '../../@types/global'
import { Container, TableContent, Tbody, Td, Th, Thead, Tr } from './styles'

export const Table = <T extends { id: string | number }, K extends keyof T>({
  columns,
  data,
  dataTestId
}: TProps<T, K>) => {
  return (
    <Container>
      <TableContent>
        <Thead>
          <Tr>
            {columns.map(({ key, header }) => (
              <Th
                key={`${String(key)}-header`}
                scope="col"
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {data &&
            data.map((obj, index) => (
              <Tr key={`${obj.id}-${index}`} data-testid={dataTestId}>
                {columns.map(({ key, render }) => (
                  <Td
                    key={obj.id + String(key)}
                  >
                    {render ? render(obj) : (obj[key] as ReactNode)}
                  </Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </TableContent>
    </Container>
  )
}