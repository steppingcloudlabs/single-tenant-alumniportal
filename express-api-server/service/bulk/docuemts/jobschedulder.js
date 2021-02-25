module.exports = () => {
    const createJob = () => {
        return new Promise(async (resolve, reject) => {
            try {
                let condition = false;
                if (condition) {
                    resolve('data')
                } else {
                    reject('error')
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    return {
        createJob
    }
}