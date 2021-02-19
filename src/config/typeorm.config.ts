import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { dirname } from 'path'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'taskmanagement-database',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
}
