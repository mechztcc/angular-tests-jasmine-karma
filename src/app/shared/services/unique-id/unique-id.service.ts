import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
	providedIn: 'root',
})
export class UniqueIdService {
	private numberOfGeneratedIds = -0;
	private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

	constructor() {}

	generateUniqueIdWIthPrefix(prefix: string): string {
		if (!prefix) {
			throw Error('Prefix can not be empty');
		}
		const uniqueId = this.generaUniqueId();
		this.numberOfGeneratedIds++;
		return `${prefix}-${uniqueId}`;
	}

	getNumberOfGeneratedUniqueIds(): number {
		return this.numberOfGeneratedIds;
	}

	private generaUniqueId(): string {
		return uuid();
	}
}
