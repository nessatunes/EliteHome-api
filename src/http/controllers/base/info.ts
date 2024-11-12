import type { FastifyReply, FastifyRequest } from "fastify";

export function info(req: FastifyRequest, reply: FastifyReply) {
  return reply.status(200).send({
    message: "App is running!",
  });
}
