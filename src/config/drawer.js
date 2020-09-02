import {DashboardOutlined, EventOutlined, SettingsOutlined,} from '@material-ui/icons';

export const dashboard = 'Dashboard';
export const home = 'Home';
export const event = 'Products';
export const settings = 'Settings';
export const subItemTest1 = 'Sub Item Test 1';
export const subItemTest2 = 'Sub Item Test 2';
export const subItemTest3 = 'Sub Item Test 3';
const drawerConfig = {
  items: [
    {
      title: home,
      icon: DashboardOutlined,
      route: '/',
    },
    {
      title: event,
      icon: EventOutlined,
      route: '/',
      subItems : [
        {
          title: subItemTest1,
          icon: DashboardOutlined,
          route: '/',
        },
        {
          title: subItemTest2,
          icon: DashboardOutlined,
          route: '/',
        },
        {
          title: subItemTest3,
          icon: DashboardOutlined,
          route: '/',
        }
      ]

    },
    {
      title: settings,
      icon: SettingsOutlined,
      route: '/',
    }
  ],
  drawerWidth: 240,
};

export default drawerConfig;
