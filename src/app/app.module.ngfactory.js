/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "ionic-angular/components/app/app-root";
import * as i3 from "../../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory";
import * as i4 from "../../node_modules/ionic-angular/components/alert/alert-component.ngfactory";
import * as i5 from "../../node_modules/ionic-angular/components/app/app-root.ngfactory";
import * as i6 from "../../node_modules/ionic-angular/components/loading/loading-component.ngfactory";
import * as i7 from "../../node_modules/ionic-angular/components/modal/modal-component.ngfactory";
import * as i8 from "../../node_modules/ionic-angular/components/picker/picker-component.ngfactory";
import * as i9 from "../../node_modules/ionic-angular/components/popover/popover-component.ngfactory";
import * as i10 from "../../node_modules/ionic-angular/components/select/select-popover-component.ngfactory";
import * as i11 from "../../node_modules/ionic-angular/components/toast/toast-component.ngfactory";
import * as i12 from "../pages/add-queue/add-queue.ngfactory";
import * as i13 from "./app.component.ngfactory";
import * as i14 from "../pages/home/home.ngfactory";
import * as i15 from "@angular/common";
import * as i16 from "@angular/platform-browser";
import * as i17 from "ionic-angular/gestures/gesture-config";
import * as i18 from "@angular/forms";
import * as i19 from "angularfire2";
import * as i20 from "angularfire2/auth";
import * as i21 from "angularfire2/firestore";
import * as i22 from "ionic-angular/components/action-sheet/action-sheet-controller";
import * as i23 from "ionic-angular/components/app/app";
import * as i24 from "ionic-angular/config/config";
import * as i25 from "ionic-angular/components/alert/alert-controller";
import * as i26 from "ionic-angular/util/events";
import * as i27 from "ionic-angular/util/form";
import * as i28 from "ionic-angular/tap-click/haptic";
import * as i29 from "ionic-angular/platform/platform";
import * as i30 from "ionic-angular/platform/keyboard";
import * as i31 from "ionic-angular/platform/dom-controller";
import * as i32 from "ionic-angular/components/loading/loading-controller";
import * as i33 from "ionic-angular/module";
import * as i34 from "ionic-angular/navigation/url-serializer";
import * as i35 from "ionic-angular/navigation/deep-linker";
import * as i36 from "ionic-angular/util/module-loader";
import * as i37 from "ionic-angular/components/modal/modal-controller";
import * as i38 from "ionic-angular/components/picker/picker-controller";
import * as i39 from "ionic-angular/components/popover/popover-controller";
import * as i40 from "ionic-angular/tap-click/tap-click";
import * as i41 from "ionic-angular/gestures/gesture-controller";
import * as i42 from "ionic-angular/components/toast/toast-controller";
import * as i43 from "ionic-angular/transitions/transition-controller";
import * as i44 from "@ionic-native/status-bar/index";
import * as i45 from "@ionic-native/splash-screen/index";
import * as i46 from "ionic-angular/util/ionic-error-handler";
import * as i47 from "ionic-angular/platform/platform-registry";
import * as i48 from "ionic-angular/components/app/menu-controller";
import * as i49 from "ionic-angular/util/ng-module-loader";
import * as i50 from "ionic-angular/config/mode-registry";
import * as i51 from "../pages/add-queue/add-queue.module";
import * as i52 from "../pages/add-queue/add-queue";
import * as i53 from "./app.component";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.IonicApp], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ActionSheetCmpNgFactory, i4.AlertCmpNgFactory, i5.IonicAppNgFactory, i6.LoadingCmpNgFactory, i7.ModalCmpNgFactory, i8.PickerCmpNgFactory, i9.PopoverCmpNgFactory, i10.SelectPopoverNgFactory, i11.ToastCmpNgFactory, i12.AddQueuePageNgFactory, i13.MyAppNgFactory, i14.HomePageNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i15.NgLocalization, i15.NgLocaleLocalization, [i0.LOCALE_ID, [2, i15.ɵa]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i16.DomSanitizer, i16.ɵe, [i15.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i16.DomSanitizer]), i0.ɵmpd(4608, i16.HAMMER_GESTURE_CONFIG, i17.IonicGestureConfig, []), i0.ɵmpd(5120, i16.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i16.ɵDomEventsPlugin(p0_0, p0_1), new i16.ɵKeyEventsPlugin(p1_0), new i16.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i15.DOCUMENT, i0.NgZone, i15.DOCUMENT, i15.DOCUMENT, i16.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i16.EventManager, i16.EventManager, [i16.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i16.ɵDomSharedStylesHost, i16.ɵDomSharedStylesHost, [i15.DOCUMENT]), i0.ɵmpd(4608, i16.ɵDomRendererFactory2, i16.ɵDomRendererFactory2, [i16.EventManager, i16.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i16.ɵDomRendererFactory2]), i0.ɵmpd(6144, i16.ɵSharedStylesHost, null, [i16.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i16.Meta, i16.Meta, [i15.DOCUMENT]), i0.ɵmpd(4608, i16.Title, i16.Title, [i15.DOCUMENT]), i0.ɵmpd(4608, i18.ɵi, i18.ɵi, []), i0.ɵmpd(4608, i18.FormBuilder, i18.FormBuilder, []), i0.ɵmpd(5120, i19.FirebaseApp, i19.ɵa, [i19.FirebaseAppConfigToken, i19.FirebaseAppName]), i0.ɵmpd(5120, i20.AngularFireAuth, i20._getAngularFireAuth, [i19.FirebaseApp]), i0.ɵmpd(5120, i21.AngularFirestore, i21._getAngularFirestore, [i19.FirebaseApp, i21.EnablePersistenceToken]), i0.ɵmpd(4608, i22.ActionSheetController, i22.ActionSheetController, [i23.App, i24.Config]), i0.ɵmpd(4608, i25.AlertController, i25.AlertController, [i23.App, i24.Config]), i0.ɵmpd(4608, i26.Events, i26.Events, []), i0.ɵmpd(4608, i27.Form, i27.Form, []), i0.ɵmpd(4608, i28.Haptic, i28.Haptic, [i29.Platform]), i0.ɵmpd(4608, i30.Keyboard, i30.Keyboard, [i24.Config, i29.Platform, i0.NgZone, i31.DomController]), i0.ɵmpd(4608, i32.LoadingController, i32.LoadingController, [i23.App, i24.Config]), i0.ɵmpd(5120, i15.LocationStrategy, i33.provideLocationStrategy, [i15.PlatformLocation, [2, i15.APP_BASE_HREF], i24.Config]), i0.ɵmpd(4608, i15.Location, i15.Location, [i15.LocationStrategy]), i0.ɵmpd(5120, i34.UrlSerializer, i34.setupUrlSerializer, [i23.App, i34.DeepLinkConfigToken]), i0.ɵmpd(5120, i35.DeepLinker, i35.setupDeepLinker, [i23.App, i34.UrlSerializer, i15.Location, i36.ModuleLoader, i0.ComponentFactoryResolver]), i0.ɵmpd(4608, i37.ModalController, i37.ModalController, [i23.App, i24.Config, i35.DeepLinker]), i0.ɵmpd(4608, i38.PickerController, i38.PickerController, [i23.App, i24.Config]), i0.ɵmpd(4608, i39.PopoverController, i39.PopoverController, [i23.App, i24.Config, i35.DeepLinker]), i0.ɵmpd(4608, i40.TapClick, i40.TapClick, [i24.Config, i29.Platform, i31.DomController, i23.App, i41.GestureController]), i0.ɵmpd(4608, i42.ToastController, i42.ToastController, [i23.App, i24.Config]), i0.ɵmpd(4608, i43.TransitionController, i43.TransitionController, [i29.Platform, i24.Config]), i0.ɵmpd(4608, i44.StatusBar, i44.StatusBar, []), i0.ɵmpd(4608, i45.SplashScreen, i45.SplashScreen, []), i0.ɵmpd(512, i15.CommonModule, i15.CommonModule, []), i0.ɵmpd(512, i0.ErrorHandler, i46.IonicErrorHandler, []), i0.ɵmpd(256, i24.ConfigToken, null, []), i0.ɵmpd(1024, i47.PlatformConfigToken, i47.providePlatformConfigs, []), i0.ɵmpd(1024, i29.Platform, i29.setupPlatform, [i16.DOCUMENT, i47.PlatformConfigToken, i0.NgZone]), i0.ɵmpd(1024, i24.Config, i24.setupConfig, [i24.ConfigToken, i29.Platform]), i0.ɵmpd(512, i31.DomController, i31.DomController, [i29.Platform]), i0.ɵmpd(512, i48.MenuController, i48.MenuController, []), i0.ɵmpd(512, i23.App, i23.App, [i24.Config, i29.Platform, [2, i48.MenuController]]), i0.ɵmpd(512, i41.GestureController, i41.GestureController, [i23.App]), i0.ɵmpd(256, i34.DeepLinkConfigToken, null, []), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i49.NgModuleLoader, i49.NgModuleLoader, [i0.Compiler]), i0.ɵmpd(1024, i36.ModuleLoader, i36.provideModuleLoader, [i49.NgModuleLoader, i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [i16.ɵh(p0_0), i50.registerModeConfigs(p1_0), i26.setupProvideEvents(p2_0, p2_1), i40.setupTapClick(p3_0, p3_1, p3_2, p3_3, p3_4), i36.setupPreloading(p4_0, p4_1, p4_2, p4_3)]; }, [[2, i0.NgProbeToken], i24.Config, i29.Platform, i31.DomController, i24.Config, i29.Platform, i31.DomController, i23.App, i41.GestureController, i24.Config, i34.DeepLinkConfigToken, i36.ModuleLoader, i0.NgZone]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i16.BrowserModule, i16.BrowserModule, [[3, i16.BrowserModule]]), i0.ɵmpd(512, i18.ɵba, i18.ɵba, []), i0.ɵmpd(512, i18.FormsModule, i18.FormsModule, []), i0.ɵmpd(512, i18.ReactiveFormsModule, i18.ReactiveFormsModule, []), i0.ɵmpd(512, i33.IonicModule, i33.IonicModule, []), i0.ɵmpd(512, i19.AngularFireModule, i19.AngularFireModule, []), i0.ɵmpd(512, i20.AngularFireAuthModule, i20.AngularFireAuthModule, []), i0.ɵmpd(512, i21.AngularFirestoreModule, i21.AngularFirestoreModule, []), i0.ɵmpd(512, i33.IonicPageModule, i33.IonicPageModule, []), i0.ɵmpd(512, i51.AddQueuePageModule, i51.AddQueuePageModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i19.FirebaseAppConfigToken, { apiKey: "AIzaSyCMNURdOLSYK5-aSW2TT0ycZvdthVQmhNE", authDomain: "qhae-819ce.firebaseapp.com", databaseURL: "https://qhae-819ce.firebaseio.com", projectId: "qhae-819ce", storageBucket: "qhae-819ce.appspot.com", messagingSenderId: "672528050964" }, []), i0.ɵmpd(256, i19.FirebaseAppName, undefined, []), i0.ɵmpd(256, i21.EnablePersistenceToken, false, []), i0.ɵmpd(256, i36.LAZY_LOADED_TOKEN, i52.AddQueuePage, []), i0.ɵmpd(256, i2.AppRootToken, i53.MyApp, []), i0.ɵmpd(256, i15.APP_BASE_HREF, "/", [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map