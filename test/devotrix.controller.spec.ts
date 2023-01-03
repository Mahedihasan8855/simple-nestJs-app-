import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { DevotrixController } from '../src/api/v1/devotrix/devotrix.controller';
import { DevotrixService } from '../src/api/v1/devotrix/devotrix.service';
import { INestApplication } from '@nestjs/common';

describe('DevotrixController', () => {
  let app: INestApplication;
  let devotrixController: DevotrixController;
  let devotrixService: DevotrixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [DevotrixController],
      providers: [DevotrixService]
    }).compile();

    app = module.createNestApplication();

    devotrixService = module.get<DevotrixService>(DevotrixService);
    devotrixController = module.get<DevotrixController>(DevotrixController);

    await app.init();

  });
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);      
    });
  }

  jest.setTimeout(20*60000);

  it('should be defined', () => {
    expect(devotrixController).toBeDefined();
  });

  it(' Bad 400 ', async () => {

    await request(app.getHttpServer())
    .post('/devotrix/sum')
    .send(
      {
        "first": -5,
        "second": 10
    }
    )
    .expect(400)
    .expect({
      "statusCode": 400,
      "message": "Be positive",
      "error": "Bad Request"
  }
  );;

});

it(' Success ', async () => {

  await request(app.getHttpServer())
  .post('/devotrix/sum')
  .send(
    {
      "first": 5,
      "second": 10
  }
  )
  .expect(201)
  .expect({
    "sum": 15
  }
);;
});

  


});
