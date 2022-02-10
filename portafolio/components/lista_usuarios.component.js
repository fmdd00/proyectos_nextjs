export default function ListaUsuarios(props){
    console.log(props.usuarios)

    return <main className="col-md-8">
        <table className="table">
            <thead>
                <th>Usuario</th>
                <th>Password</th>
            </thead>
            <tbody id="data_proyectos">
                {
                    props.usuarios.map((usuario) => {
                        return <tr key={ usuario.id }>
                            <td>{ usuario.nombre }</td>
                            <td>{ usuario.password }</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </main>
}