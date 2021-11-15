/// 
import { DashboardModel } from '../state/DashboardModel';
export declare class DashboardSrv {
    dashboard: DashboardModel;
    private $rootScope;
    private $location;
    constructor($rootScope: any, $location: any);
    create(dashboard: any, meta: any): DashboardModel;
    setCurrent(dashboard: DashboardModel): void;
    getCurrent(): DashboardModel | undefined;
    saveJSONDashboard(json: string): {
        dashboard: DashboardModel,
        folderId: number,
        overwrite: boolean,
        message: string,
    };
    starDashboard(dashboardId: string, isStarred: any): any;
}

export declare function setDashboardSrv(instance: DashboardSrv);
export declare function getDashboardSrv(): DashboardSrv;