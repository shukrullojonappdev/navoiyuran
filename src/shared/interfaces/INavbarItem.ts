export interface INavbarItem {
  title: string;
  href?: string;
  type: "link" | "dropdown";
  items?: INavbarItem[];
}
