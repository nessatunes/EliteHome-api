import { app } from "./app";

const APP_PORT = 4000;

app
  .listen({
    host: "0.0.0.0",
    port: 4000,
  })
  .then(() => {
    console.log(`🚀 HTTP Server is Running at ${APP_PORT}!`);
  });
