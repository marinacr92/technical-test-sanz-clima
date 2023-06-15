import Input from './Input';
import FormModel from '@/models/FormModel'

import '@/styles/Form.scss';

const Form = ({
  saveValues,
  addNewInput,
  values,
  deleteInput,
  calculate,
  resetValues,
}: FormModel) => {
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
  };

  return (
    <section className="main__form">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset">
          <legend className="fieldset__title">Introduce los valores</legend>
          <section className="fieldset__inputs">
            {values.map((value: number, index: number) => {
              return (
                <Input
                  key={index}
                  value={value}
                  index={index}
                  saveValues={saveValues}
                  deleteInput={deleteInput}
                />
              );
            })}
          </section>
        </fieldset>
      </form>

      <button className="btn btn__add" onClick={addNewInput}>
        Añadir campo
      </button>
      <button className="btn btn__result" onClick={calculate}>
        Resultado
      </button>
      <button className="btn btn__reset" onClick={resetValues}>
        Borrar todo
      </button>
    </section>
  );
};

export default Form;
