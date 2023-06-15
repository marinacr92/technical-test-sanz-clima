const postCalculate = async (values: number[]) => {
    const result = await fetch('/api/calc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: values }),
    })
    if (result.ok) {
        return await result.json();
    }
}

const getHistory = async () => {
    const result = await fetch('/api/history');
    if (result.ok) {
        return await result.json();
    }
    return []
}

const BackendService = {
    postCalculate,
    getHistory,
}

export default BackendService;