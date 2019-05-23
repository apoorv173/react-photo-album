export const ServiceAPI =  {
    get(url, successFn, errorFn) {
        fetch(url)
            .then((response) => {
                return response.json()
                    .then(json => {
                        if (response.ok) {
                            return json;
                            
                        } else {
                            return Promise.reject(Object.assign({}, json, {
                                status: response.status,
                                statusText: response.statusText,
                                errorMsg: 'Something went wrong, please try again later'
                            }))
                        }
                    });
            })
            .then(data => successFn(data))
            .catch(error => errorFn(error));
    }
    
}
