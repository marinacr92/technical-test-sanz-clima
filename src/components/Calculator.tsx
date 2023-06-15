//import '../styles/Calculator.scss';

const Calculator = ({ result }: { result: number }) => {
  return (
    <section className="main__result">
      <h2 className="result__title">
        Resultado <span>{result}</span>
      </h2>
    </section>
  );
};

export default Calculator;
