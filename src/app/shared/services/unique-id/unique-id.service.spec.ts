import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWIthPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWIthPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWIthPrefix.name} should not generate duplicated ids when called with multiple times`, () => {
    const ids = new Set();
    for (let index = 0; index < 50; index++) {
      ids.add(service.generateUniqueIdWIthPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generated ids when called`, () => {
    service.generateUniqueIdWIthPrefix('app');
    service.generateUniqueIdWIthPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
