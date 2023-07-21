import React, { useState, useEffect } from 'react';
import axios from 'axios'
import H1 from '../../components/Title'
import { Container, Image, User } from './style';

import ContainerItens from '../../components/containerItens';
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom';

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

const Users = () => {
  const history = useHistory()
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)

    }
    fetchUsers()
  }, [])

  const goBackPage = () => {
    history.push('/')

  }

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers)
  }


  return (
    <Container>
      <Image alt='logo-imagem' src={Avatar} />
      <ContainerItens isBlur={true}>

        <H1> Usuários </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img alt='lata-de-lixo' src={Trash} /> </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}> <img alt='seta' src={Arrow} /> Voltar </Button>

      </ContainerItens>
    </Container>
  );

}

export default Users