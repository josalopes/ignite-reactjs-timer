import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <div>
      <HistoryContainer>
        <h1>Meu histórico</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Conserto de defeitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Concluída</td>
              </tr>
              <tr>
                <td>Conserto de defeitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Concluída</td>
              </tr>
              <tr>
                <td>Conserto de defeitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Concluída</td>
              </tr>
              <tr>
                <td>Conserto de defeitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Concluída</td>
              </tr>
              <tr>
                <td>Conserto de defeitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Concluída</td>
              </tr>

            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
    </div>
  )
}
