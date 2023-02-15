'use strict'

import { ModuleRef } from '@nestjs/core'
import { Document, FilterQuery, Model, QueryOptions, SaveOptions, Types } from 'mongoose'
import {
  ForbiddenException,
  Logger,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common'
// import { AbstractSchema } from '~/common/abstract.schema'

export abstract class AbstractService {
  protected moduleRef: ModuleRef
  protected request?: Request & { user?: any }
  // protected abstract _model: Model<Document | any>

  protected constructor(context: {
    moduleRef: ModuleRef,
    request?: Request & { user?: any },
  }) {
    this.moduleRef = context.moduleRef
    this.request = context.request
  }
}
