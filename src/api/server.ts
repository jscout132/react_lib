let token = `cdddecf7`
export const server_calls = {
    get:async () => {
        const response = await fetch(`https://coal-alabaster-venus.glitch.me/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any={}) => {
        const response = await fetch(`https://coal-alabaster-venus.glitch.me/api/addbook`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer: ${token}`,
                
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to created new data on the server')
        }

        return await response.json()
    },
    update: async (isbn: string, data: any={}) => {
        console.log('data', data)
        console.log('type of data', typeof(data))

        const response = await fetch(`https://coal-alabaster-venus.glitch.me/api/books/${isbn}`,{
            method: 'PUT',
            headers: {
                'x-access-token': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });
            console.log(response)
            console.log('in update function on server.ts')
            if (!response.ok){
                throw Error('Failed to update data on the server in the update function')
            }
            return await response.json()
    },
    delete: async (isbn:string) =>{
        console.log('in the delete')
        const response = await fetch(`https://coal-alabaster-venus.glitch.me/api/books/${isbn}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer: ${token}`
            },
        });
           if (!response.ok){
                throw new Error('Failed to delete data on server')
           }
           return;
        },

    }
