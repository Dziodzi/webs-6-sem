import { NotImplementedException } from '@nestjs/common';
import prisma from '../../user/services/UserService';
import { CommentDTO } from '../dto/CommentDTO';

export class CommentService {
  public createComment(body: CommentDTO) {
    const data = {
      title: body.title,
      content: body.content,
      package_id: Number(body.package_id),
      author_id: Number(body.author_id),
    };
    try {
      const comment = prisma.comment.create({
        data,
      });
      return comment;
    } catch (e) {
      return e;
    }
  }

  async editTextOfCommentById(id: string, content: string) {
    const num = Number(id);
    const str = String(content);
    return prisma.comment.update({
      where: {
        id: num,
      },
      data: {},
    });
  }

  public findCommentById(id: string) {
    const num = Number(id);
    return prisma.comment.findUnique({
      where: {
        id: num,
      },
    });
  }

  async deleteCommentById(id: string) {
    const num = Number(id);
    return prisma.comment.delete({
      where: {
        id: num,
      },
    });
  }
}
