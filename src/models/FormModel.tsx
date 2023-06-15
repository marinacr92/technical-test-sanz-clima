export default interface FormModel {
  values: number[],
  saveValues: (value: number, index: number) => void,
  addNewInput: () => void,
  deleteInput: (index: number) => void,
  resetValues: () => void,
  calculate: () => void,
}