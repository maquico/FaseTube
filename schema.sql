DROP DATABASE VideosApp_db;
CREATE DATABASE VideosApp_db;
USE VideosApp_db;

CREATE TABLE `VISIBILIDAD` (
  `visibilidad_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`visibilidad_id`)
);

CREATE TABLE `USUARIOS` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL UNIQUE, 
  `nombres` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `fecha_nac` DATETIME NULL,
  `fecha_reg` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `corrreo` VARCHAR(100) NOT NULL,
  `clave` VARCHAR(100) NULL UNIQUE,
  `foto_ruta` VARCHAR(255) NULL,
  `descripcion` VARCHAR(255) NULL,
  `suscriptores` INT DEFAULT 0 NOT NULL,
  `total_videos` INT DEFAULT 0 NOT NULL,
  `total_vistas` INT DEFAULT 0 NOT NULL,
  PRIMARY KEY (`user_id`)
);


CREATE TABLE `VIDEOS` (
  `video_id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `miniatura_ruta` VARCHAR(255) NOT NULL,
  `video_ruta` VARCHAR(255) NOT NULL,
  `likes` INT DEFAULT 0 NOT NULL,
  `dislikes` INT DEFAULT 0 NOT NULL,
  `vistas` INT DEFAULT 0 NOT NULL,
  `duracion` INT NOT NULL,
  `fecha_reg` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `fecha_publicacion` DATETIME NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `user_id` INT NOT NULL,
  `visibilidad_id` INT NOT NULL,
  PRIMARY KEY (`video_id`),
  FOREIGN KEY (`visibilidad_id`) REFERENCES `VISIBILIDAD`(`visibilidad_id`),
  FOREIGN KEY (`user_id`) REFERENCES `USUARIOS`(`user_id`)
);

CREATE TABLE `COMENTARIOS` (
  `comentario_id` INT NOT NULL AUTO_INCREMENT,
  `contenido` VARCHAR(255) NOT NULL,
  `fecha_reg` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `likes` INT DEFAULT 0 NOT NULL,
  `parentID` INT NULL,
  `dislikes` INT DEFAULT 0 NOT NULL,
  `total_respuestas` INT DEFAULT 0 NOT NULL,
  `user_id` INT NOT NULL,
  `video_id` INT NOT NULL,
  PRIMARY KEY (`comentario_id`),
  FOREIGN KEY (`video_id`) REFERENCES `VIDEOS`(`video_id`),
  FOREIGN KEY (`user_id`) REFERENCES `USUARIOS`(`user_id`)
);

CREATE TABLE `RESPUESTAS` (
  `respuesta_id` INT NOT NULL AUTO_INCREMENT,
  `contenido` VARCHAR(255) NOT NULL,
  `likes` INT DEFAULT 0 NOT NULL,
  `dislikes` INT DEFAULT 0 NOT NULL,
  `fecha_reg` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `comentario_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`respuesta_id`),
  FOREIGN KEY (`comentario_id`) REFERENCES `COMENTARIOS`(`comentario_id`),
  FOREIGN KEY (`user_id`) REFERENCES `USUARIOS`(`user_id`)
);

CREATE TABLE `TAGS` (
  `tag_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`tag_id`)
);

CREATE TABLE `VIDEOS_TAGS` (
  `video_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`video_id`, `tag_id`),
  FOREIGN KEY (`tag_id`) REFERENCES `TAGS`(`tag_id`),
  FOREIGN KEY (`video_id`) REFERENCES `VIDEOS`(`video_id`)
);

CREATE TABLE `SUSCRIPCIONES` (
  `suscripcion_id` INT NOT NULL AUTO_INCREMENT,
  `suscriptor_id` INT NOT NULL,
  `canal_id` INT NOT NULL,
  `fecha_reg` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (`suscripcion_id`),
  FOREIGN KEY (`suscriptor_id`) REFERENCES `USUARIOS`(`user_id`),
  FOREIGN KEY (`canal_id`) REFERENCES `USUARIOS`(`user_id`)
);

DROP TABLE IF EXISTS `LIKED_VIDEOS`;

CREATE TABLE `LIKED_VIDEOS` (
  `user_id` INT NOT NULL,
  `video_id` INT NOT NULL,
  `isLiked` INT NOT NULL,
  PRIMARY KEY (`user_id`, `video_id`),
  FOREIGN KEY (`user_id`) REFERENCES `USUARIOS`(`user_id`),
  FOREIGN KEY (`video_id`) REFERENCES `VIDEOS`(`video_id`)
);

