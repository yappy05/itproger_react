import React from "react"


class AddUser extends React.Component{
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            name: "",
            age: 1,
            email: "",
            isHappy: false
        }
    }
    render(){
      return(
        <form ref={(el) => this.myForm = el}>
            <input placeholder="Имя" onChange={(event) => this.setState({name: event.target.value})}/>
            <input placeholder="Возраст" onChange={(event) => this.setState({age: event.target.value})}/>
            <input placeholder="почта" onChange={(event) => this.setState({email: event.target.value})}/>
            <label htmlFor="isHappy">Счастлив?</label>
            <input type="checkbox" id="isHappy" onChange={(event) => this.setState({isHappy: event.target.checked})}/>
            <button type="button" onClick={() => {
                this.myForm.reset()
                this.userAdd = {
                    name: this.state.name,
                    age: this.state.age,
                    email: this.state.email,
                    isHappy: this.state.isHappy
                }
                if (this.props.user){
                    this.userAdd.id = this.props.user.id
                }
                this.props.onAdd(this.userAdd)
            }}>Добавить</button>
        </form>
       
      )
    }
}
export default AddUser