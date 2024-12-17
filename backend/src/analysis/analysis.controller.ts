import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { GetUserDto } from './dto/get-user.dto';
import { Analyt } from './entities/analyt.entity';
import { Guide } from './entities/guide.entity';
import { AnalytRecord } from './entities/analytRecord.entity';
import { UsersService } from './analysis.service';
import { TestReport } from './entities/testReport.entity';
import { TestValue } from './entities/testValue.entity';
import { ApiResponse, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create-analyt')
  @Roles('admin')
  createAnalyt(@Body() createUserDto: CreateUserDto): Promise<Analyt> {
    return this.usersService.createAnalyt(createUserDto);
  }

  @Get('/get-all-analyts')
  @Roles() // This is a public route
  findAllAnalyts(): Promise<Analyt[]> {
    return this.usersService.findAllAnalyts();
  }

  @Post('/update-analyt')
  @Roles('admin')
  updateAnalyt(@Body() createUserDto: CreateUserDto): Promise<Analyt> {
    return this.usersService.updateAnalyt(createUserDto);
  }

  // @Delete('/delete-analyt/:id')
  // @Roles('admin')
  // removeAnalyt(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.usersService.removeAnalyt(id);
  // }
  ///

  @Post('/create-guide')
  @Roles('admin')
  createGuide(@Body() createUserDto: CreateUserDto): Promise<Guide> {
    return this.usersService.createGuide(createUserDto);
  }

  @Get('/get-all-guides')
  @Roles() // This is a public route
  findAllGuides(): Promise<Guide[]> {
    return this.usersService.findAllGuides();
  }

  @Post('/update-guide')
  @Roles('admin')
  updateGuide(@Body() createUserDto: CreateUserDto): Promise<Guide> {
    return this.usersService.updateGuide(createUserDto);
  }

  // @Delete('/delete-guide/:id')
  // @Roles('admin')
  // removeGuide(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.usersService.removeGuide(id);
  // }
  ///

  @Post('/create-analyt-record')
  @Roles('admin')
  createAnalytRecord(
    @Body() createUserDto: CreateUserDto,
  ): Promise<AnalytRecord> {
    return this.usersService.createAnalytRecord(createUserDto);
  }

  @Get('/get-all-analyt-records')
  @Roles() // This is a public route
  findAllAnalytRecords(): Promise<AnalytRecord[]> {
    return this.usersService.findAllAnalytRecords();
  }

  @Get('/search-analyt-records')
  @Roles() // This is a public route
  searchAnalytRecords(): Promise<AnalytRecord[]> {
    return this.usersService.searchAnalytRecords();
  }

  @Post('/update-analyt-record')
  @Roles('admin')
  updateAnalytRecord(
    @Body() createUserDto: CreateUserDto,
  ): Promise<AnalytRecord> {
    return this.usersService.updateAnalytRecord(createUserDto);
  }

  // @Delete('/delete-analyt-record/:id')
  // @Roles('admin')
  // removeAnalytRecord(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.usersService.removeAnalytRecord(id);
  // }

  ///

  @Post('/create-test-report')
  @Roles('admin')
  createTestReport(@Body() createUserDto: CreateUserDto): Promise<TestReport> {
    return this.usersService.createTestReport(createUserDto);
  }

  @Get('/get-all-test-reports')
  @Roles() // This is a public route
  findAllTestReports(): Promise<TestReport[]> {
    return this.usersService.findAllTestReports();
  }

  @Post('/update-test-report')
  @Roles('admin')
  updateTestReport(@Body() createUserDto: CreateUserDto): Promise<TestReport> {
    return this.usersService.updateTestReport(createUserDto);
  }

  // @Delete('/delete-TestReport/:id')
  // @Roles('admin')
  // removeTestReport(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.usersService.removeTestReport(id);
  // }
  ///

  @Post('/create-test-value')
  @Roles('admin')
  createTestValue(@Body() createUserDto: CreateUserDto): Promise<TestValue> {
    return this.usersService.createTestValue(createUserDto);
  }

  @Get('/get-all-test-values')
  @Roles() // This is a public route
  findAllTestValues(): Promise<TestValue[]> {
    return this.usersService.findAllTestValues();
  }

  @Post('/update-test-value')
  @Roles('admin')
  updateTestValue(@Body() createUserDto: CreateUserDto): Promise<TestValue> {
    return this.usersService.updateTestValue(createUserDto);
  }

  // @Delete('/delete-test-value/:id')
  // @Roles('admin')
  // removeTestValue(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.usersService.removeTestValue(id);
  // }
  ///
}
