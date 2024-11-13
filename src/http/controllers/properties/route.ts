import type { Property } from "@/entities/property";
import type { FastifyInstance } from "fastify";
import { create } from "./create";
import { search } from "./search";

export const properties: Property[] = [];

export async function propertiesRoutes(app: FastifyInstance) {
  app.post("/properties", create);
  app.get("/properties", search);
}
