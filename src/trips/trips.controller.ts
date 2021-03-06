import {
  Controller,
  Post,
  Get,
  Body,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  InternalServerErrorException,
  Put,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { TripDTO } from './dto/trip.dto';
import { TripsService } from './trips.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('trips')
export class TripsController {
  constructor(private tripService: TripsService) {}

  @Post('/')
  async createTrip(
    @Res() res: Response,
    @Body() tripDTO: TripDTO,
  ): Promise<any> {
    try {
      const trip = await this.tripService.createTrip(tripDTO);
      return res.status(HttpStatus.CREATED).json({
        message: 'Trip created successfully',
        trip,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('/')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async getTrips(
    @Res() res: Response,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<any> {
    try {
      const result = await this.tripService.getTrips(page, limit);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('/count')
  async countTrips(@Res() res: Response): Promise<any> {
    try {
      const result = await this.tripService.countTrips();
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('/countByCity')
  @ApiQuery({
    name: 'city',
    description: 'Filter by the name of the city.',
    required: false,
  })
  async countByCityTrips(
    @Res() res: Response,
    @Query('city') city: string,
  ): Promise<any> {
    try {
      const result = await this.tripService.countByCityTrips(city);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get('/:id')
  async getTrip(@Res() res: Response, @Param('id') id: string): Promise<any> {
    try {
      const trip = await this.tripService.getTrip(id);
      if (!trip) throw new NotFoundException('Trip does not exists');
      return res.status(HttpStatus.OK).json(trip);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Put('/:id')
  async updateTrip(
    @Res() res: Response,
    @Body() tripDTO: TripDTO,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const trip = await this.tripService.updateTrip(id, tripDTO);
      if (!trip) throw new NotFoundException('Trip does not exists');
      return res.status(HttpStatus.OK).json({
        message: 'Trip updated successfully',
        trip,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
