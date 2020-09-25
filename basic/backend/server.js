const express = require('express');

const swaggerUi = require('swagger-ui-express');

YAML = require('yamljs');
swaggerDocument = YAML.load('./swagger.yml');
const db = require('./models/users');

var cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5000;
app.get('/', (req,res) => res.send('API running'));
app.get('/users', require('./routes/api/users'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));