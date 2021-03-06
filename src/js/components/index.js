import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import { BackTop ,Menu } from 'antd';
import {Link} from 'react-router';
/*import '../../css/index.scss';*/
class Index extends React.Component{
       constructor(){
            super();
            this.state = {


            }
       }
        render (){
            return (
                <div className="home_area">
                        <div className="mr10">
                          <section className="homeTitle">
                            <b>早上好</b>
                            <span className="fa fa-commenting fr" />
                            <font></font>
                          </section>
                          {/* banner轮播图片效果 */}
                          <div className="banner_image">
                            <div className="swiper-container">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <p>瑞钱宝助你回家过年</p>
                                  <img src="./src/images/banner1.png" alt />
                                </div>
                                <div className="swiper-slide">
                                  <p>瑞钱宝助你回家过年2</p>
                                  <img src="./src/images/banner2.png" alt />
                                </div>
                                <div className="swiper-slide">
                                  <p>瑞钱宝助你回家过年3</p>
                                  <img src="./src/images/banner1.png" alt />
                                </div>
                              </div>
                              {/* Add Pagination */}
                              <div className="swiper-pagination" />
                            </div>
                          </div>
                        </div>
                        <section className="bg-color my_project clearfix">
                          <h4 className="porject_title">
                            <span className="fl project_span">小瑞快贷</span>
                            <span className="project_rate_icon fl">全新上线</span>
                            <Link to={`/financeList`}>
                                  <span className="project_arrow_right fr"> &gt;
                                  </span>
                            </Link>
                          </h4>
                          <div className="home_projectInfo">
                            <div className="fl home_project_rate">
                              <b>8.2-11.5<span>%</span></b>
                              <p>约定年化利率</p>
                            </div>
                            <div className="fl  home_project_time">
                              <b>每月还本还息</b>
                              <p>90天起 | 每期30天</p>
                            </div>
                          </div>
                        </section>
                        <section className="bg-color my_project clearfix">
                          <h4 className="porject_title">
                            <span className="fl project_span">瑞企贷</span>
                            <span className="project_rate_icon fl">全新上线</span>
                            <Link to={`/financeList`}>
                                  <span className="project_arrow_right fr"> &gt;
                                  </span>
                            </Link>
                          </h4>
                          <div className="home_projectInfo">
                            <div className="fl home_project_rate">
                              <b>8.2-11.5<span>%</span></b>
                              <p>约定年化利率</p>
                            </div>
                            <div className="fl  home_project_time">
                              <b>按月付息 到期还本 </b>
                              <p>90天起 | 每期30天</p>
                            </div>
                          </div>
                        </section>
                        <section className="bg-color invest_amount_panel clearfix">
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="fl invest_amount_span">
                                  <b>累计投资金额</b>
                                  <p>12.8447亿</p>
                                </div>
                                <img src="./src/images/group.png" alt="累计投资金额" />
                              </div>
                              <div className="swiper-slide">
                                <div className="fl invest_amount_span">
                                  <b>累计投资金额</b>
                                  <p>11.8447亿</p>
                                </div>
                                <img src="./src/images/group.png" alt="累计投资金额" />
                              </div>
                              <div className="swiper-slide">
                                <div className="fl invest_amount_span">
                                  <b>累计投资金额</b>
                                  <p>10.8447亿</p>
                                </div>
                                <img src="./src/images/group.png" alt="累计投资金额" />
                              </div>
                              <div className="swiper-slide">
                                <div className="fl invest_amount_span">
                                  <b>累计投资金额</b>
                                  <p>10.8447亿</p>
                                </div>
                                <img src="./src/images/group.png" alt="累计投资金额" />
                              </div>
                            </div>
                            {/* 如果需要分页器 */}
                            <div className="swiper-pagination" />
                          </div>
                        </section>
                        <Footer/>
                        <BackTop/>
                </div>
            )

        }
}
export default Index;
