
import '../styles/ContactContainer.css'

const ContactContainer = () => {

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const fields = Object.fromEntries(new window.FormData(event.target))
        console.log(fields)

    }
    return (
    <>
    <title>Willow Aromatic - Contactanos</title>
        <form className="form row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
            <label className="form-label">Nombre:</label>
            <input name='name' type="text" className="form-control"/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Apellido:</label>
            <input name='lastname' type="text" className="form-control"/>
        </div>
        <div className="col-12">
            <label className="form-label">Email:</label>
            <input name='email' type="email" className="form-control" id="inputAddress" placeholder="xxxxxx@gmail.com"/>
        </div>
        <div className="col-12">
            <label className="form-label">Tu mensaje:</label>
            <textarea name='message' className="form-control" placeholder='Escribe aqui tu mensaje...' rows={5}></textarea>
        </div>      
         <div className="col-12 text-center">
            <button type="submit" className="btnAgregar btnForm">Enviar</button>
        </div>
        </form>
    </>
    )  
}

export default ContactContainer