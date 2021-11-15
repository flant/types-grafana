
export declare interface QueryRunnerOptions {
  datasource: string | any; //| DataSourceApi<TQuery, TOptions>;
  queries: any[]; //TQuery[];
  panelId: number;
  dashboardId?: number;
  timezone?: string;
  timeRange: any; //TimeRange;
  timeInfo?: string; // String description of time range for display
  widthPixels: number;
  maxDataPoints: number | undefined | null;
  minInterval: string | undefined | null;
  scopedVars?: any; // ScopedVars;
  cacheTimeout?: string;
  delayStateNotification?: number; // default 100ms.
  transformations?: any[]; //DataTransformerConfig[];
}

export declare class PanelQueryRunner {
  private subject?: any;
  private subscription?: any;
  private transformations?: any[];
  private lastResult?: any;

  constructor(): void;
  getData(transform: boolean): any;
  hasTransformations(): boolean;
  run(options: QueryRunnerOptions): any;
  private pipeToSubject(observable: any): void;
  pipeDataToSubject(data: any): void;
  setTransformations(transformations?: any[]): void;
  destroy(): void;
  getLastResult(): any;
}
