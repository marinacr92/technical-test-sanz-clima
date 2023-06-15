import InputModel from '@/models/InputModel'

import '@/styles/Input.scss';

const Input = ({
    value,
    index,
    saveValues,
    deleteInput,
}: InputModel) => {
  return (
    <label className="label">
      <input
        type="number"
        step="0.01"
        className="input"
        onChange={(ev) => saveValues(parseFloat(ev.target.value), index)}
        value={value}
      />

      <i
        className="fa-solid fa-circle-xmark"
        id={`${index}`}
        onClick={() => deleteInput(index)}
      ></i>
    </label>
  );
};

export default Input;