import { SearchPropertyUseCase } from "@/use-cases/search-properties";
import type { FastifyReply, FastifyRequest } from "fastify";

export function search(req: FastifyRequest, reply: FastifyReply) {
  const useCase = new SearchPropertyUseCase();
  const response = useCase.execute();

  return reply.status(200).send();
}
