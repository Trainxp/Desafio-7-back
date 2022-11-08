 prod()
    await knex.schema.dropTableIfExists('productos').then(() => {
        knex.schema.createTable('productos', (table) => {
            table.increments('id');
            table.string('title');
            table.float('price');
            table.string('thumbnail');
        }).then(() => {
            console.log('table product created')
        }).catch((err) => {
            console.log(err)
        })
    });

    const options = {
        mysql: {
            client: "mysql",
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: 'ecommerce'
            },
            pool: { min: 0, max: 10 }
        }}