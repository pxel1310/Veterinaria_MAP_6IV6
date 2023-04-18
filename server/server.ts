import express from "express";
import type { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

import {
  // authRoute,
  vacunaCRouter,
  estadoExpedienteCRouter,
  categoriaCRouter,
  expedienteEnfermedadRRouter,
  clienteDRouter,
  expedienteVacunaRRouter,
  productoVentaMRoute,
  animalProductoCRoute,
  duenoVeterinariaDRoute,
  enfermedadCRouter,
  especieCRouter,
  expedienteMRoute,
  fisiologiasMRoute,
  gastoFijoMRoute,
  loteMRoute,
  periodoDRoute,
  personalVeterinariaDRoute,
  rolCRouter,
  marcaCRouter,
  productoMRoute,
  mascotaMRoute,
  servicioCRouter,
  sexoCRouter,
  proveedorCRouter,
  razaCRouter,
  usuarioMRoute,
  ventaDRoute,
  veterinariaMRoute,
  colorCRouter,
} from "../routes";

import dbConnection from "../database/connection";

dotenv.config();
interface StartServerProps {
  initServer: () => Promise<void>;
}

const apiPrefix = "/api";

const apiPaths = {
  auth: `${apiPrefix}/auth`,
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
};

const startServer: () => StartServerProps = () => {
  const app: Application = express();
  const port: string = process.env.PORT || "8080";

  const dbConnectionAsync = async (): Promise<void> => {
    await dbConnection.authenticate();

    await dbConnection
      .sync({ force: true })
      .then(() => console.log("Base de datos conectada"))
      .catch(console.error);
  };

  const middlewares = (): void => {
    app.use(cors());
    app.use(express.json());
    app.use(express.static("public"));
  };

  const routes = (): void => {
    // app.use(apiPaths.auth, authRoute);
    //   Catalogo
    app.use(apiPaths.byTable.catalogo.animalProductoC, animalProductoCRoute);
    app.use(apiPaths.byTable.catalogo.categoriaC, categoriaCRouter);
    app.use(apiPaths.byTable.catalogo.colorC, colorCRouter);
    app.use(apiPaths.byTable.catalogo.enfermedadC, enfermedadCRouter);
    app.use(apiPaths.byTable.catalogo.especieC, especieCRouter);
    app.use(
      apiPaths.byTable.catalogo.estadoExpedienteC,
      estadoExpedienteCRouter
    );
    app.use(apiPaths.byTable.catalogo.marcaC, marcaCRouter);
    app.use(apiPaths.byTable.catalogo.proveedorC, proveedorCRouter);
    app.use(apiPaths.byTable.catalogo.razaC, razaCRouter);
    app.use(apiPaths.byTable.catalogo.rolC, rolCRouter);
    app.use(apiPaths.byTable.catalogo.servicioC, servicioCRouter);
    app.use(apiPaths.byTable.catalogo.sexoC, sexoCRouter);
    app.use(apiPaths.byTable.catalogo.vacunaC, vacunaCRouter);
    //   Detalle
    app.use(apiPaths.byTable.detalle.clienteD, clienteDRouter);
    app.use(apiPaths.byTable.detalle.duenoVeterinariaD, duenoVeterinariaDRoute);
    app.use(apiPaths.byTable.detalle.periodoD, periodoDRoute);
    app.use(
      apiPaths.byTable.detalle.personalVeterinariaD,
      personalVeterinariaDRoute
    );
    app.use(apiPaths.byTable.detalle.ventaD, ventaDRoute);
    //   Maestra
    app.use(apiPaths.byTable.maestra.expedienteM, expedienteMRoute);
    app.use(apiPaths.byTable.maestra.fisiogiasM, fisiologiasMRoute);
    app.use(apiPaths.byTable.maestra.gastoFijoM, gastoFijoMRoute);
    app.use(apiPaths.byTable.maestra.loteM, loteMRoute);
    app.use(apiPaths.byTable.maestra.mascotaM, mascotaMRoute);
    app.use(apiPaths.byTable.maestra.productoM, productoMRoute);
    app.use(apiPaths.byTable.maestra.productoVentaM, productoVentaMRoute);
    app.use(apiPaths.byTable.maestra.usuarioM, usuarioMRoute);
    app.use(apiPaths.byTable.maestra.veterinariaM, veterinariaMRoute);
    //   Relacional
    app.use(
      apiPaths.byTable.relacional.expedienteEnfermedadR,
      expedienteEnfermedadRRouter
    );
    app.use(
      apiPaths.byTable.relacional.expedienteVacunaR,
      expedienteVacunaRRouter
    );
  };

  const listen = (): void => {
    app.listen(port);
  };

  const initServer = async (): Promise<void> => {
    await dbConnectionAsync().then((): void => {
      middlewares();
      routes();
      listen();
    });
  };

  return {
    initServer,
  };
};

export default startServer;
