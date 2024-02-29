import { ShopProps } from "../customHooks";
import { CreateOrderProps } from "../components";

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwOTE0MDMzMywianRpIjoiYzE5YTliN2EtNmY0Ny00NTQ0LTgxMTctZmE1ZTRiZTAxODllIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgMTM4IFNob3AiLCJuYmYiOjE3MDkxNDAzMzMsImNzcmYiOiJiNDBmNTI5ZS01YTQ3LTQwMjEtYWUyYi0xY2FjNjZiOTJlNjkiLCJleHAiOjE3NDA2NzYzMzN9.yJsAxb2SxrEX2iOaY3MT94L8Nfb7xxsYvWAmsEn24nE" //grab this from insomnia (give us permission to access the API routes)
let userId = localStorage.getItem('uuid') // represent the customer for our API calls 

type PartialShopProps = Partial<ShopProps>

// put all our API calls in 1 giant dictionary/object

export const serverCalls = {
    
    getShop: async () => {
        // api call consist of 1-5 things
        // 1. url ( required )
        // 2. headers ( optional ) //typically there
        // 3. parameters ( optional )
        // 4. body ( optional ) //usually on POST requests
        // 5. methods (GET, POST, PUT, DELETE)
        
        const response = await fetch(`https://rangers138-shop-of-horror.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    },
    getOrder: async () => {
        // api call consist of 1-4 things 
        // 1. url (required)
        // 2. method (optional it will default to GET)
        // 3. headers (optional but usually there) authentication type & type of data 
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://rangers138-shop-of-horror.onrender.com/api/order/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    },
    createOrder: async (data: CreateOrderProps) => { //come back to change any 
        // api call consist of 1-4 things 
        // 1. url (required)
        // 2. method (optional it will default to GET)
        // 3. headers (optional but usually there) authentication type & type of data 
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://rangers138-shop-of-horror.onrender.com/api/order/create/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data) //sending a string of our dictionary to our server 
        });

        if (!response.ok) {
            throw new Error('Failed to create data'), response.status 
        }

        return await response.json()

    },
    updateData: async (orderId: string, data: PartialShopProps) => { //change this from any 
        // api call consist of 1-4 things 
        // 1. url (required)
        // 2. method (optional it will default to GET)
        // 3. headers (optional but usually there) authentication type & type of data 
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://rangers138-shop-of-horror.onrender.com/api/order/update/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data) 
        });

        if (!response.ok) {
            throw new Error('Failed to update data'), response.status 
        }

        return await response.json()

    },
    deleteOrder: async (orderId: string, data: PartialShopProps) => {
        // api call consist of 1-4 things 
        // 1. url (required)
        // 2. method (optional it will default to GET)
        // 3. headers (optional but usually there) authentication type & type of data 
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://rangers138-shop-of-horror.onrender.com/api/order/delete/${orderId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
                },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to delete data'), response.status
        }
        
        return await response.json()
    }
    
}