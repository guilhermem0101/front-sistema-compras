import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },

  {
    title: 'Tabelas',
    icon: 'grid-outline',
    children: [
      // {
      //   title: 'Smart Table',
      //   link: '/pages/tables/smart-table',
      // },
      // {
      //   title: 'Tree Grid',
      //   link: '/pages/tables/tree-grid',
      // },
      {
        title: 'Fornecedor',
        link: '/pages/tables/supplier-table',
      },
      {
        title: 'Pedido',
        link: '/pages/tables/order-table',
      },
      {
        title: 'Entrega',
        link: '/pages/tables/receipt-table',
      },
      {
        title: 'Produtos',
        link: '/pages/tables/product-table',
      },
    ],
  },
  
  // {
  //   title: 'Layout',
  //   icon: 'layout-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },
  {
    title: 'Cadastro',
    icon: 'edit-2-outline',
    children: [
      // {
      //   title: 'Form Inputs',
      //   link: '/pages/forms/inputs',
      // },
      // {
      //   title: 'Form Layouts',
      //   link: '/pages/forms/layouts',
      // },
      // {
      //   title: 'Buttons',
      //   link: '/pages/forms/buttons',
      // },
      // {
      //   title: 'Datepicker',
      //   link: '/pages/forms/datepicker',
      // },
      {
        title: 'Fornecedor',
        link: '/pages/forms/supplier-create',
      },
      {
        title: 'Pedido',
        link: '/pages/forms/order-create',
      },
      {
        title: 'Entrega',
        link: '/pages/forms/receipt-create',
      },
      {
        title: 'Produtos',
        link: '/pages/forms/product-create',
      },
    ],
  },

];
