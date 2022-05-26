import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Form = ({ total, compra }) => {
    const verificarSiExiste = (cart, item) => {
        return compra.some((a) => a.id === item.id)
    };

    const { cartDeleteAll, fetchGenerateTicket } = useContext(GlobalContext);

    const [form, setForm] = useState({
        buyer: {
            email: "",
            name: "",
            lastName: "",
            telephone: "",
        },
        total: total,
        items: compra,
    });

    const [error, setError] = useState({});

    const {
        buyer: { email, name, lastName, telephone },
    } = form;

    const onSubmit = (e) => {
        e.preventDefault();
        if (verificarSiExiste([email, name, lastName, telephone])) {
            Swal.fire({
                title: "oops!",
                text: "Faltan completar campos",
                icon: "error",
            });
            return;
        }
        Swal.fire({
            title: "Genial!",
            text: "Su orden de compra se genero correctamente",
            icon: "sucess",
        });
        fetchGenerateTicket({ datos: form });
        cartDeleteAll();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value,
            }
        })
    };

    const handleBlur = (e) => {
        const { value, name } = e.target;
        if (value === '') {
            setError({ ...error, [name]: "Este campo es obligatorio" });
            return;
        }
        setError({});
    }

    return (
        <>
            <form onSubmit={onSubmit} className="container border">

                <h3 className="text-uppercase text-center my-4">Datos personales</h3>
                {(form.buyer).map((key, index) => (

                    <input
                        key={index}
                        className="mb-3"
                        type="text"
                        name={`${key}`}
                        value={key.value}
                        onChange={handleChange}
                        onBlur={handleBlur} //Falta
                        inputClassName={`form-control ${error[key] && "no-es-valido"}`}
                        placeholder={`${key}`}
                        error={error}

                    />
                ))}
                <div className="border row d-flex px-2">
                    <div className="col-12 col-lg-9">
                        <p className="fs-4 text-uppercase">total</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <p className="fs-4">${total}</p>
                    </div>
                    <button type="submit" className="btn btn-primary text-uppercase w-100 my-4"> Terminar compra</button>
                </div>
                        :
                <Link to="/" className="btn btn-secondary text-uppercase my-2 w-100">
                    Volver a comprar
                </Link>
            </form>
        </>
    );
};

export default Form