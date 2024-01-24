import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
        gastos, 
        setGastoEditar, 
        eliminarGasto,
        filtro, 
        gastosFiltrados
    }) => {
    return (
        <div className="listado-gastos contenedor">
            

            { filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                        {gastosFiltrados.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />

                        
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
                        <h4>{gastos.length ? 'Arrastra hacia la derecha 👉 para editar y hacia la izquierda 👈 para eliminar' : ''}</h4>
                        {gastos.map( gasto => (
                            <Gasto 
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default ListadoGastos
