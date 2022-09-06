import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWIthPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWIthPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWIthPrefix.name} should not generate duplicated ids when called with multiple times`, () => {
    const service = new UniqueIdService();

    const ids = new Set();
    for (let index = 0; index < 50; index++) {
      ids.add(service.generateUniqueIdWIthPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });
});
