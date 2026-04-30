export interface usuario {
    id :number;
    name:string;
    email:string;
    phone:number; 
}
export async function obtenerUsuarios():Promise<usuario[]> {
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }
        const usuarios: usuario[]= await response.json();
        return usuarios;
    } catch (error){
        console.error('Error al obtener usuarios:',error);
        return [];
    }
    
}
