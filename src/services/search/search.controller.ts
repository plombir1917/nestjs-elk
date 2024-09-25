import { Body, Controller, Post } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  async search(@Body() body: any) {
    return await this.searchService.search(body.data);
  }
}
