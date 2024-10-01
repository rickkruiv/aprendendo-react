import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({ userName, userEmail }) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState('');
  const [role, setRole] = useState('');

  const data = {
    nome: name,
    email: email,
    bio: bio,
    role: role
  };

  const cleanForm = () => {
    setEmail('');
    setName('');
    setBio('');
    setRole('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    cleanForm();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    cleanForm();
  };

  return (
    <div>
      <form className='forms' >

        <div className="form-control">
          <label htmlFor="nome">Informe seu nome</label>
          <input type="text" name="nome" id="nome" placeholder='Seu Nome' onChange={(e) => { setName(e.target.value) }} value={name || ''} />
        </div>

        <div className="form-control">
          <label>
            <span>Informe seu email</span>
            <input type="email" placeholder='seuEmail@gmail.com' onChange={(e) => { setEmail(e.target.value) }} value={email} />
          </label>
        </div>

        <label>
          <span>Fale um pouco sobre você</span>
          <textarea name="bio" onChange={(e) => { setBio(e.target.value) }} placeholder='Um pouco sobre mim' value={bio} ></textarea>
        </label>

        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => { setRole(e.target.value) }} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <div className="buttons-control">
          <button className='send' onClick={handleSubmit}>Enviar</button>
          <button className='cancel' onClick={handleCancel}>Cancelar</button>
        </div>

      </form>
    </div>
  )
}

export default MyForm