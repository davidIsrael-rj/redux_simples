import React from "react"
import Card from "./Card"

export default props => {
    return (
        <Card title="Soma de Números" blue>
            <div className="Intervalo">
                <span>
                    <span>Resultado:</span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    )
}