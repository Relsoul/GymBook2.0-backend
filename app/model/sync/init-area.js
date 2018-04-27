const { model } = require('../area');

model.sync({ force: true }).then(() => {
    process.exit();
});