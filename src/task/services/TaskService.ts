import { NotImplementedException } from '@nestjs/common';
import prisma from '../../user/services/UserService';
import { TaskDTO } from '../dto/TaskDTO';

export class TaskService {
  public createTask(body: TaskDTO) {
    const data = {
      content: body.content,
      author_id: Number(body.author_id),
    };
    try {
      const task = prisma.task.create({
        data,
      });
      return task;
    } catch (e) {
      return e;
    }
  }

  async editTextOfTaskById(id: string, content: string) {
    const num = Number(id);
    const str = String(content);
    return prisma.task.update({
      where: {
        id: num,
      },
      data: {},
    });
  }

  public findTaskById(id: string) {
    const num = Number(id);
    return prisma.task.findUnique({
      where: {
        id: num,
      },
    });
  }

  async deleteTaskById(id: string) {
    const num = Number(id);
    return prisma.task.delete({
      where: {
        id: num,
      },
    });
  }
}
