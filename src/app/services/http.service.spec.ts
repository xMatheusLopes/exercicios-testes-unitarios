import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test method getCEP', () => {
    const results = [
      { zipcode: 83701100 }
    ];

    service.getCEP().subscribe(res => {
      expect(res).toEqual(results);
    });

    const req = httpMock.expectOne(`https://viacep.com.br/ws/01001000/json/`);
    expect(req.request.method).toBe("GET");
    req.flush(results);
  })
});
