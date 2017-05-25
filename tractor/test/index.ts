import Vue from 'vue';
import Component from 'vue-class-component';
import { api, priceText, formatDate } from 'utils';
import { OrderStatus } from 'service/order/types';
import Loading from 'components/loading';
import store from 'store';
import { Pay } from 'store/types';
import Tractor from 'components/tractor';
const { GOTO_PAY_AUTH_PAGE } = Pay;
require('./index.css');

@require('./index.html')
@Component({
  components: {
    Loading
  },
  filters: {
    priceText,
    orderStatusFilter(status: OrderStatus) {
      switch (status) {
        case OrderStatus.DC_CREATED:
          return '已下单';
        case OrderStatus.DC_PUSH:
          return '待接单';
        case OrderStatus.DC_CONFIRMED:
          return '已接单 ';
        case OrderStatus.DC_DONE:
          return '已完成';
        case OrderStatus.DC_CANCEL:
          return '已取消';
        default:
          return '订单状态非法';
      }
    },
    formatDate(timestamp: number | string) {
      const date = new Date(Number(timestamp));
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
    }
  }
})
export default class DishList extends Vue {
  orderList: DiancanSimpleOrderTO[] = <Array<DiancanSimpleOrderTO>>[];
  shopInfo = store.state.shopInfo;
  isLoadingShow = true;
  dragRefreshText = '下拉加载';
  scrollRefreshText = '加载中...';
  currentPageNo = 1;
  isOrderCancel(order: DiancanSimpleOrderTO) {
    return [OrderStatus.DC_CANCEL].includes(order.orderBase.status);
  }
  async mounted() {
    document.title = '历史订单';
    /**
     * force repaint cause sometimes may got a blank page, for unkonwn reason in safari
     */
    document.body.scrollTop = 0;

    const context = this;
    const tractor = new Tractor({
      scroller: '.scroller',
      openDragLoading: true,
      openScrollLoading: true,
      dragValve: 50,
      scrollValve: 50,
      onDragStart() {
        console.info('onDragStart');
      },
      onDragLessValve() {
        console.info('onDragLessValve');
        context.dragRefreshText = '下拉加载';
      },
      onDragGreaterValve() {
        console.info('onDragGreaterValve');
        context.dragRefreshText = '松开加载';
      },
      async onDragDone() {
        console.info('onDragDone');
        context.dragRefreshText = '加载中...';
        const list = await context.getOrderListByPageNo(context.currentPageNo++);
        if (list.length) {
          context.orderList.unshift(...list);
        } else {
          context.dragRefreshText = '没有更多内容了';
          --context.currentPageNo;
        }
        tractor.dragLoadingDone();
      },
      async onScroll2Valve() {
        console.info('onScroll2Valve');
        context.scrollRefreshText = '加载中...';
        const list = await context.getOrderListByPageNo(context.currentPageNo++);
        if (list.length) {
          context.orderList.push(...list);
        } else {
          context.scrollRefreshText = '没有更多内容了';
          --context.currentPageNo;
        }
        tractor.scrollLoadingDone();
      }
    });

    this.isLoadingShow = true;
    const list = await this.getOrderListByPageNo(this.currentPageNo++);
    this.orderList.push(...list);
    this.isLoadingShow = false;
  }
  async getOrderListByPageNo(pageNo: number) {
    let retList: DiancanSimpleOrderTO[] = [];
    const request = {
      tenantId: this.shopInfo.tenantId,
      poiId: this.shopInfo.poiId,
      req: {
        userId: store.state.userInfo.unionid,
        pageNo,
        pageSize: 10
      }
    };
    try {
      console.info('get order list request: ', request);
      const ret = await api.post('/api/orderList', request);
      console.info('get order list response: ', ret);
      const data: DiancanUserOrderListResp = ret.data;
      data.dcOrders.filter(order => Object.keys((order || {})).length).sort((pre, next) => Number(next.orderBase.createdTime) - Number(pre.orderBase.createdTime));
      retList = data.dcOrders;
    } catch (e) {
      console.error(e);
    }
    return retList;
  }
  isShowSeq(order: DiancanSimpleOrderTO) {
    return ![OrderStatus.DC_CREATED, OrderStatus.DC_CANCEL].includes(order.orderBase.status);
  }
  destroyed() { }
  openOrderDetail(order: DiancanSimpleOrderTO) {
    const orderId = order.orderBase.id;
    const status = order.orderBase.status;
    if (status === OrderStatus.DC_CREATED) {
      store.dispatch(GOTO_PAY_AUTH_PAGE, orderId);
    } else {
      this.$router.push({
        path: 'pay',
        query: {
          orderId,
          _: String(Date.now())
        }
      });
    }
  }
}
