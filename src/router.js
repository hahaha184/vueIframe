import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import Query from "./layout/query.vue";
import Monitor from './layout/monitor.vue';
import Analysis from './layout/Analysis.vue';
import Renqi from './layout/renqi.vue';
import Help from './views/Help/index.vue';
import BoshiClass from './layout/boshiClass.vue';
Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/query",
      name: "query",
      component: Query,
      redirect: '/query/rankquery',
      children: [{
          path: 'rankquery',
          name: 'Rankquery',
          component: () => import('@/views/Query/rank'),
        },
        {
          path: 'commentquery',
          name: 'Commentquery',
          component: () => import('@/views/Query/comment'),
        },
        {
          path: 'salequery',
          name: 'Salequery',
          component: () => import('@/views/Query/sale'),
        },
        {
          path: 'weightquery',
          name: 'Weightquery',
          component: () => import('@/views/Query/weight'),
        },
        {
          path: 'fastcarquery',
          name: 'Fastcarquery',
          component: () => import('@/views/Query/fastcar'),
        },
      ]
    },
    {
      path: "/analysis",
      name: "analysis",
      component: Analysis,
      redirect: '/analysis/titleAnalysis',
      children: [{
          path: 'titleAnalysis',
          name: 'TitleAnalysis',
          component: () => import('@/views/Analysis/title'),
        },
        {
          path: 'hotWordAnalysis',
          name: 'HotWordAnalysis',
          component: () => import('@/views/Analysis/hotwords'),
        },
        {
          path: 'dapanAalysis',
          name: 'DapanAalysis',
          component: () => import('@/views/Analysis/dapan'),
        },
      ]
    },
    {
      path: "/monitor",
      name: "monitor",
      component: Monitor,
      redirect: '/monitor/rankMonitor',
      children: [{
          path: 'rankmonitor',
          name: 'Rankmonitor',
          component: () => import('@/views/Monitor/rank'),
        },
        {
          path: 'deletemonitor',
          name: 'Deletemonitor',
          component: () => import('@/views/Monitor/delete'),
        },
        {
          path: 'duoweimonitor',
          name: 'Duoweimonitor',
          component: () => import('@/views/Monitor/duowei'),
        },
        {
          path: 'goodsmonitor',
          name: 'Goodsmonitor',
          component: () => import('@/views/Monitor/goods'),
        },
      ]
    },
    {
      path: "/renqi",
      name: "renqi",
      component: Renqi,
      redirect: '/renqi/taskbuild',
      children: [{
        path: 'taskbuild',
        name: 'taskBuild',
        component: () => import('@/views/renqi/taskbuild'),
      },
      {
        path: 'tasklist',
        name: 'taskList',
        component: () => import('@/views/renqi/tasklist'),
      },
      {
        path: 'userCenter',
        name: 'UserCenter',
        component: () => import('@/views/renqi/userCenter'),
      },
    ]
    },
    {
      path: "/help",
      name: "Help",
      component: Help,
    },
    {
      path: "/boshiClass",
      name: "boshiClass",
      component: BoshiClass,
      redirect: '/boshiClass/freeClass',
      children: [{
        path: 'freeClass',
        name: 'FreeClass',
        component: () => import('@/views/Class/freeClass'),
      },
      {
        path: 'talk',
        name: 'Talk',
        component: () => import('@/views/Class/talk'),
      },
      {
        path: 'questions',
        name: 'Questions',
        component: () => import('@/views/Class/questions'),
      },
      {
        path: 'teachers',
        name: 'Teachers',
        component: () => import('@/views/Class/teachers'),
      },
    ]
    }
  ]
});
// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err);
};
export default router;