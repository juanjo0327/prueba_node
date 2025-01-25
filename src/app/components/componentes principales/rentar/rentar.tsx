import { Fragment } from "react";
import Header from "../../componentes generales/header/header";

export default function Rentar() {
    return(
        <Fragment>
            <Header />
            <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center" style={{marginTop: '100px'}}>
                <p>Rentar</p>
            </div>
        </Fragment>
    )
}