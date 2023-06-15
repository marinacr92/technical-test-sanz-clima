export default interface InputModel {
    value: number,
    index: number,
    saveValues: (value: number, index: number) => void,
    deleteInput: (index: number) => void,
}