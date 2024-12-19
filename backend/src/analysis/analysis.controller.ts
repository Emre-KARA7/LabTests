import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
// entities
import { Analyt } from './entities/analyt.entity';
import { Guide } from './entities/guide.entity';
import { AnalytRecord } from './entities/analytRecord.entity';
import { AnalysisService } from './analysis.service';
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

@Controller('analysis')
export class UsersController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Post('/create-analyt')
  @Roles('admin')
  createAnalyt(@Body() createAnalytDto: CreateAnalytDto): Promise<Analyt> {
    return this.analysisService.createAnalyt(createAnalytDto);
  }

  @Get('/get-all-analyts')
  @Roles() // This is a public route
  findAllAnalyts(): Promise<Analyt[]> {
    return this.analysisService.findAllAnalyts();
  }

  @Post('/update-analyt')
  @Roles('admin')
  updateAnalyt(@Body() updateAnalytDto: UpdateAnalytDto): Promise<Analyt> {
    return this.analysisService.updateAnalyt(updateAnalytDto);
  }

  // @Delete('/delete-analyt/:id')
  // @Roles('admin')
  // removeAnalyt(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.analysisService.removeAnalyt(id);
  // }
  ///

  @Post('/create-guide')
  @Roles('admin')
  createGuide(@Body() createGuideDto: CreateGuideDto): Promise<Guide> {
    return this.analysisService.createGuide(createGuideDto);
  }

  @Get('/get-all-guides')
  @Roles() // This is a public route
  findAllGuides(): Promise<Guide[]> {
    return this.analysisService.findAllGuides();
  }

  @Post('/update-guide')
  @Roles('admin')
  updateGuide(@Body() updateGuideDto: UpdateGuideDto): Promise<Guide> {
    return this.analysisService.updateGuide(updateGuideDto);
  }

  // @Delete('/delete-guide/:id')
  // @Roles('admin')
  // removeGuide(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.analysisService.removeGuide(id);
  // }
  ///

  @Post('/create-analyt-record')
  @Roles('admin')
  createAnalytRecord(
    @Body() createAnalytRecordDto: CreateAnalytRecordDto,
  ): Promise<AnalytRecord> {
    return this.analysisService.createAnalytRecord(createAnalytRecordDto);
  }

  @Get('/get-all-analyt-records')
  @Roles() // This is a public route
  findAllAnalytRecords(): Promise<AnalytRecord[]> {
    return this.analysisService.findAllAnalytRecords();
  }

  @Get('/search-analyt-records')
  @Roles() // This is a public route
  searchAnalytRecords(
    @Body() searchAnalytRecordDto: SearchAnalytRecordDto,
  ): Promise<AnalytRecord[]> {
    return this.analysisService.searchAnalytRecords(searchAnalytRecordDto);
  }

  @Post('/update-analyt-record')
  @Roles('admin')
  updateAnalytRecord(
    @Body() updateAnalytRecordDto: UpdateAnalytRecordDto,
  ): Promise<AnalytRecord> {
    return this.analysisService.updateAnalytRecord(updateAnalytRecordDto);
  }

  // @Delete('/delete-analyt-record/:id')
  // @Roles('admin')
  // removeAnalytRecord(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.analysisService.removeAnalytRecord(id);
  // }

  ///

  @Post('/create-test-report')
  @Roles('admin')
  createTestReport(
    @Body() createTestReportDto: CreateTestReportDto,
  ): Promise<TestReport> {
    return this.analysisService.createTestReport(createTestReportDto);
  }

  @Get('/get-all-test-reports')
  @Roles() // This is a public route
  findAllTestReports(): Promise<TestReport[]> {
    return this.analysisService.findAllTestReports();
  }

  @Post('/update-test-report')
  @Roles('admin')
  updateTestReport(
    @Body() updateTestReportDto: UpdateTestReportDto,
  ): Promise<TestReport> {
    return this.analysisService.updateTestReport(updateTestReportDto);
  }

  // @Delete('/delete-TestReport/:id')
  // @Roles('admin')
  // removeTestReport(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.analysisService.removeTestReport(id);
  // }
  ///

  @Post('/create-test-value')
  @Roles('admin')
  createTestValue(
    @Body() createTestValueDto: CreateTestValueDto,
  ): Promise<TestValue> {
    return this.analysisService.createTestValue(createTestValueDto);
  }

  @Get('/get-all-test-values')
  @Roles() // This is a public route
  findAllTestValues(): Promise<TestValue[]> {
    return this.analysisService.findAllTestValues();
  }

  @Post('/update-test-value')
  @Roles('admin')
  updateTestValue(
    @Body() updateTestValueDto: UpdateTestValueDto,
  ): Promise<TestValue> {
    return this.analysisService.updateTestValue(updateTestValueDto);
  }

  // @Delete('/delete-test-value/:id')
  // @Roles('admin')
  // removeTestValue(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.analysisService.removeTestValue(id);
  // }
  ///
}
