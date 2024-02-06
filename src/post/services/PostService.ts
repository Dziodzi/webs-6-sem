import { NotImplementedException } from '@nestjs/common';
import prisma from '../../user/services/UserService';
import { PostDTO } from '../dto/PostDTO';

export class PostService {
  public createPost(body: PostDTO) {
    const data = {
      title: body.title,
      content: body.content,
      author_id: Number(body.author_id),
    };
    try {
      const post = prisma.post.create({
        data,
      });
      return post;
    } catch (e) {
      return e;
    }
  }

  async editTextOfPostById(id: string, content: string) {
    const num = Number(id);
    const str = String(content);
    return prisma.post.update({
      where: {
        id: num,
      },
      data: {},
    });
  }

  public findPostById(id: string) {
    const num = Number(id);
    return prisma.post.findUnique({
      where: {
        id: num,
      },
    });
  }

  async deletePostById(id: string) {
    const num = Number(id);
    return prisma.post.delete({
      where: {
        id: num,
      },
    });
  }
}
