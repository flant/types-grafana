/// 
import { PanelQueryRunner } from './PanelQueryRunner';

export declare interface GridPos {
    x: number;
    y: number;
    w: number;
    h: number;
    static?: boolean;
}

export declare class PanelModel {
    id: number;
    gridPos: any;
    type: string;
    title: any;
    alert?: any;
    scopedVars?: any; // ScopedVars
    repeat?: string;
    repeatIteration?: number;
    repeatPanelId?: number;
    repeatDirection?: string;
    repeatedByRow?: boolean;
    maxPerRow?: number;
    collapsed?: boolean;
    panels?: any;
    soloMode?: boolean;
    targets: any[]; // DataQuery[];
    transformations?: any[]; // DataTransformerConfig[];
    datasource: string;
    thresholds?: any;
    pluginVersion?: string;

    snapshotData?: any[]; // DataQueryResponseData[];
    timeFrom?: any;
    timeShift?: any;
    hideTimeOverride?: any;
    options: {
        [key: string]: any;
    };

    maxDataPoints?: number;
    interval?: string;
    description?: string;
    links?: any[]; //DataLink[];
    transparent: boolean;

    // non persisted
    fullscreen: boolean;
    isEditing: boolean;
    isInView: boolean;
    hasRefreshed: boolean;
    events: any; // Emitter;
    cacheTimeout?: any;
    cachedPluginOptions?: any;
    legend?: { show: boolean; sort?: string; sortDesc?: boolean };
    plugin?: any; //PanelPlugin;

    constructor(model: any);
    restoreModel(model: any);
    ensureQueryIds(): void;
    getOptions(): any;
    updateOptions(options: object): void;
    getSaveModel(): any;
    setViewMode(fullscreen: boolean, isEditing: boolean): void;
    updateGridPos(newPos: GridPos): void;
    resizeDone(): void;
    refresh(): void;
    render(): void;
    initialized(): void;
    private getOptionsToRemember(): any;
    private restorePanelOptions(pluginId: string): void;
    private applyPluginOptionDefaults(plugin: any): void;
    pluginLoaded(plugin: any): void
    changePlugin(newPlugin: any): void;
    addQuery(query?: any): void;
    changeQuery(query: any, index: number): void;
    getEditClone(): PanelModel;
    getQueryRunner(): PanelQueryRunner;
    hasTitle(): boolean;
    isAngularPlugin(): boolean;
    destroy(): void;
    setTransformations(transformations: any[]): void;
}
