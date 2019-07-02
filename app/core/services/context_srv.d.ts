/// 
export declare class User {
    isGrafanaAdmin: any;
    isSignedIn: any;
    orgRole: any;
    orgId: number;
    orgCount: number;
    timezone: string;
    helpFlags1: number;
    lightTheme: boolean;
    hasEditPersmissionInFolders: boolean;
    constructor();
}
export declare class ContextSrv {
    pinned: any;
    version: any;
    user: User;
    isSignedIn: any;
    isGrafanaAdmin: any;
    isEditor: any;
    sidemenu: any;
    constructor();
    hasRole(role: any): boolean;
    setPinnedState(val: any): void;
    toggleSideMenu(): void;
}
declare var contextSrv: ContextSrv;
export { contextSrv };
