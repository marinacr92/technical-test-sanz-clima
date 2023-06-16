'use client';
import { useEffect, useState } from 'react';

import Form from './Form';
import Calculator from './Calculator';
import History from './History';

import BackendService from '@/services/BackendService';

import HistoryModel from '@/models/HistoryModel'

import '@/styles/Home.scss'


export default function Home() {
  const [values, setValues] = useState<number[]>([0]);
  const [result, setResult] = useState<number>(0);
  const [history, setHistory] = useState<HistoryModel[]>([]);

  useEffect(() => {
    const asyncFetch = async () => {
      const result = await BackendService.getHistory();
      if (result && result.history) {
        setHistory(result.history)
      }
    }
    asyncFetch()
  }, [])

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

  const calculate = async () => {
    const calc = await BackendService.postCalculate(values);
    setResult(calc.result);
    const newHistory: HistoryModel[] = [...history]
    const data: HistoryModel = { values, result: calc.result };
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
        <h1 className='header__title'>¿SUMAMOS?</h1>
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
