import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { userId } = request.body;

    this.listAllUsersUseCase.execute(userId);

    return response.status(201).send();
  }
}

export { ListAllUsersController };
