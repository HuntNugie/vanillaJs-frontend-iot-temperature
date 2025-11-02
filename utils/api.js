export const getData = async()=>{
    try {
    const api = import.meta.env.VITE_LOCAL_API
    const data = await fetch(`${api}/api/all`);
    if(!data.ok)return
    const result = await data.json();
    return result
    } catch (error) {
        console.log(error)
    }
}