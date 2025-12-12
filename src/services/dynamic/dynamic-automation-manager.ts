import EventEmitter from "events";
import SpaceDynamicMonitor from "./space-dynamic-monitor";
import { getLogger } from "log4js";

const logger = getLogger("DynamicAutomationManager");

export interface DynamicAutomationManagerEvents {
  "new-monitor": [monitor: SpaceDynamicMonitor, uid: number];
  "remove-user": [uid: number];
}

export default class DynamicAutomationManager extends EventEmitter<DynamicAutomationManagerEvents> {
  private monitors: Map<number, SpaceDynamicMonitor> = new Map(); // uid -> SpaceDynamicMonitor

  constructor() {
    super();
  }

  public addUser(uid: number) {
    logger.debug(`添加用户 ${uid}`);
    const monitor = new SpaceDynamicMonitor({ uid });
    this.monitors.set(uid, monitor);
    logger.debug(`发射事件 new-monitor -> SpaceDynamicMonitor.uid: ${uid}`);
    this.emit("new-monitor", monitor, uid);
    monitor.startMonitor();
  }

  public removeUser(uid: number) {
    logger.debug(`移除用户 ${uid}`);
    this.emit("remove-user", uid);
    logger.debug(`发射事件 remove-user -> ${uid}`);
    const monitor = this.monitors.get(uid);
    if (!monitor) {
      logger.debug(`移除用户失败 -> ${uid} 不存在`);
      return;
    }
    monitor.stopMonitor();
    this.monitors.delete(uid);
  }

  public getSpaceDynamicMonitors() {
    return this.monitors;
  }
}
