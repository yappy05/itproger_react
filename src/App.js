import React, {componentDidUpdate} from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=2"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        users: [
            {
              id: 1,
              name: "Иван Петров",
              age: 28,
              email: "ivan.petrov@example.com",
              isHappy: true,
              hobbies: ["чтение", "плавание", "путешествия"],
              address: {
                city: "Москва",
                street: "Ленина, 15",
                zipCode: "101000"
              },
              registrationDate: new Date("2020-05-15")
            },
            {
              id: 2,
              name: "Анна Сидорова",
              age: 24,
              email: "anna.sidorova@example.com",
              isHappy: false,
              hobbies: ["рисование", "йога"],
              address: {
                city: "Санкт-Петербург",
                street: "Невский проспект, 42",
                zipCode: "190000"
              },
              registrationDate: new Date("2021-02-20"),
              lastLogin: new Date("2023-01-10")
            }
          ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}

  render(){
    return (<div>
      <Header title="Cписок пользователей"/>
      <main>
        <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>
    </div>)  
  }

  deleteUser(id){
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  addUser(user){
    const id = this.state.users.length + 1;
    this.setState({users: [...this.state.users, {id, ...user}]})
    console.log({id, ...user})
  }
  
  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user
    this.setState({users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }
} 

export default App
