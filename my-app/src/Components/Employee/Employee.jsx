import "./Employee.scss"
import {useState} from "react"

const Employee = ({name, role}) => {

  const [tickets, setTicket] = useState(0);

  const incrementTickets = () =>{

    setTicket(tickets+1);
  }

  const reduceTickets = () =>{

    if(tickets>0) setTicket(tickets-1);
  }

      return (

        <div class="card">
          <div className="card__info">
            <h4 className="card__name">{name}</h4>
            <p className="card__job">{role}</p>
          </div>
          <div className="card__tickets">
            <span onClick={reduceTickets} className = "card__decrease">-</span>
            <span className="card__number">{tickets}</span>
            <span  onClick={incrementTickets}className="card__increase">+</span>
          </div>
        </div>
      )

}

export default Employee;
