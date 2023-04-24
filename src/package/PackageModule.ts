import { PackageService } from './services/PackageService';
import { Module } from '@nestjs/common';
import { PackageController } from './controllers/PackageController';

@Module({
  providers: [PackageService],
  controllers: [PackageController],
})
export class PackageModule {}
