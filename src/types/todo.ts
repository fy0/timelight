export interface CheckList {
  id: string; // hex
  name: string;
  createTime: number;
  updateTime: number;
}

export interface Todo {
  id: string; // hex
  name: string;
  createTime: number;
  updateTime: number;
  deadlineTime: number; // 截止时间
  isDone: boolean; // 是否已完成
  // interval // 周期
  note: string | null; // 备注
  parent: string; // 所属checklist
}
