'use strict'
import { Controller, Get, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { ModuleRef } from '@nestjs/core'
import { Response } from 'express'

@Controller()
export class AppController {
  public constructor(
    protected readonly moduleRef: ModuleRef,
    protected readonly service: AppService,
  ) { }

  @Get()
  public getInfo(@Res() res: Response): Response {
    return res.json({
      ...this.service.getInfo(),
    })
  }
}
