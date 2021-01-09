const dotenv = require("dotenv");
const { config } = dotenv;
config({ path: `.env.${process.env.NODE_ENV}` });
