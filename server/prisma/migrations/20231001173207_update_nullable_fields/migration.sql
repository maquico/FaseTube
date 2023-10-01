-- CreateTable
CREATE TABLE `COMENTARIOS` (
    `comentario_id` INTEGER NOT NULL,
    `contenido` VARCHAR(255) NOT NULL,
    `fecha_reg` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `likes` INTEGER NOT NULL DEFAULT 0,
    `dislikes` INTEGER NOT NULL DEFAULT 0,
    `total_respuestas` INTEGER NOT NULL DEFAULT 0,
    `user_id` INTEGER NOT NULL,
    `video_id` INTEGER NOT NULL,

    INDEX `user_id`(`user_id`),
    INDEX `video_id`(`video_id`),
    PRIMARY KEY (`comentario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RESPUESTAS` (
    `respuesta_id` INTEGER NOT NULL,
    `contenido` VARCHAR(255) NOT NULL,
    `likes` INTEGER NOT NULL DEFAULT 0,
    `dislikes` INTEGER NOT NULL DEFAULT 0,
    `fecha_reg` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `comentario_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `comentario_id`(`comentario_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`respuesta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TAGS` (
    `tag_id` INTEGER NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `USUARIOS` (
    `user_id` INTEGER NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `nombres` VARCHAR(100) NOT NULL,
    `apellidos` VARCHAR(100) NOT NULL,
    `fecha_nac` DATETIME(0) NULL,
    `fecha_reg` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `corrreo` VARCHAR(100) NOT NULL,
    `clave` VARCHAR(100) NULL,
    `foto_ruta` VARCHAR(255) NULL,
    `descripcion` VARCHAR(255) NULL,
    `suscriptores` INTEGER NOT NULL DEFAULT 0,
    `total_videos` INTEGER NOT NULL DEFAULT 0,
    `total_vistas` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `username`(`username`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VIDEOS` (
    `video_id` INTEGER NOT NULL,
    `titulo` VARCHAR(100) NOT NULL,
    `miniatura_ruta` VARCHAR(255) NOT NULL,
    `video_ruta` VARCHAR(255) NOT NULL,
    `likes` INTEGER NOT NULL DEFAULT 0,
    `dislikes` INTEGER NOT NULL DEFAULT 0,
    `vistas` INTEGER NOT NULL DEFAULT 0,
    `duracion` INTEGER NOT NULL,
    `fecha_reg` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_publicacion` DATETIME(0) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `visibilidad_id` INTEGER NOT NULL,

    INDEX `user_id`(`user_id`),
    INDEX `visibilidad_id`(`visibilidad_id`),
    PRIMARY KEY (`video_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VIDEOS_TAGS` (
    `video_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    INDEX `tag_id`(`tag_id`),
    PRIMARY KEY (`video_id`, `tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VISIBILIDAD` (
    `visibilidad_id` INTEGER NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`visibilidad_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SUSCRIPCIONES` (
    `suscripcion_id` INTEGER NOT NULL,
    `suscriptor_id` INTEGER NOT NULL,
    `canal_id` INTEGER NOT NULL,
    `fecha_reg` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `canal_id`(`canal_id`),
    INDEX `suscriptor_id`(`suscriptor_id`),
    PRIMARY KEY (`suscripcion_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `COMENTARIOS` ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`video_id`) REFERENCES `VIDEOS`(`video_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `COMENTARIOS` ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `USUARIOS`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `RESPUESTAS` ADD CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`comentario_id`) REFERENCES `COMENTARIOS`(`comentario_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `RESPUESTAS` ADD CONSTRAINT `respuestas_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `USUARIOS`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `VIDEOS` ADD CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`visibilidad_id`) REFERENCES `VISIBILIDAD`(`visibilidad_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `VIDEOS` ADD CONSTRAINT `videos_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `USUARIOS`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `VIDEOS_TAGS` ADD CONSTRAINT `videos_tags_ibfk_1` FOREIGN KEY (`tag_id`) REFERENCES `TAGS`(`tag_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `VIDEOS_TAGS` ADD CONSTRAINT `videos_tags_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `VIDEOS`(`video_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `SUSCRIPCIONES` ADD CONSTRAINT `suscripciones_ibfk_1` FOREIGN KEY (`suscriptor_id`) REFERENCES `USUARIOS`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `SUSCRIPCIONES` ADD CONSTRAINT `suscripciones_ibfk_2` FOREIGN KEY (`canal_id`) REFERENCES `USUARIOS`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
