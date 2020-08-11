process.env.PORT = process.env.PORT || 3000;

// entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// base de datos
let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/coffe";
} else {
  urlDB =
    "mongodb+srv://kanuto:rUkNvCT1l8NwxUnv@cluster0.yx7nz.mongodb.net/coffe";
}

process.env.URLDB = urlDB;
