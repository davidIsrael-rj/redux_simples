import { type } from "@testing-library/user-event/dist/type"

// Action Creator
export function alterarNumeroMinimo(novoNumero){
    return{
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero){
    return{
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}