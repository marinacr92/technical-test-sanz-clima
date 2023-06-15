import InputModel from '@/models/InputModel'

import '@/styles/Input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faCircleXmark)

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
      <FontAwesomeIcon
        icon={['fas', 'circle-xmark']}
        id={`${index}`}
        onClick={() => deleteInput(index)} />
      
    </label>
  );
};

export default Input;