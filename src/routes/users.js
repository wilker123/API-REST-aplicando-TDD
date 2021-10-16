module.exports = () => {
    const findAll = (req, res) => {
        const users = [
            {name: "Jose", email: "rebeca@gmail.com"}
        ]
        res.status(200).json(users)
    }

    const create = (req, res) => {
        res.status(201).json(req.body)
    }
//senha postgresql: softwaredb
//Port: 5432
    return { findAll, create }
}