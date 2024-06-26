import React from "react"
import Card from "./Card"
import { connect } from "react-redux"

function Sorteio(props) {

    const { min, max } = props

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio de um Números" purple>
            <div className="Intervalo">
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProp(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProp)(Sorteio)