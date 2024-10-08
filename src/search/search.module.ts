import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ElasticsearchModule.register({
      node: process.env.ELASTICSEARCH_NODE,

      auth: {
        username: process.env.ELASTICSEARCH_USERNAME,
        password: process.env.ELASTICSEARCH_PASSWORD,
      },
      maxRetries: +process.env.ELASTICSEARCH_MAX_RETRIES,
      requestTimeout: +process.env.ELASTICSEARCH_REQ_TIMEOUT,
    }),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
