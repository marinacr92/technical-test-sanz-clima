import fs from 'fs';

const writeToFile = async (fileName: string, data: string) => {
  await fs.writeFileSync(fileName, data);
}

const readFromFile = async (fileName: string) => {
    return await fs.readFileSync(fileName).toString()
}

const fileUtils = {
    writeToFile,
    readFromFile,
}

export default fileUtils;