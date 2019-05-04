import { ResourceHealth } from '../enums/resource-health.enum';

export abstract class HealthIndicator {
  abstract name: string;
  status: ResourceHealth = ResourceHealth.UNHEALTHY;
  details: string | undefined;

  abstract checkHealth(): Promise<void>;
}
