import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { MenuItemComponent } from './pages/restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from './pages/restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './pages/restaurant-detail/reviews/reviews.component';
import { ShoppingCartComponent } from './pages/restaurant-detail/shopping-cart/shopping-cart.component';
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { OrderService } from './services/order.service';
import { RestaurantsServices } from './services/restaurants.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from './services/notification.service';
import { NotFoundComponent } from './not-found/not-found.component';


import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt';

registerLocaleData(locatePt, 'pt');


import { LoginComponent } from './security/login/login.component';
import { LoginService } from './services/login.service';
import { LoggedInGuard } from './security/loggedin.guard';
import { UserDetailComponent } from './pages/header/user-detail/user-detail.component';
import { LeaveOrderGuard } from './pages/order/leave-order.guard';
import { AuthInterceptor } from './security/auth.interceptor';
import { ApplicationErrorHandler } from './app.error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    RestaurantsServices,
    ShoppingCartService,
    OrderService,
    NotificationService,
    LoginService,
    LoggedInGuard,
    LeaveOrderGuard,
    { provide: ErrorHandler, useClass: ApplicationErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
