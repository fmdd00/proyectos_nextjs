import ListaUsuarios from "../components/lista_usuarios.component"

export default function usuarios(){
    const listaUsuarios = [
        {id : "1", nombre : "Piero", password : "357"},
        {id : "2", nombre : "Jaime", password : "159"}
    ]

    return <div>
        <ListaUsuarios usuarios = { listaUsuarios } />
    </div>
}