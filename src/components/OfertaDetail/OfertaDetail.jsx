import BtnAgregar from "../BtnAgregar/BtnAgregar"
import Contador from "../Contador/Contador"

export default function OfertaDetail({data}) {
    const imgSize = {height: "350px"}
    const total = data.price - (data.price * data.oferta) / 100

    return (
        <section className="container">
            <div className="row">
                <div className="col center">
                    <img src={data.img} style={imgSize}></img>
                </div>
                <div className="col">
                    <h2 className="center">{data.nombre}</h2>
                    <p className="mt-3">{data.description}</p>
                    <h5 className="center">
                        <span className="text-muted text-decoration-line-through me-2">${data.price}</span>
                        <span className="fw-bolder">${total}</span>
                    </h5>
                    <Contador/>
                    <div className="center"><button className="btn btn-outline-dark mt-2">Agregar al Carrito</button></div>
                    <textarea class="form-control mt-3" id="exampleFormControlTextarea1" rows="3" placeholder="Comentarios..."></textarea>
                </div>
            </div>
        </section>
    )
}