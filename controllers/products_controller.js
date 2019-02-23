module.exports = {
    //create product function
    create: (req,res) => {
        req.app.db.create_product().then((dbResponse) => {
            res.status(200).send('Created');
        }).catch(() => {
            res.status(500).send('Failed to create');
        });
    },

    //read product function
    getOne: (req,res) => {
        req.app.db.read_product().then((product) => {
            res.status(200).send(product);
        }).catch((error) => {
            res.status(500).send('Failed to get product');
            console.log(error);
        });
    },

    //read all products function
    getAll: (req,res) => {
        req.app.db.read_products().then((products) => {
            res.status(200).send(products);
        }).catch((error) => {
            res.status(500).send('Failed to get products');
        });
    },

    //update product function
    update: (req,res) => {
        req.app.db.update_product(),then(() => {
            res.status(200).send('Updated');
        }).catch(() => {
            res.status(500).send('Failed to update');
        });
    },

    //delete product function
    delete: (req,res) => {
        req.app.dc.delete_product().then(() => {
            res.status(200).send('Deleted');
        }).catch(() => {
            res.status(500).send('Failed to delete');
        });
    }
}