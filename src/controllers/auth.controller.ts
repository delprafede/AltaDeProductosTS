export const escuchando = (req, res) => {
    res.status(200).send([{
        id: 1, name: "federico"
    },{
        id:2, name: "juan"
    }])
}