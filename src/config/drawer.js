import {
  DashboardOutlined,
  EventOutlined,
  SettingsOutlined,
  PhoneIphoneOutlined,
  EmojiPeopleOutlined,
  BookmarkOutlined,
  ShopOutlined
} from '@material-ui/icons';

export const dashboard = 'Dashboard';
export const home = 'Home';
export const event = 'Products';
export const preferences = 'Preferences';
export const subItemTest1 = 'Apparel';
export const subItemTest2 = 'Comic Books';
export const subItemTest3 = 'Figurines & our own Cereal';

// Apparel , Accessories, Exclusive Comic Books, Figurines & our own Cereal(Produce)
const drawerConfig = {
  items: [
    {
      title: home,
      icon: DashboardOutlined,
      route: '/',
    },
    {
      title: event,
      icon: ShopOutlined,
      route: '/products',
      subItems : [
        {
          title: subItemTest1,
          icon: PhoneIphoneOutlined,
          route: '/comicbooks',
        },
        {
          title: subItemTest2,
          icon: EmojiPeopleOutlined,
          route: '/comicbooks',
        },
        {
          title: subItemTest3,
          icon: BookmarkOutlined,
          route: '/comicbooks',
        }
      ]
    },
    {
      title: preferences,
      icon: SettingsOutlined,
      route: '/preferences',
    }
  ],
  drawerWidth: 240,
};

export default drawerConfig;
