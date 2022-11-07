import axios from "axios"

export interface Params<t, h> {
    body: t 
    url: string
    endPoint: string
    headers: any
    method: 'POST' | 'GET' | 'PUT'
}

interface Result {
    statusCode: number
    body: any
}

export async function httpClient<t, h>({body, endPoint, headers, url, method}:Params<t, h>):Promise<Result>  {
    try {
        const response = await axios.request({
            baseURL: url,
            url: endPoint,
            data: body,
            headers,
            method
        })
        return {
            statusCode: response.status,
            body: response.data
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Something went wrong'
        }
    }
   
}