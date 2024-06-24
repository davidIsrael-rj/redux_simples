import React from "react"
import { connect } from "react-redux"
import Card from "./Card"

function Soma (props) {
 
    const {min, max} = props
    return (
        <Card title="Soma de Números" blue>
            <div className="Intervalo">
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min)}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProp(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}
export default connect(mapStateToProp)(Soma)