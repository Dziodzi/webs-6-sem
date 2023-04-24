import prisma from "../../user/services/UserService";
import { PackageDTO } from "../dto/PackageDTO";

export class PackageService {
  public createPackage(body: PackageDTO) {
    const data = {
      title: body.title,
      content: body.content,
      price: Number(body.price),
    };
    try {
      return prisma.package.create({
        data,
      });
    } catch (e) {
      return e;
    }
  }

  async editTextOfPackageById(id: string, content: string) {
    const num = Number(id);
    const str = String(content);
    return prisma.package.update({
      where: {
        id: num,
      },
      data: {},
    });
  }

  public findPackageById(id: string) {
    const num = Number(id);
    return prisma.package.findUnique({
      where: {
        id: num,
      },
    });
  }

  async deletePackageById(id: string) {
    const num = Number(id);
    return prisma.package.delete({
      where: {
        id: num,
      },
    });
  }
}
