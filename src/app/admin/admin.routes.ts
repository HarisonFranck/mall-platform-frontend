import { Routes } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { ShopManagement } from './shop-management/shop-management';
import { EventManagement } from './event-management/event-management';
import { UserManagement } from './user-management/user-management';
import { ContentModeration } from './content-moderation/content-moderation';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminLayout,
        children: [
            {
                path: 'dashboard',
                component: AdminDashboard,
            },
            {
                path: 'users',
                component: UserManagement,
            },
            {
                path: 'shops',
                component: ShopManagement,
            },
            {
                path: 'events',
                component: EventManagement,
            },
            {
                path: 'content',
                component: ContentModeration,
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
        ],
    },
];
