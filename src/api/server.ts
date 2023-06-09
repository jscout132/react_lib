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
    update: async (isbn: string, data: any={}) =>{
        const response = await fetch(`https://coal-alabaster-venus.glitch.me/api/books/${isbn}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        });
            if (!response.ok){
                throw new Error('Failed to update data on the server')
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
