import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/roles.guard';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
      cache: true, // cache the loaded .env file faster loading
      // process.env.DATABASE_USER  // access env variables
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DOCKER == 'true' ? 'db' : 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'testdb',
      autoLoadEntities: true,
      synchronize: true, // make it false in production !!!
      migrationsTableName: 'migration_records',
      migrations: [
        process.env.IS_PRODUCTION == 'true'
          ? 'dist/migrations/*.js'
          : 'src/migrations/*.ts',
      ],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      // global guard
      provide: APP_GUARD,
      useClass: RolesGuard, // protect all routes
    },
  ],
})
export class AppModule {}
