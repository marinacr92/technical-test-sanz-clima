'use client';
// import styles from './page.module.css'
import { useState } from 'react';

import Form from './Form';
import Calculator from './Calculator';
import History from './History';

import HistoryModel from '@/models/HistoryModel'


export default function Home() {
  const [values, setValues] = useState<number[]>([0]);
  const [result, setResult] = useState<number>(0);
  const [history, setHistory] = useState<HistoryModel[]>([]);

  const saveValues = (value: number, index: number) => {
    const array: number[] = [...values];
    array[index] = value;
    setValues(array);
  };

  const addNewInput = () => {
    const newValues: number[] = [...values]
    newValues.push(0)
    setValues(newValues);
  };

  const deleteInput = (index: number) => {
    if (values.length > 1) {
      values.splice(index, 1);
      setValues([...values]);
    } else if (values.length === 1) {
      setValues([0]);
    }
  };

  const calculate = () => {
    const sum = values.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    setResult(sum);
    const newHistory: HistoryModel[] = [...history]
    const data: HistoryModel = { values: values, result: sum };
    newHistory.push(data)
    setHistory(newHistory);
  };

  const resetValues = () => {
    setValues([0]);
    setResult(0);
  };

  return (
    <>
      <header className="header">
        <h1>¿Sumamos?</h1>
      </header>
      <main className="main">
        <Form
          addNewInput={addNewInput}
          saveValues={saveValues}
          values={values}
          deleteInput={deleteInput}
          calculate={calculate}
          resetValues={resetValues}
        />
        <Calculator result={result} />
        <History history={history} />
      </main>
    </>
  );
}
