import React from 'react';

const Form =()=>(
    <div className="Form">
        <div className="Form-head">
            <h2>Dar en adopcion</h2>
        </div>
        <div className="Form-item">
            <form action="">
                <input type="text" name="name" placeholder="Nombre de tu mascota"/>
                <input type="text" name="description" placeholder="Describe tu mascota"/>
                <select name="type">
                    <option disabled selected>seleccionar</option>
                    <option value="cat">Gato</option>
                    <option value="dog">Perro</option>
                </select>
                <select name="gender">
                    <option disabled selected>seleccionar</option>
                    <option value="female">Femenino</option>
                    <option value="male">Maculino</option>
                </select>
                <select name="adopt">
                    <option disabled selected>seleccionar</option>
                    <option value="true">Dar en adopción</option>
                    <option value="false">Cuidar</option>
                </select>
                <input type="file" name="photo"/>
                <button>enviar</button>
            </form>
        </div>
    </div>
);

export default Form;