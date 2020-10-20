import {Injectable} from '@nestjs/common'
import * as fs from 'fs'
import {promisify} from 'util'
import * as path from 'path';
import { ConfigService } from '@nestjs/config';
import { ArticleListResponse } from '../../common/ArticleListResponce';
const promisifiedReadDir = promisify(fs.readdir)

@Injectable()
export class ArticleService {
  constructor(private readonly _configService: ConfigService) {}

  getList(): Promise<ArticleListResponse> {
    return promisifiedReadDir(path.join(this._configService.get('dataPath'), 'articles'))
  }

  getArticle(name: string) {
    console.log(name);
    return fs.createReadStream(path.join(this._configService.get('dataPath'), 'articles', name, 'README.md'))
  }
}