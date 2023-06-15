import { NextApiRequest, NextApiResponse } from 'next';
import fileUtils from '@/utils/fileUtils'

interface HistorySuccess {
    history: []
}

interface HistoryError {
    status: number,
    errorMessage: String,
}

const getData = async () => {
    let data = []
    try {
        data = JSON.parse(await fileUtils.readFromFile('./db.json'))
    } catch (err) {
        console.error('Error:', err)
    }
    console.log('data', data)
    return data;
}

const history = async (
    req: NextApiRequest,
    res: NextApiResponse<HistorySuccess|HistoryError>
) => {
    if (req.method !== 'GET') {
        return res.status(400).json({
            status: 400,
            errorMessage: 'Sólo el método GET está permitido.'
        })
    }
    
    const data = await getData();

    return res.status(200).json({ history: data });
}

export default history;