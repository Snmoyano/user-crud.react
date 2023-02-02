import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
const baseURL = 'https://users-crud.academlo.tech'
import { TiUserAdd } from 'react-icons/ti'

function App() {
  const [users, setUsers] = useState()
  const [updateUser, setUpdateUser] = useState()
  const [modal, setModal] = useState(true)

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const createNewUser = (data) => {
    const url = `${baseURL}/users/`
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data)
        getAllUsers()
      })
      .catch((err) => console.log(err))
  }

  const deleteUserById = (id) => {
    const URL = `${baseURL}/users/${id}/`
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data)
        getAllUsers()
      })
      .catch((err) => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data)
        getAllUsers()
      })
      .catch((err) => console.log(err))
  }

  const handleModal = () => {
    setModal(!modal)
    console.log(modal)
  }

  return (
    <div className="App">
      <div className="create__user">
        <h1>USERs CRUD</h1>
        <button className="btn__create" onClick={handleModal}>
          <TiUserAdd className="btn__create-icon" />
        </button>
      </div>

      <section className={`modal ${modal ? 'modal--show' : 'modal--hide'}`}>
        <div className="modal__container">
          <FormUsers
            createNewUser={createNewUser}
            updateUser={updateUser}
            setUpdateUser={setUpdateUser}
            updateUserById={updateUserById}
            handleModal={handleModal}
          />
        </div>
      </section>

      <div className="users-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            handleModal={handleModal}
            setUpdateUser={setUpdateUser}
          />
        ))}
      </div>
    </div>
  )
}

export default App
