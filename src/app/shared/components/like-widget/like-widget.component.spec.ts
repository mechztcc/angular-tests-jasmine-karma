import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
	let component: LikeWidgetComponent;
	let fixture: ComponentFixture<LikeWidgetComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LikeWidgetComponent],
			imports: [FontAwesomeModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LikeWidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should auto generate ID when input has not provided', () => {
		expect(component.id).toBeTruthy();
	});

	it('should not generate ID when input is present', () => {
		component.id = '1122';
		expect(component.id).toBe('1122');
	});

	it(`#${LikeWidgetComponent.prototype.like.name}, should trigger emission when called`, () => {
		component.liked.subscribe(() => {
			expect(true).toBeTrue();
		});
		component.like();
	});
});
