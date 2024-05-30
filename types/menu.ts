export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: SubMenu[];
};

export type SubMenu = {
  id: number;
  title: string;
  desc: string;
  path?: string;
  newTab: boolean;
}
