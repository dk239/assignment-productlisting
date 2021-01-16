const apiUrl = 'https://my-json-server.typicode.com/dk239/demodb/';

export async function getApiCall(path) {
    let response  = await fetch(`${apiUrl}${path}`)
    let responseData = await response.json()
    
    return responseData
}