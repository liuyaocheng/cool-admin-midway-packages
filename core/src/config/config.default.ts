import { CoolConfig } from "../interface";

/**
 * cool的配置
 */
export default {
  cool: {
    // 是否自动导入数据库
    initDB: false,
    // 是否自动导入模块菜单
    initMenu: true,
    // 判断是否初始化的方式
    initJudge: "file",
    // crud配置
    crud: {
      // 软删除
      softDelete: true,
      // 分页查询每页条数
      pageSize: 15,
    },
  } as CoolConfig,
};
