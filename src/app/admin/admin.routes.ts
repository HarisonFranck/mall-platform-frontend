import { Routes } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminLayout,
        children: [
            {
                path: 'dashboard',
                component: AdminDashboard
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
