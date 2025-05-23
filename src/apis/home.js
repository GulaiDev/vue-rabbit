/**
 * @description: 获取banner图
 */
import http from "@/utils/http";
export function getBannerAPI() {
  return http({
    url: "home/banner",
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function findNewAPI() {
  return http({
    url: "/home/new",
  });
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function findHotAPI() {
  return http({
    url: "/home/hot",
  });
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export function getGoodsAPI() {
  return http({
    url: "/home/goods",
  });
}
