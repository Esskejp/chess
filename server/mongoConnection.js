const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Połączono z MongoDB");
    } catch (error) {
        console.error("Błąd połączenia z MongoDB:", error);
        process.exit(1); // Zakończ proces, jeśli nie uda się połączyć
    }
};

module.exports = connectToMongoDB;
