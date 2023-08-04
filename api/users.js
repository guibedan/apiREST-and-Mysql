module.exports = (app) => {

    const get = async (req, res) => {
        
        const users = await app.database("users").select("*")

        return res.json(users)
    }

    const getById = async (req, res) => {
        
        const id = req.params.id
        if(!id) { return res.status(400).json({ error: "Id não informado!" }) }

        const usersExists = await app.database("users").where({ id }).first()
        if(!usersExists) { return res.status(400).json({ error: "Id não encontrado!" }) }

        const users = await app.database("users").where({ id }).first()

        return res.json(users)
    }

    const post = async (req, res) => {

        const user = {...req.body}

        const userExists = await app.database("users").where({ nome: user.nome }).firts()
        if(userExists){
            return res.status(400).json({ error: "Usuário já cadastrado." })
        }

        app.database("users")
            .insert(user)
            .then((_) => res.status(200).send())
            .catch((err) => res.status(500).send(err))

    }

    const remove = async (req, res) => {
        
        const id = req.params.id
        if(!id) { return res.status(400).json({ error: "Id não informado!" }) }

        const usersExists = await app.database("users").where({ id }).first()
        if(!usersExists) { return res.status(400).json({ error: "Id não encontrado!" }) }

        await app.database("users").where({ id }).del()

        res.status(200).send()
    }

    const put = async (req, res) => {

        const user = {...req.body}

        const id = req.params.id
        if(!id) { return res.status(400).json({ error: "Id não informado!" }) }

        const usersExists = await app.database("users").where({ id }).first()
        if(!usersExists) { return res.status(400).json({ error: "Id não encontrado!" }) }

        app.database("users")
            .update(user)
            .where({ id })
            .then((_) => res.status(200).send())
            .catch((err) => res.status(500).send(err))

    }

    return { get, getById, post, remove, put }
}