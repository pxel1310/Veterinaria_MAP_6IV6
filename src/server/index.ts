import type { Application } from 'express'
import express from 'express'
import cors from 'cors'

import dbConnection from '../database/connection'
import { validarApiToken } from '../middlewares'
import animalProductoCRoute from '../routes/byTable/catalogo/animal_producto_c_route'
import categoriaCRoute from '../routes/byTable/catalogo/categoria_c_route'
import clienteDRoute from '../routes/byTable/detalle/cliente_d_route'
import colorCRoute from '../routes/byTable/catalogo/color_c_route'
import duenoVeterinariaDRoute from '../routes/byTable/detalle/dueno_veterinaria_d_route'
import enfermedadCRoute from '../routes/byTable/catalogo/enfermedad_c_route'
import estadoExpedienteCRouter from '../routes/byTable/catalogo/estado_expediente_c_route'
import especieCRoute from '../routes/byTable/catalogo/especie_c_route'
import expedienteEnfermedadRRoute from '../routes/byTable/relacional/expediente_enfermedad_r_route'
import expedienteMRoute from '../routes/byTable/maestra/expediente_m_route'
import expedienteVacunaRRoute from '../routes/byTable/relacional/expediente_vacuna_r_route'
import fisiologiasMRoute from '../routes/byTable/maestra/fisiologias_m_route'
import gastoFijoMRoute from '../routes/byTable/maestra/gasto_fijo_m_route'
import loteMRoute from '../routes/byTable/maestra/lote_m_route'
import marcaCRoute from '../routes/byTable/catalogo/marca_c_route'
import mascotaMRoute from '../routes/byTable/maestra/mascota_m_route'
import periodoDRoute from '../routes/byTable/detalle/pedido_d_route'
import personalVeterinariaDRoute from '../routes/byTable/detalle/personal_veterinaria_d_route'
import productoMRoute from '../routes/byTable/maestra/producto_m_route'
import productoVentaMRoute from '../routes/byTable/maestra/producto_venta_m_route'
import proveedorCRoute from '../routes/byTable/catalogo/proveedor_c_route'
import razaCRoute from '../routes/byTable/catalogo/raza_c_route'
import rolCRoute from '../routes/byTable/catalogo/rol_c_route'
import servicioCRoute from '../routes/byTable/catalogo/servicio_c_route'
import sexoCRoute from '../routes/byTable/catalogo/sexo_c_route'
import tokenRouter from '../routes/tokenRouter'
import usuarioMRoute from '../routes/byTable/maestra/usuario_m_route'
import vacunaCRoute from '../routes/byTable/catalogo/vacuna_c_route'
import ventaDRoute from '../routes/byTable/detalle/venta_d_route'
import veterinariaMRoute from '../routes/byTable/maestra/veterinaria_m_route'

type IServer = () => {
  initServer: () => Promise<void>
}

const apiPrefix = '/api/v1'

const apiPaths = {
  token: `${apiPrefix}/token`,

  // ByTable
  byTable: {
    catalogo: {
      animalProductoC: `${apiPrefix}/catalogo/animalProductoC`,
      categoriaC: `${apiPrefix}/catalogo/categoriaC`,
      colorC: `${apiPrefix}/catalogo/colorC`,
      enfermedadC: `${apiPrefix}/catalogo/enfermedadC`,
      especieC: `${apiPrefix}/catalogo/especieC`,
      estadoExpedienteC: `${apiPrefix}/catalogo/estadoExpedienteC`,
      marcaC: `${apiPrefix}/catalogo/marcaC`,
      proveedorC: `${apiPrefix}/catalogo/proveedorC`,
      razaC: `${apiPrefix}/catalogo/razaC`,
      rolC: `${apiPrefix}/catalogo/rolC`,
      servicioC: `${apiPrefix}/catalogo/servicioC`,
      sexoC: `${apiPrefix}/catalogo/sexoC`,
      vacunaC: `${apiPrefix}/catalogo/vacunaC`,
    },
    detalle: {
      clienteD: `${apiPrefix}/detalle/clienteD`,
      duenoVeterinariaD: `${apiPrefix}/detalle/duenoVeterinariaD`,
      periodoD: `${apiPrefix}/detalle/periodoD`,
      personalVeterinariaD: `${apiPrefix}/detalle/personalVeterinariaD`,
      ventaD: `${apiPrefix}/detalle/ventaD`,
    },
    maestra: {
      expedienteM: `${apiPrefix}/maestra/expedienteM`,
      fisiogiasM: `${apiPrefix}/maestra/fisiogiasM`,
      gastoFijoM: `${apiPrefix}/maestra/gastoFijoM`,
      loteM: `${apiPrefix}/maestra/loteM`,
      mascotaM: `${apiPrefix}/maestra/mascotaM`,
      productoM: `${apiPrefix}/maestra/productoM`,
      productoVentaM: `${apiPrefix}/maestra/productoVentaM`,
      usuarioM: `${apiPrefix}/maestra/usuarioM`,
      veterinariaM: `${apiPrefix}/maestra/veterinariaM`,
    },
    relacional: {
      expedienteEnfermedadR: `${apiPrefix}/relacional/expedienteEnfermedadR`,
      expedienteVacunaR: `${apiPrefix}/relacional/expedienteVacunaR`,
    },
  },
}

const Server: IServer = () => {
  const app: Application = express()
  const port: string = process.env.PORT || '8080'

  const dbConnectionAsync = async (): Promise<void> => {
    await dbConnection.authenticate()

    await dbConnection
      .sync({ force: false })
      .then(() => console.log('Base de datos conectada'))
      .catch(console.error)
  }

  const middlewares = (): void => {
    app.use(cors())
    app.use(express.json())
    app.use(express.static('public'))
  }

  const routes = (): void => {
    app.use(apiPaths.token, tokenRouter)

    // ByTable
    app.use(
      apiPaths.byTable.catalogo.animalProductoC,
      [validarApiToken],
      animalProductoCRoute
    )
    app.use(
      apiPaths.byTable.catalogo.categoriaC,
      [validarApiToken],
      categoriaCRoute
    )
    app.use(apiPaths.byTable.catalogo.colorC, [validarApiToken], colorCRoute)
    app.use(
      apiPaths.byTable.catalogo.enfermedadC,
      [validarApiToken],
      enfermedadCRoute
    )
    app.use(
      apiPaths.byTable.catalogo.especieC,
      [validarApiToken],
      especieCRoute
    )
    app.use(
      apiPaths.byTable.catalogo.estadoExpedienteC,
      [validarApiToken],
      estadoExpedienteCRouter
    )
    app.use(apiPaths.byTable.catalogo.marcaC, [validarApiToken], marcaCRoute)
    app.use(
      apiPaths.byTable.catalogo.proveedorC,
      [validarApiToken],
      proveedorCRoute
    )
    app.use(apiPaths.byTable.catalogo.razaC, [validarApiToken], razaCRoute)
    app.use(apiPaths.byTable.catalogo.rolC, [validarApiToken], rolCRoute)
    app.use(
      apiPaths.byTable.catalogo.servicioC,
      [validarApiToken],
      servicioCRoute
    )
    app.use(apiPaths.byTable.catalogo.sexoC, [validarApiToken], sexoCRoute)
    app.use(apiPaths.byTable.catalogo.vacunaC, [validarApiToken], vacunaCRoute)

    app.use(apiPaths.byTable.detalle.clienteD, [validarApiToken], clienteDRoute)
    app.use(
      apiPaths.byTable.detalle.duenoVeterinariaD,
      [validarApiToken],
      duenoVeterinariaDRoute
    )
    app.use(apiPaths.byTable.detalle.periodoD, [validarApiToken], periodoDRoute)
    app.use(
      apiPaths.byTable.detalle.personalVeterinariaD,
      [validarApiToken],
      personalVeterinariaDRoute
    )
    app.use(apiPaths.byTable.detalle.ventaD, [validarApiToken], ventaDRoute)
    app.use(
      apiPaths.byTable.maestra.expedienteM,
      [validarApiToken],
      expedienteMRoute
    )
    app.use(
      apiPaths.byTable.maestra.fisiogiasM,
      [validarApiToken],
      fisiologiasMRoute
    )
    app.use(
      apiPaths.byTable.maestra.gastoFijoM,
      [validarApiToken],
      gastoFijoMRoute
    )
    app.use(apiPaths.byTable.maestra.loteM, [validarApiToken], loteMRoute)
    app.use(apiPaths.byTable.maestra.mascotaM, [validarApiToken], mascotaMRoute)
    app.use(
      apiPaths.byTable.maestra.productoM,
      [validarApiToken],
      productoMRoute
    )
    app.use(
      apiPaths.byTable.maestra.productoVentaM,
      [validarApiToken],
      productoVentaMRoute
    )
    app.use(apiPaths.byTable.maestra.usuarioM, [validarApiToken], usuarioMRoute)
    app.use(
      apiPaths.byTable.maestra.veterinariaM,
      [validarApiToken],
      veterinariaMRoute
    )

    app.use(
      apiPaths.byTable.relacional.expedienteEnfermedadR,
      [validarApiToken],
      expedienteEnfermedadRRoute
    )
    app.use(
      apiPaths.byTable.relacional.expedienteVacunaR,
      [validarApiToken],
      expedienteVacunaRRoute
    )
  }

  const listen = (): void => {
    app.listen(port)
  }

  const initServer = async (): Promise<void> => {
    await dbConnectionAsync().then((): void => {
      middlewares()
      routes()
      listen()
    })
  }

  return {
    initServer,
  }
}

export default Server
