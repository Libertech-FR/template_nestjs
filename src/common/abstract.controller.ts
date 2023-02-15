'use strict'

import { AbstractService } from '~/common/abstract.service'
import { ModuleRef } from '@nestjs/core'
import {Get, HttpStatus, Query, Req, Res} from "@nestjs/common";
import {Request, Response} from "express";
import { ValidationError } from 'class-validator'

export abstract class AbstractController {
  protected abstract service?: AbstractService
  protected constructor(protected readonly moduleRef: ModuleRef) {
  }
}
