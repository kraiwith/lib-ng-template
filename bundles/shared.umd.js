(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('shared', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.shared = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var SharedService = /** @class */ (function () {
        function SharedService() {
        }
        return SharedService;
    }());
    SharedService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SharedService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var SharedComponent = /** @class */ (function () {
        function SharedComponent() {
        }
        SharedComponent.prototype.ngOnInit = function () {
        };
        return SharedComponent;
    }());
    SharedComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SharedComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: SharedComponent, selector: "share-shared", ngImport: i0__namespace, template: "\n    <p>\n      shared works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'share-shared',
                        template: "\n    <p>\n      shared works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var PrimaryComponent = /** @class */ (function () {
        function PrimaryComponent() {
        }
        PrimaryComponent.prototype.ngOnInit = function () {
        };
        return PrimaryComponent;
    }());
    PrimaryComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: PrimaryComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    PrimaryComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: PrimaryComponent, selector: "share-primary", ngImport: i0__namespace, template: "<p>primary works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: PrimaryComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'share-primary',
                        templateUrl: './primary.component.html',
                        styleUrls: ['./primary.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var SecondaryComponent = /** @class */ (function () {
        function SecondaryComponent() {
        }
        SecondaryComponent.prototype.ngOnInit = function () {
        };
        return SecondaryComponent;
    }());
    SecondaryComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SecondaryComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SecondaryComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.4", type: SecondaryComponent, selector: "share-secondary", ngImport: i0__namespace, template: "<p>secondary works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SecondaryComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'share-secondary',
                        templateUrl: './secondary.component.html',
                        styleUrls: ['./secondary.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SharedModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedModule, declarations: [SharedComponent,
            PrimaryComponent,
            SecondaryComponent], exports: [SharedComponent] });
    SharedModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.4", ngImport: i0__namespace, type: SharedModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SharedComponent,
                            PrimaryComponent,
                            SecondaryComponent
                        ],
                        imports: [],
                        exports: [
                            SharedComponent,
                        ]
                    }]
            }] });

    /*
     * Public API Surface of shared
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PrimaryComponent = PrimaryComponent;
    exports.SecondaryComponent = SecondaryComponent;
    exports.SharedComponent = SharedComponent;
    exports.SharedModule = SharedModule;
    exports.SharedService = SharedService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shared.umd.js.map
