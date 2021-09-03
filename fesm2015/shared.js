import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class SharedService {
    constructor() { }
}
SharedService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SharedService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SharedComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SharedComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: SharedComponent, selector: "share-shared", ngImport: i0, template: `
    <p>
      shared works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'share-shared',
                    template: `
    <p>
      shared works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class PrimaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrimaryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: PrimaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PrimaryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: PrimaryComponent, selector: "share-primary", ngImport: i0, template: "<p>primary works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: PrimaryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'share-primary',
                    templateUrl: './primary.component.html',
                    styleUrls: ['./primary.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class SecondaryComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondaryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SecondaryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SecondaryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: SecondaryComponent, selector: "share-secondary", ngImport: i0, template: "<p>secondary works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SecondaryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'share-secondary',
                    templateUrl: './secondary.component.html',
                    styleUrls: ['./secondary.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class SharedModule {
}
SharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedModule, declarations: [SharedComponent,
        PrimaryComponent,
        SecondaryComponent], exports: [SharedComponent,
        PrimaryComponent,
        SecondaryComponent] });
SharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SharedComponent,
                        PrimaryComponent,
                        SecondaryComponent,
                    ],
                    imports: [],
                    exports: [
                        SharedComponent,
                        PrimaryComponent,
                        SecondaryComponent,
                    ]
                }]
        }] });

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PrimaryComponent, SecondaryComponent, SharedComponent, SharedModule, SharedService };
//# sourceMappingURL=shared.js.map
