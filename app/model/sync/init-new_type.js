const { model } = require('../new_type');

model.sync({ force: true }).then(() => {
    process.exit();
});