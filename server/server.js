const app = require("./app");

require("./DataBase/mongoDB");
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
