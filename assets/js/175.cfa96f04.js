(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{240:function(a,e,t){"use strict";t.r(e);var r=t(0),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"导出er模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出er模型","aria-hidden":"true"}},[a._v("#")]),a._v(" 导出ER模型")]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=Wfy8rdhXyWw",target:"_blank",rel:"noopener noreferrer"}},[a._v("How to create ER Diagram from existing Database using MySQL WorkBench"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_0ee72b370102waef.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("mysql workbench如何把已有的数据库导出ER模型"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.mysql.com/products/workbench/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MySQL Workbench HomePage"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),t("p",[a._v("重置数据")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rake db:drop db:create db:migrate db:seed\n")])])]),t("h2",{attrs:{id:"为关联表，新建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为关联表，新建项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 为关联表，新建项目")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('  def create\n    @restaurant = Restaurant.find(params[:restaurant_id])\n    @foodPackage = @restaurant.food_packages.build(foodPackage_params)\n\n    if @foodPackage.save\n      redirect_to console_merchant_path(params[:merchant_id]), notice: "恭喜您，创建餐厅成功！"\n    else\n      render edit_console_merchant_restaurant_food_package_path,  warning: "提交失败，请重新提交"\n    end\n  end\n\n  private\n\n  def foodPackage_params\n    params.require(:post).permit(:name, :use_number, :before_price, :discount_price,\n                                 :discount, :is_refund, :is_advance, :sweet_tips, :status, :normal, :stopping )\n  end\n')])])]),t("h2",{attrs:{id:"新建表格书写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建表格书写","aria-hidden":"true"}},[a._v("#")]),a._v(" 新建表格书写")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# foodPackage 为键名，且对应表\n<%= simple_form_for :foodPackage, as: :post, url: console_merchant_restaurant_food_packages_path do |f| %>\n")])])]),t("h2",{attrs:{id:"更新时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新时","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新时")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# foodPackage 负责回传数据，当与form_for 命名相同时\n  def edit\n    @restaurant = Restaurant.find(params[:restaurant_id])\n    @foodPackage = @restaurant.food_packages.find(params[:id])\n  end\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# form_for 编辑的数据默认传回 \nparams.require(:命名).permit(:name, :...)\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);