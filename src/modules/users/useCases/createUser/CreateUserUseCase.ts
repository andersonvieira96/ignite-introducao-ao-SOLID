import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    if(!this.usersRepository.findByEmail(email)){
      return this.usersRepository.create({name, email});
    }else{
      throw new Error("This email is already in use.");
      
    }
  }
}

export { CreateUserUseCase };
