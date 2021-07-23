import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { DeliveryCostsComponent } from './pages/order/delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './pages/order/order-items/order-items.component';
import { OrderComponent } from './pages/order/order.component';
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
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { RatingComponent } from './shared/rating/rating.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantsServices, ShoppingCartService, OrderService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
