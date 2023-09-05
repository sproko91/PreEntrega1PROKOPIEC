import '../../styles/CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) =>{
        const[name, setName] = useState('')
        const[lastname, setLastname] = useState('')
        const[phone, setPhone] = useState('')
        const[email, setEmail] = useState('')

        const handleSubmit = (event) => {
            event.preventDefault()

            const userData = {
                name, lastname, phone, email
            }

            onConfirm(userData)
        }

        return (
            <>
            <form className="form row g-3 formCheckout" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label className="form-label">Nombre:</label>
                <input name='name' type="text" className="form-control" value={name} onChange={({ target }) => setName(target.value)}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Apellido:</label>
                <input name='lastname' type="text" className="form-control" value={lastname} onChange={({ target }) => setLastname(target.value)}/>
            </div>
            <div className="col-12">
                <label className="form-label">Telefono:</label>
                <input name='phone' type="text" className="form-control" placeholder="1155667788" value={phone} onChange={({ target }) => setPhone(target.value)}/>
            </div>
            <div className="col-12">
                <label className="form-label">Email:</label>
                <input name='email' type="email" className="form-control" placeholder="xxxxxx@gmail.com" value={email} onChange={({ target }) => setEmail(target.value)}/>
            </div>
             <div className="col-12 text-center">
                <button type="submit" className="btnAgregar btnForm">Crear Orden</button>
            </div>
            </form>
            </>
           
        )

}

export default CheckoutForm
