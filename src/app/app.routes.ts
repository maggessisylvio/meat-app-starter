import { Routes } from "@angular/router";
import { OrderComponent } from "./pages/order/order.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuComponent } from "./pages/restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./pages/restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./pages/restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./pages/restaurants/restaurants.component";
import { OrderSummaryComponent } from "./pages/order-summary/order-summary.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./security/login/login.component";
import { LoggedInGuard } from "./security/loggedin.guard";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'order', loadChildren: './pages/order/order.module#OrderModule', canLoad: [LoggedInGuard] },
    { path: 'orderSummary', component: OrderSummaryComponent },
    { path: 'about', loadChildren: './pages/about/about.module#AboutModule', canLoad: [LoggedInGuard] },
    { path: '**', component: NotFoundComponent }
]