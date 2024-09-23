import { useState } from "react";

const TemplateExpression = () => {
    const [num, setNum] = useState(0);

    const user = [
        {
            id: 2006,
            nome: 'Henrique',
            idade: 18,
            sexo: "Masculino",
            job: "Desenvolvedor"
        },
        {
            id: 2005,
            nome: 'João',
            idade: 19,
            sexo: "Masculino",
            job: "Nutricionista"
        },
        {
            id: 2007,
            nome: 'Andressa',
            idade: 18,
            sexo: "Feminino",
            job: "Administradora"
        },
        {
            id: 2000,
            nome: 'Luis',
            idade: 23,
            sexo: "Masculino",
            job: "Vagabundo"
        },
        {
            id: 2008,
            nome: 'Isabela',
            idade: 18,
            sexo: "Feminino",
            job: "Quimica"
        }
    ];

    const mostrarResultados = (num) => {
        const result = document.querySelector('.result')
        const name = result.querySelector("h2");
        const job = result.querySelector('h3');
        const identidade = result.querySelector('p');

        name.innerText = `Olá, ${user[num].nome}!`;
        job.innerText = `${user[num].job}`;
        identidade.innerText = `Você tem ${user[num].idade} anos e seu sexo é ${user[num].sexo}`
    }

    const mudarUser = (e) => {
        e.preventDefault();
        const valor = Number(document.querySelector('#num').value);
        const encontrarUser = user.find(u => u.id === valor);
        const pesqBTN = document.querySelector("#btn");

        pesqBTN.innerText = "Pesquisando..."
        setTimeout(() => {
            const index = user.indexOf(encontrarUser);
            if (encontrarUser) {
                setNum(index);
                pesqBTN.innerText = "Encontrado!";

                mostrarResultados(index)

                setTimeout(() => { pesqBTN.innerText = "Pesquisar ID" }, 1000);

            } else {
                console.log('ID NÃO EXISTE');
                pesqBTN.innerText = "Não encontrado";
                setTimeout(() => { pesqBTN.innerText = "Pesquisar ID" }, 1000);
            }
        }, 1000)
    };

    return (
        <div>
            <div className="lista-id">
                <h4>Lista de IDs</h4>
                <li>{user[1].id}</li>
                <li>{user[2].id}</li>
                <li>{user[3].id}</li>
                <li>{user[4].id}</li>
            </div>

            <form>
                <label htmlFor="num">Informe o ID:</label>
                <input type="number" name="num" id="num" />
                <button id="btn" onClick={mudarUser}>Pesquisar ID</button>
            </form>

            <div className="result">
                <h2>Olá, User!</h2>
                <h3>Trabalho</h3>
                <p>Você tem X anos e seu sexo é desconhecido</p>
            </div>

        </div >
    )
}

export default TemplateExpression