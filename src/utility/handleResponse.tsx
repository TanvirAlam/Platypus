const handleResponse = (res: any) => {
    if(res.status !== 200) {
        console.error(res.error);
        return Promise.reject("API ERROR:" + res.error);
    }
    return Promise.resolve(res.data.results);
};

export default handleResponse;
