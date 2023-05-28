async function getAllTheaters(){
    return Theater.find().lean();
}

module.exports = {
    getAllTheaters,
}