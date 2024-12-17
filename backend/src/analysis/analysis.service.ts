import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Analyt } from './entities/analyt.entity';
import { Guide } from './entities/guide.entity';
import { AnalytRecord } from './entities/analytRecord.entity';
import { TestReport } from './entities/testReport.entity';
import { TestValue } from './entities/testValue.entity';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AnalysisService {
  constructor(
    @InjectRepository(Analyt)
    private readonly usersRepository: Repository<Analyt>,

    @InjectRepository(Guide)
    private readonly guideRepository: Repository<Guide>,

    @InjectRepository(AnalytRecord)
    private readonly analytRecordRepository: Repository<AnalytRecord>,

    @InjectRepository(TestReport)
    private readonly testReportRepository: Repository<TestReport>,

    @InjectRepository(TestValue)
    private readonly testValueRepository: Repository<TestValue>,
  ) {}

  async createAnalyt(createUserDto: CreateUserDto): Promise<Analyt> {
    return this.usersRepository.save(createUserDto);
  }

  async findAllAnalyts(): Promise<Analyt[]> {
    return this.usersRepository.find();
  }

  async updateAnalyt(createUserDto: CreateUserDto): Promise<Analyt> {
    return this.usersRepository.save(createUserDto);
  }

  // async removeAnalyt(id: number): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }

  async createGuide(createUserDto: CreateUserDto): Promise<Guide> {
    return this.guideRepository.save(createUserDto);
  }

  async findAllGuides(): Promise<Guide[]> {
    return this.guideRepository.find();
  }

  async updateGuide(createUserDto: CreateUserDto): Promise<Guide> {
    return this.guideRepository.save(createUserDto);
  }

  // async removeGuide(id: number): Promise<void> {
  //   await this.guideRepository.delete(id);
  // }

  async createAnalytRecord(
    createUserDto: CreateUserDto,
  ): Promise<AnalytRecord> {
    return this.analytRecordRepository.save(createUserDto);
  }

  async findAllAnalytRecords(): Promise<AnalytRecord[]> {
    return this.analytRecordRepository.find();
  }

  async updateAnalytRecord(
    createUserDto: CreateUserDto,
  ): Promise<AnalytRecord> {
    return this.analytRecordRepository.save(createUserDto);
  }

  async searchAnalytRecords(
    createUserDto: CreateUserDto,
  ): Promise<AnalytRecord[]> {
    return this.analytRecordRepository.find(createUserDto);
  }

  // async removeAnalytRecord(id: number): Promise<void> {
  //   await this.analytRecordRepository.delete(id);
  // }

  async createTestReport(createUserDto: CreateUserDto): Promise<TestReport> {
    return this.testReportRepository.save(createUserDto);
  }

  async findAllTestReports(): Promise<TestReport[]> {
    return this.testReportRepository.find();
  }

  async updateTestReport(createUserDto: CreateUserDto): Promise<TestReport> {
    return this.testReportRepository.save(createUserDto);
  }

  // async removeTestReport(id: number): Promise<void> {
  //   await this.testReportRepository.delete(id);
  // }

  async createTestValue(createUserDto: CreateUserDto): Promise<TestValue> {
    return this.testValueRepository.save(createUserDto);
  }

  async findAllTestValues(): Promise<TestValue[]> {
    return this.testValueRepository.find();
  }

  async updateTestValue(createUserDto: CreateUserDto): Promise<TestValue> {
    return this.testValueRepository.save(createUserDto);
  }

  // async removeTestValue(id: number): Promise<void> {
  //   await this.testValueRepository.delete(id);
  // }
}
