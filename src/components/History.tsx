import HistoryModel from "@/models/HistoryModel";

import '@/styles/History.scss';

const History = ({ history }: { history: HistoryModel[]}) => {
  return (
    <section className="main__history">
      <h2 className="history__title">Histórico</h2>
      {history.map((item: HistoryModel, index: number) => {
        return (
          <section key={index} className="history__items">
            <p className="history__items--values">{item.values.join(' + ')}</p>
            <p className="history__items--result">Resultado {item.result}</p>
          </section>
        );
      })}
    </section>
  );
};

export default History;
