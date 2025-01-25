import { Fragment } from "react";
import Header from "../../componentes generales/header/header";

export default function Modelos() {
    return(
        <Fragment>
            <Header></Header> 
            <div>
                <main className="row-start-3 flex gap-6 flex-wrap items-center justify-center" style={{marginTop: '100px'}}>
                    <p>Modelos</p>
                </main>
            </div>
        </Fragment>
        
    )
}