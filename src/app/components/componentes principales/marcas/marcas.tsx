import { Fragment } from "react";
import Header from "../../componentes generales/header/header";
import Inicio from "../inicio/inicio";

export default function Marcas(){
    return (
    <Fragment>
        <Header />
        <Inicio />
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center" style={{marginTop: '100px'}}>
          <p>Marcas</p>
        </div>
    </Fragment>
    )
} 