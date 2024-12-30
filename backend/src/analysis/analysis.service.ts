import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Analyt } from './entities/analyt.entity';
import { Guide } from './entities/guide.entity';
import { AnalytRecord } from './entities/analytRecord.entity';
import { TestReport } from './entities/testReport.entity';
import { TestValue } from './entities/testValue.entity';
// DTO's
import { CreateAnalytDto } from './dto/create-analyt.dto';
import { UpdateAnalytDto } from './dto/update-analyt.dto';
import { CreateGuideDto } from './dto/create-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';
import { CreateAnalytRecordDto } from './dto/create-analytRecord.dto';
import { UpdateAnalytRecordDto } from './dto/update-analytRecord.dto';
import { SearchAnalytRecordDto } from './dto/search-analytRecord.dto';
import { CreateTestReportDto } from './dto/create-testReport.dto ';
import { UpdateTestReportDto } from './dto/update-testReport.dto';
import { CreateTestValueDto } from './dto/create-testValue.dto';
import { UpdateTestValueDto } from './dto/update-testValue.dto';

@Injectable()
export class AnalysisService {
  constructor(
    @InjectRepository(Analyt)
    private readonly analytRepository: Repository<Analyt>,

    @InjectRepository(Guide)
    private readonly guideRepository: Repository<Guide>,

    @InjectRepository(AnalytRecord)
    private readonly analytRecordRepository: Repository<AnalytRecord>,

    @InjectRepository(TestReport)
    private readonly testReportRepository: Repository<TestReport>,

    @InjectRepository(TestValue)
    private readonly testValueRepository: Repository<TestValue>,
  ) {}

  async createAnalyt(createAnalytDto: CreateAnalytDto): Promise<Analyt> {
    return this.analytRepository.save(createAnalytDto);
  }

  async findAllAnalyts(): Promise<Analyt[]> {
    return this.analytRepository.find();
  }

  async updateAnalyt(updateAnalytDto: UpdateAnalytDto): Promise<Analyt> {
    return this.analytRepository.save(updateAnalytDto);
  }

  // async removeAnalyt(id: number): Promise<void> {
  //   await this.analytRepository.delete(id);
  // }

  async createGuide(createGuideDto: CreateGuideDto): Promise<Guide> {
    return this.guideRepository.save(createGuideDto);
  }

  async findAllGuides(): Promise<Guide[]> {
    return this.guideRepository.find();
  }

  async updateGuide(updateGuideDto: UpdateGuideDto): Promise<Guide> {
    return this.guideRepository.save(updateGuideDto);
  }

  // async removeGuide(id: number): Promise<void> {
  //   await this.guideRepository.delete(id);
  // }

  async createAnalytRecord(
    createAnalytRecordDto: CreateAnalytRecordDto,
  ): Promise<AnalytRecord> {
    return this.analytRecordRepository.save(createAnalytRecordDto);
  }

  async findAllAnalytRecords(): Promise<AnalytRecord[]> {
    return this.analytRecordRepository.find();
  }

  async updateAnalytRecord(
    updateAnalytRecordDto: UpdateAnalytRecordDto,
  ): Promise<AnalytRecord> {
    return this.analytRecordRepository.save(updateAnalytRecordDto);
  }

  async searchAnalytRecords(
    searchAnalytRecordDto: SearchAnalytRecordDto,
  ): Promise<AnalytRecord[]> {
    // rewrite this method
    const { guideId, analytId, dayMin, dayMax } = searchAnalytRecordDto;
    const searchresults = await this.analytRecordRepository.find({
      where: {
        guideId: guideId,
        analytId: analytId,
      },
    });

    return searchresults;
  }

  // async removeAnalytRecord(id: number): Promise<void> {
  //   await this.analytRecordRepository.delete(id);
  // }

  async createTestReport(
    createTestReportDto: CreateTestReportDto,
  ): Promise<TestReport> {
    return this.testReportRepository.save(createTestReportDto);
  }

  async findAllTestReports(): Promise<TestReport[]> {
    return this.testReportRepository.find();
  }

  async updateTestReport(
    updateTestReportDto: UpdateTestReportDto,
  ): Promise<TestReport> {
    return this.testReportRepository.save(updateTestReportDto);
  }

  //>>>>>>>>>>>>>> we may need another function to search test reports ???

  // async removeTestReport(id: number): Promise<void> {
  //   await this.testReportRepository.delete(id);
  // }

  async createTestValue(
    createTestValueDto: CreateTestValueDto,
  ): Promise<TestValue> {
    return this.testValueRepository.save(createTestValueDto);
  }

  async findAllTestValues(): Promise<TestValue[]> {
    return this.testValueRepository.find();
  }
  //>>>>>>>>>>>>>> we may need another function to search test reports ???

  async updateTestValue(
    updateTestValueDto: UpdateTestValueDto,
  ): Promise<TestValue> {
    return this.testValueRepository.save(updateTestValueDto);
  }

  // async removeTestValue(id: number): Promise<void> {
  //   await this.testValueRepository.delete(id);
  // }
}
