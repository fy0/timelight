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
  note: string | null; // 备注
}
