import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

type dataResponse = {
  UnitPrice: number;
  Description: string;
  Quantity: number;
  Country: string;
  InvoiceNo: string;
  InvoiceDate: Date;
  CustomerID: number;
  StockCode: string;
};

@Injectable()
export class SearchService {
  constructor(private readonly esService: ElasticsearchService) {}

  async search(search: { key: string }) {
    let results = new Set();
    const response = await this.esService.search({
      index: process.env.ELASTICSEARCH_INDEX,
      body: {
        size: 50,
        query: {
          match_phrase: search,
        },
      },
    });
    const hits = response.hits.hits;
    hits.map((item) => {
      results.add(item._source as dataResponse);
    });

    return { results: Array.from(results), total: response.hits.total };
  }
}
