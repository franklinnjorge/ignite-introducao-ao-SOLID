import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.params;
    const user = this.showUserProfileUseCase.execute(user_id);
    // tentei que nem doido mas não sei o por que isso ficou assim kkkkk
    return response.status(201).json({ user });
  }
}

export { ShowUserProfileController };
