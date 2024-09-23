import React, { useEffect, useState } from 'react'

const ListRender = () => {
    const [users, setUsers] = useState([
        { id: 1, nome: "Matheus Brasileiro", job: "Musico" },
        { id: 2, nome: "Cleriton Sávio", job: "Musico" },
        { id: 3, nome: "Vinicius William", job: "Musico" },
        { id: 4, nome: "Henrique Polizer", job: "Desenvolvedor" }
    ]);

    function newestOne() {
        let menor = 0;
        users.forEach((user) => {
            if (user.id > menor) {
                menor = user.id
            }
        })
        return users.map((u) => u.id === menor ? <h2 key={u.id}>{u.nome} é o mais novo</h2> : undefined)
    }

    function deleteRandom() {
        const randNum = Math.floor(Math.random() * (4) + 1);
        console.log(randNum)

        setUsers((prevUsers) => prevUsers.filter((user) => randNum !== user.id))
        }

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.nome} é {user.job}</li>
                ))}
            </ul>

            {newestOne()}

            <button onClick={deleteRandom}>Remover aletoriamente</button>
        </div>
    )
}

export default ListRender