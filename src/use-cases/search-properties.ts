import type { Property } from "@/entities/property";
import { properties } from "@/http/controllers/properties/route";

type SearchPropertiesUseCaseResponse = {
  properties: Property[];
};

export class SearchPropertyUseCase {
  execute(): SearchPropertiesUseCaseResponse {
    return { properties };
  }
}
