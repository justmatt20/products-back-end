const create = (req, res) => {
    const {name, description, price, imageUrl} = req.body
    
    const db = req.app.get('db');

    db.create_product([name, description, price, imageUrl])
    .then(()=> {res.sendStatus(200);})
    .catch(e => {res.status(500).send({message: 'Oops, something went wrong.'});
});
}

const getOne = (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;

    db.read_product(id)
    .then((product)=> {res.status(200).send(product);})
    .catch(e => {res.status(500).send({message: 'Oops, something went wrong.'});
});
    
}

const getAll = (req, res) => {
    
    const db = req.app.get('db');

    db.read_products()
    .then((products => res.status(200).send(products)))
    .catch(e => {res.status(500).send({message: 'Oops, something went wrong.'});
    console.log(e)
});
}

const update = (req, res) => {
    const {params, query} = req;
    
    const db = req.app.get('db');

    db.update_product([params.id, query.description])
    .then((products => res.status(200).send(products)))
    .catch(e => {res.status(500).send({message: 'Oops, something went wrong.'});
    console.log(e)
});
}

const productDelete = (req, res) => {
    const {id} = req.params;
    
    const db = req.app.get('db');

    db.delete_product(id)
    .then(() => res.sendStatus(200))
    .catch(e => {res.status(500).send({message: 'Oops, something went wrong.'});
    console.log(e)
});
}

module.exports = {
create,
getOne,
getAll,
update,
productDelete 
}