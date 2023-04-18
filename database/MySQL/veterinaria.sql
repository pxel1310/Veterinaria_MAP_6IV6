# CREATE DATABASE `veterinaria_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
# USE `veterinaria_db`;

CREATE TABLE C_Categoria(
    id_cat INT NOT NULL AUTO_INCREMENT,
    nombre_cat VARCHAR(45) NOT NULL,
    estado_cat BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (id_cat)
);

CREATE TABLE C_Marca(
    id_mar INT NOT NULL AUTO_INCREMENT,
    nombre_mar VARCHAR(45) NOT NULL,
    estado_mar BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (id_mar)
);

CREATE TABLE C_AnimalProducto(
    id_anipro INT NOT NULL AUTO_INCREMENT,
    nombre_anipro VARCHAR(45) NOT NULL,
    estado_anipro BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (id_anipro)
);

CREATE TABLE C_Proveedor(
    id_prov INT NOT NULL AUTO_INCREMENT,
    nombre_prov VARCHAR(100) NOT NULL,
    tel_prov VARCHAR(12) NOT NULL DEFAULT '0000000000',
    PRIMARY KEY (id_prov)
);

CREATE TABLE C_Servicio(
    id_ser INT NOT NULL AUTO_INCREMENT,
    nombre_ser VARCHAR(45) NOT NULL,
    descripcion_ser VARCHAR(100) NOT NULL DEFAULT 'Sin descripción',
    estado_ser BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (id_ser)
);

CREATE TABLE C_Especie(
    id_esp INT NOT NULL AUTO_INCREMENT,
    nombre_esp VARCHAR(45) NOT NULL,
    descripcion_esp VARCHAR(100) NOT NULL DEFAULT 'Sin descripción',
    PRIMARY KEY (id_esp)
);

CREATE TABLE C_Raza(
    id_raz INT NOT NULL AUTO_INCREMENT,
    nombre_raz VARCHAR(45) NOT NULL,
    descripcion_raz VARCHAR(100) NOT NULL DEFAULT 'Sin descripción',
    id_esp INT NOT NULL,
    PRIMARY KEY (id_raz),
    FOREIGN KEY (id_esp)
        REFERENCES C_Especie (id_esp)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE C_Sexo(
    id_sex INT NOT NULL AUTO_INCREMENT,
    nombre_sex VARCHAR(45) NOT NULL,
    descripcion_sex VARCHAR(45) NOT NULL DEFAULT 'Sin descripción',
    PRIMARY KEY (id_sex)
);

CREATE TABLE C_Color(
    id_col INT NOT NULL AUTO_INCREMENT,
    nombre_col VARCHAR(45) NOT NULL,
    descripcion_col VARCHAR(45) NOT NULL DEFAULT 'Sin descripción',
    PRIMARY KEY (id_col)
);

CREATE TABLE C_Enfermedad(
    id_enf INT NOT NULL AUTO_INCREMENT,
    nombre_enf VARCHAR(45) NOT NULL,
    descripcion_enf VARCHAR(100) NOT NULL DEFAULT 'Sin descripción',
    PRIMARY KEY (id_enf)
);

CREATE TABLE C_Vacuna(
    id_vac INT NOT NULL AUTO_INCREMENT,
    nombre_vac VARCHAR(45) NOT NULL,
    descripcion_vac VARCHAR(100) NOT NULL DEFAULT 'Sin descripción',
    PRIMARY KEY (id_vac)
);

CREATE TABLE C_EstadoExpediente(
    id_estexp INT NOT NULL AUTO_INCREMENT,
    nombre_estexp VARCHAR(45) NOT NULL,
    descripcion_estexp VARCHAR(100) NOT NULL DEFAULT 'Sin descripción',
    PRIMARY KEY (id_estexp)
);

CREATE TABLE C_Rol(
    id_rol INT NOT NULL AUTO_INCREMENT,
    nombre_rol VARCHAR(45) NOT NULL,
    descripcion_rol VARCHAR(100) NOT NULL DEFAULT 'Sin descripción',
    PRIMARY KEY (id_rol)
);

CREATE TABLE D_Periodo(
    id_per INT NOT NULL AUTO_INCREMENT,
    fechaInicio_per DATE NOT NULL,
    fechaTermino_per DATE NOT NULL,
    agno_per VARCHAR(4) NOT NULL,
    balance_per FLOAT NOT NULL,
    PRIMARY KEY (id_per)
);

CREATE TABLE D_Venta(
    id_ven INT NOT NULL AUTO_INCREMENT,
    fecha_ven DATE NOT NULL,
    hora_ven TIME NOT NULL,
    montoSubtotal_ven FLOAT NOT NULL,
    montoTotal_ven FLOAT NOT NULL,
    id_per INT NOT NULL,
    PRIMARY KEY (id_ven),
    FOREIGN KEY (id_per)
        REFERENCES D_Periodo (id_per)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE M_Veterinaria(
    id_vet INT NOT NULL AUTO_INCREMENT,
    nombre_vet VARCHAR(100) NOT NULL,
    direccion_vet VARCHAR(100) NOT NULL,
    telefono_vet VARCHAR(12) NOT NULL DEFAULT '0000000000',
    correo_vet VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_vet)
);

CREATE TABLE M_Usuario(
    id_usu INT NOT NULL AUTO_INCREMENT,
    correo_usu VARCHAR(45) NOT NULL,
    contrasena_usu VARCHAR(45) NOT NULL,
    id_rol INT NOT NULL,
    PRIMARY KEY (id_usu),
    FOREIGN KEY (id_rol)
        REFERENCES C_Rol (id_rol)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE D_Cliente(
    id_cli INT NOT NULL AUTO_INCREMENT,
    id_usu INT NOT NULL UNIQUE,
    nombre_cli VARCHAR(100) NOT NULL,
    direccion_cli VARCHAR(100) NOT NULL,
    telefono_cli VARCHAR(12) NOT NULL DEFAULT '0000000000',
    correo_cli VARCHAR(45) NOT NULL,
    id_vet INT NOT NULL,
    PRIMARY KEY (id_cli),
    FOREIGN KEY (id_usu)
        REFERENCES M_Usuario (id_usu)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_vet)
        REFERENCES M_Veterinaria (id_vet)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE D_DuenoVeterinaria(
    id_duevet INT NOT NULL AUTO_INCREMENT,
    id_usu INT NOT NULL UNIQUE,
    nombre_duevet VARCHAR(100) NOT NULL,
    id_vet INT NOT NULL UNIQUE,
    PRIMARY KEY (id_duevet),
    FOREIGN KEY (id_usu)
        REFERENCES M_Usuario (id_usu)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_vet)
        REFERENCES M_Veterinaria (id_vet)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE D_PersonalVeterinaria(
    id_pervet INT NOT NULL AUTO_INCREMENT,
    id_usu INT NOT NULL UNIQUE,
    nombre_pervet VARCHAR(100) NOT NULL,
    id_vet INT NOT NULL,
    PRIMARY KEY (id_pervet),
    FOREIGN KEY (id_usu)
        REFERENCES M_Usuario (id_usu)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_vet)
        REFERENCES M_Veterinaria (id_vet)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE M_Mascota(
    id_mas INT NOT NULL AUTO_INCREMENT,
    id_cli INT NOT NULL,
    nombre_mas VARCHAR(100) NOT NULL,
    fechaNac_mas DATE NOT NULL,
    urlFoto_mas VARCHAR(100) NOT NULL DEFAULT 'https://i.imgur.com/0Z0Z0Z0.png',
    id_raz INT NOT NULL,
    id_sex INT NOT NULL,
    id_col INT NOT NULL,
    PRIMARY KEY (id_mas),
    FOREIGN KEY (id_cli)
        REFERENCES D_Cliente (id_usu)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_raz)
        REFERENCES C_Raza (id_raz)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_sex)
        REFERENCES C_Sexo (id_sex)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_col)
        REFERENCES C_Color (id_col)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE M_Fisiologias(
    id_fis INT NOT NULL AUTO_INCREMENT,
    pulso_fis FLOAT NOT NULL,
    altura_fis FLOAT NOT NULL,
    dieta_fis VARCHAR (2048) NOT NULL,
    tipoAlimentacion_fis VARCHAR (6) NOT NULL,
    cantidadAlimentacion_fis FLOAT NOT NULL,
    temperatura_fis FLOAT NOT NULL,
    frecuenciaCardiaca_fis FLOAT NOT NULL,
    frecuenciaRespiratoria_fis FLOAT NOT NULL,
    id_mas INT NOT NULL,
    PRIMARY KEY (id_fis),
    FOREIGN KEY (id_mas)
        REFERENCES M_Mascota (id_mas)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE M_Expediente(
    id_exp INT NOT NULL AUTO_INCREMENT,
    motivo_exp VARCHAR(100) NOT NULL,
    antecedentes_exp VARCHAR(100) NOT NULL,
    diagnostico_exp VARCHAR(100) NOT NULL,
    receta_exp VARCHAR(100) NOT NULL,
    fecha_exp DATE NOT NULL,
    id_mas INT NOT NULL,
    id_estexp INT NOT NULL,
    PRIMARY KEY (id_exp),
    FOREIGN KEY (id_mas)
        REFERENCES M_Mascota (id_mas)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_estexp)
        REFERENCES C_EstadoExpediente (id_estexp)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE R_ExpedienteVacuna(
    id_expvac INT NOT NULL AUTO_INCREMENT,
    id_exp INT NOT NULL,
    id_vac INT NOT NULL,
    PRIMARY KEY (id_expvac),
    FOREIGN KEY (id_exp)
        REFERENCES M_Expediente (id_exp)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_vac)
        REFERENCES C_Vacuna (id_vac)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE R_ExpedienteEnfermedad(
    id_expenf INT NOT NULL AUTO_INCREMENT,
    id_exp INT NOT NULL,
    id_enf INT NOT NULL,
    PRIMARY KEY (id_expenf),
    FOREIGN KEY (id_exp)
        REFERENCES M_Expediente (id_exp)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_enf)
        REFERENCES C_Enfermedad (id_enf)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE M_Producto(
    id_pro VARCHAR(28) NOT NULL,
    nombre_pro VARCHAR(100) NOT NULL,
    stockId_pro INT NOT NULL DEFAULT 0,
    precioVenta_pro FLOAT NOT NULL,
    estado_pro BOOLEAN NOT NULL DEFAULT 1,
    id_cat INT NOT NULL,
    id_mar INT NOT NULL,
    id_anipro INT NOT NULL,
    id_vet INT NOT NULL,
    PRIMARY KEY (id_pro),
    FOREIGN KEY (id_cat)
        REFERENCES C_Categoria (id_cat)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_mar)
        REFERENCES C_Marca (id_mar)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_anipro)
        REFERENCES C_AnimalProducto (id_anipro)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_vet)
        REFERENCES M_Veterinaria (id_vet)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE M_Lote(
    id_lot INT NOT NULL AUTO_INCREMENT,
    cantidadProducto_lot INT NOT NULL,
    fechaEntrada_lot DATE NOT NULL,
    fechaCaducidad_lot DATE NOT NULL,
    precioUnitario_lot FLOAT NOT NULL,
    montoTotal_lot FLOAT NOT NULL,
    id_per INT NOT NULL,
    id_prov INT NOT NULL,
    id_pro VARCHAR(28) NOT NULL,
    PRIMARY KEY (id_lot),
    FOREIGN KEY (id_per)
        REFERENCES D_Periodo (id_per)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_prov)
        REFERENCES C_Proveedor (id_prov)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_pro)
        REFERENCES M_Producto (id_pro)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE M_ProductoVenta (
    id_proven INT NOT NULL AUTO_INCREMENT,
    cantidad_proven INT NOT NULL,
    montoSubtotal_proven FLOAT NOT NULL,
    montoTotal_proven FLOAT NOT NULL,
    id_ven INT NOT NULL,
    id_pro VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_proven),
    FOREIGN KEY (id_ven)
        REFERENCES D_Venta (id_ven)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_pro)
        REFERENCES M_Producto (id_pro)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE M_GastoFijo(
    id_gasfij INT NOT NULL AUTO_INCREMENT,
    fecha_gasfij DATE NOT NULL,
    monto_gasfij FLOAT NOT NULL,
    id_ser INT NOT NULL,
    id_per INT NOT NULL,
    PRIMARY KEY (id_gasfij),
    FOREIGN KEY (id_ser)
        REFERENCES C_Servicio (id_ser)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (id_per)
        REFERENCES D_Periodo (id_per)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);
