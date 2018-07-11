// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mytodos_db',
  },

  production: {
    client: 'pg',
    connection: 'postgres://gsnbjybhqlsfdv:b2b6e5f36baa9b5570736e46765b0f4fc851889ffb0c62e03a94fa7cc548ae48@ec2-184-73-174-171.compute-1.amazonaws.com:5432/dr8pcljshbve7'
  }

};
