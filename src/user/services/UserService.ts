import { PrismaClient } from '@prisma/client';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { UserDTO } from '../dto/UserDTO';

const prisma = new PrismaClient();
export default prisma;

@Injectable()
export class UserService {
  public createUser(body: UserDTO) {
    const username = body.username;
    const password = body.password;
    try {
      const user = prisma.user.create({
        data: {
          username,
          password,
        },
      });
      return user;
    } catch (e) {
      return e;
    }
  }

  public findUserUsername(username: string) {
    const str = String(username);
    const user = prisma.user.findFirst({
      where: {
        username: str,
      },
    });
    return user;
  }

  public findUserId(id: string) {
    const num = Number(id);
    return prisma.user.findUnique({
      where: {
        id: num,
      },
    });
  }

  async setAdminRoleUsername(username: string) {
    const str = String(username);
    const user = await prisma.user.updateMany({
      where: {
        username: str,
      },
      data: {
        role: 'ADMIN',
      },
    });
  }

  async setAdminRoleId(id: string) {
    const num = Number(id);
    const user = await prisma.user.update({
      where: {
        id: num,
      },
      data: {
        role: 'ADMIN',
      },
    });
  }

  async setClientRoleUsername(username: string) {
    const str = String(username);
    const user = await prisma.user.updateMany({
      where: {
        username: str,
      },
      data: {
        role: 'USER',
      },
    });
  }

  async setClientRoleId(id: string) {
    const num = Number(id);
    const user = await prisma.user.update({
      where: {
        id: num,
      },
      data: {
        role: 'USER',
      },
    });
  }

  async deleteUserByUsername(username: string) {
    const user = await prisma.user.deleteMany({
      where: {
        username,
      },
    });
  }

  async deleteUserById(id) {
    id = Number(id);
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
