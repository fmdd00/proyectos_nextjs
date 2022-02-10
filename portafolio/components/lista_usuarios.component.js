export default function ListaUsuarios(props){
    console.log(props.usuarios)

    return <main className="col-md">
        <table className="table">
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Password</th>
                </tr>
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