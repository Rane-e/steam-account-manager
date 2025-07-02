import { Injectable } from '@nestjs/common';
import { CreateEmailAccountInput } from './dto/create-email-account.input';
import { UpdateEmailAccountInput } from './dto/update-email-account.input';

@Injectable()
export class EmailAccountService {
  create(createEmailAccountInput: CreateEmailAccountInput) {
    return 'This action adds a new emailAccount';
  }

  findAll() {
    return `This action returns all emailAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailAccount`;
  }

  update(id: number, updateEmailAccountInput: UpdateEmailAccountInput) {
    return `This action updates a #${id} emailAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailAccount`;
  }
}
