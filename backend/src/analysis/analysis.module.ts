import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { Analyt } from './entities/analyt.entity';
import { Guide } from './entities/guide.entity';
import { AnalytRecord } from './entities/analytRecord.entity';
import { TestReport } from './entities/testReport.entity';
import { TestValue } from './entities/testValue.entity';
// services
import { AnalysisService } from './analysis.service';
// controllers
import { AnalysisController } from './analysis.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Analyt,
      Guide,
      AnalytRecord,
      TestReport,
      TestValue,
    ]),
  ],
  providers: [AnalysisService],
  controllers: [AnalysisController],
  exports: [AnalysisService],
})
export class UsersModule {}
