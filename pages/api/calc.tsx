import { NextApiRequest, NextApiResponse } from 'next';
import fileUtils from '@/utils/fileUtils'

interface CalcSuccess {
    result: number
}

interface CalcError {
    status: number,
    errorMessage: String,
}

const saveData = async (values: number[], result: number) => {
    let data = []
    try {
        data = JSON.parse(await fileUtils.readFromFile('./db.json'))
    } catch (err) {
        console.error('Error:', err)
    }
    data.push({ values, result });
    await fileUtils.writeToFile('./db.json', JSON.stringify(data))
    console.log('data', data)
}

const calc = async (
    req: NextApiRequest,
    res: NextApiResponse<CalcSuccess|CalcError>
) => {
    if (req.method !== 'POST') {
        return res.status(400).json({
            status: 400,
            errorMessage: 'Sólo el método POST está permitido.'
        })
    }
    const values: number[] = req.body.values;
    const sum = values.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    await saveData(values, sum);

    return res.status(200).json({ result: sum });
}

export default calc;