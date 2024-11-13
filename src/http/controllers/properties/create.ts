import {
  CreatePropertyUseCase,
  type CreatePropertyUseCaseRequest,
} from "@/use-cases/create-property";
import type { FastifyReply, FastifyRequest } from "fastify";

export function create(req: FastifyRequest, reply: FastifyReply) {
  // TODO validar os dados de create das properties
  const useCase = new CreatePropertyUseCase();
  const response = useCase.execute(req.body as CreatePropertyUseCaseRequest);

  return reply.status(201).send();
}
