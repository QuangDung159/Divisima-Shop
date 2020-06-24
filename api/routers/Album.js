const express = require("express");
const router = require("express-promise-router")();

const {
    validateBoby,
    validateParam,
    listSchema
} = require("../helpers/RouterHelper");

const albumController = require("../controllers/Album");

router.route("")
    .get(albumController.getAllAvai)
    .post(
        validateBoby(listSchema.albumBodyValidator),
        albumController.createAlbum
    );

router.route("/get-all")
    .get(albumController.getAll);

router.route("/by-album-id/:albumId")
    .get(albumController.getAlbumById)
    .put(albumController.updateAlbumById);

router.route("/by-admin-id/:adminId")
    .get(albumController.getAlbumByAdminId);

module.exports = router;