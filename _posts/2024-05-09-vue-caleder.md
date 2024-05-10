```yaml
layout: post
title:  vue element Calendar日历 
tags: elementUi Calendar日历
categories: elementUi Calendar
```

> 需求场景，日历控件显示 每一天的新增客户数量，有客户就显示一个角标有多少人，没有新增客户就是正常显示，控件支持自定义日期高度，边距，标题，自定义格式化数据
![Alt text](2345%E6%88%AA%E5%9B%BE20240510103941.png)
####  带角标的日历控件
```
<template>
	<div class="w-100p flex-column  col-b-title " :style="customStyle">
		<div class="flex justify-between  bg-b-white">
      <div class="flex-1" v-if="{{dataInfo.title}}">{{ dataInfo.title }}</div> 
			<div class="w-100p flex-row justify-between align-center" :class="actionBoxClass">
				<div class="flex-row month-action align-center f-s-14">
					<span class="month-input m-r-8" :style="dateInputStyle">
						<el-date-picker
							v-model="taskTime"
							v-if="formatType === 'month'"
							:format="formatValue"
							:format-type="formatType"
							class="f-s-16 bold"
						>
						</el-date-picker>
					</span>
					<span @click="clickLast" class="month-btn prev-moth ">
						<svg-icon icon-class="arrow-left" :class="arrowColor"></svg-icon>
					</span>
					<span @click="clickNext" class="month-btn next-moth">
						<svg-icon icon-class="arrow-right" :class="arrowColor"></svg-icon>
					</span>
				</div>
				<div class=" align-center">
					<span
						class="f-s-12 brs4  bor-w-1 bor-c-2 col-b-title-6 text-center align-center calendar-today "
						@click="resetCurrentDay"
						>今日</span
					>
				</div>
			</div>
		</div>
		<div class="flex">
			<el-calendar ref="taskMonthCalendar" :value-format="formatValue" v-model="taskTime" :type="formatType">
				<template #dateCell="{date, data}">
					<div class="time-date" :class="dayClass" :style="dayStyle">
						<span class="time-day">{{
							data.day
								.split('-')
								.slice(2)
								.join('-')
						}}</span>
						<div
							class="time-cadge-box"
							@click="handleDateHook(date, data)"
							v-if="acceptBadge && data.type === 'current-month'"
							v-html="formatDateBadge(date, data)"
						></div>
					</div>
				</template>
			</el-calendar>
		</div>
	</div>
</template>

<script>
import { getCurrentMonthRangeDate } from '@/utils/old/time';

export default {
	name: 'MyCalendarWithBadge',
	filters: {},
	props: {
		//配置控件基础信息（title: 标题）
		dataInfo: {
			default: () => {},
			type: Object
		},
		// 默认起始时间
		taskTimeStart: {
			default: () => {
				return getCurrentMonthRangeDate(new Date()).start_time;
			},
			type: String
		},
		//月份头部搜索框的样式类，建议使用margin下边距类 m-b-20  m-b-10 m-b-26 ，不建议使用 p-10 p-b-20之类的内边距
		actionBoxClass: {
			default: 'm-b-16',
			type: String
		},
		// 日期的样式类，建议使用margin边距类 m-t-20  m-t-10 m-b-26 ，不建议使用 p-10 p-t-20之类的内边距
		dayClass: {
			default: 'm-t-4',
			type: String
		},
		//日期搜索框样式(宽度不得低于90px)
		dateInputStyle: {
			default: 'width:90px;font-size:16px;',
			type: String
		},
		// 日期的宽高，正方形
		dayStyle: {
			default: 'width:32px;height:32px;line-height:32px;',
			type: String
		},
		// 左右箭头颜色支持自定义
		arrowColor: {
			default: 'col-b-title-3',
			type: String
		},
		// 时间容器自定义样式(使用dayClass直接控制日期宽高更有效果，过小会被容器撑开)width:304px;height:454px;
		customStyle: {
			default: '',
			type: String
		},
		/*
        日期格式化格式类型
        默认格式化月份     month
         */
		formatType: {
			default: 'month',
			type: String
		},
		/*
        日期格式化格式数据形式
        支持格式   yyyy年-MM月-dd日 HH时:mm分
         */
		formatValue: {
			default: 'yyyy年-MM月',
			type: String
		},
		/*
        仅显示月份整月数据(强制获取1号到尾号日期，强制将start_time 设置当前月份的1号)
         */
		fullMonth: {
			default: false,
			type: Boolean
		},
		/*
        支持开启角标
         */
		acceptBadge: {
			default: false,
			type: Boolean
		},
		//手动传入需要显示的统计项，具体需要看数据源再处理格式化
		dateBadgeList: {
			default: () => [],
			type: Array
		}
	},
	data() {
		return {
			taskTime: this.taskTimeStart,
			dateBadgeListModel: this.dateBadgeList
		};
	},
	computed: {},
	watch: {
		taskTime(newVal) {
			const dataParams = getCurrentMonthRangeDate(newVal, this.fullMonth);
			// this.dateBadgeListModel = this.$parent.dateBadgeList;
			// 时间切换通知父组件改变
			this.triggerDate(dataParams);
		},
		dateBadgeList(newVal, oldVal) {
			this.dateBadgeListModel = newVal;
		}
	},
	created() {},
	methods: {
		clickLast() {
			//上个月
			this.$refs.taskMonthCalendar.$children[0].$children[0].$el.click();
		},
		clickNext() {
			//下个月
			this.$refs.taskMonthCalendar.$children[0].$children[2].$el.click();
		},
		resetCurrentDay() {
			//回到今天
			this.$refs.taskMonthCalendar.$children[0].$children[1].$el.click();
		},
		triggerEvent(eventName, params) {
			this.$emit(eventName, params);
		},
		//通用子调用父组件状态管理
		triggerDate(params) {
			/**
			 * @return params
			 *      time: current,
			 *      start_time:
			 *      end_time:
			 *      year:
			 *      month:
			 *      day:
			 *      total_day:
			 */
			this.triggerEvent('onDateChange', params);
		},
		// 当日点击回调
		handleDateHook(date, data) {
			/**
			 * @return
			 * day:2024-04-19"
			 * isSelected:false
			 * type:current-month"
			 */
			this.triggerEvent('handleDateHook', {
				...date,
				...data
			});
		},
		//格式化角标数据
		formatDateBadge(date, data) {
			let badgeNum = this.dateBadgeListModel.find(item => item.date === data.day);
			return !badgeNum?.count
				? ''
				: ` <span  class="time-badge">${badgeNum.count > 99 ? '99+' : badgeNum.count}</span>`;
		}
	}
};
</script>

<style lang="scss" scoped>


.flex-column {
  flex-direction: column;
}
.col-b-t-3 {
  color: rgba(186, 187, 194, 1);
}
//月份选择
.month-action {
  margin-top: -6px;
  //height: 30px;
  //line-height: 30px;
  .month-btn {
    //font-size: 22px;
    height: 24px;
    width: 24px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;

    &.prev-moth {
      margin-right: 8px;
    }

    &.next-moth {
      margin-left: 0;
    }
  }
}
 .month-input {
  display: inline-block;

  .el-date-editor {
    display: inline-block;
    //width: 90px;
    width: auto;
    font-size: inherit;

    span.el-input__prefix,
    span.el-input__suffix {
      display: none;
    }

    input,
    .el-input__inner {
      background: #fff;
      border: none;
      cursor: default;
      color: #000;
      font-weight: bold;
      padding-left: 0;
      padding-right: 0;
      font-size: inherit;
    }
  }
}

 .el-calendar {
  //一隐藏上月和下月数据
  .el-calendar__header {
    display: none;
  }

  .el-calendar__body {
    padding: 0;
    margin-top: -8px;

    .time-date {
      position: relative;
      display: block;
      //width: 32px;
      //height: 32px;
      //margin: 0 26px;
      border-radius: 4px;
      font-size: 14px;
      margin-left: 5px;
      border: 1px solid transparent;
      .time-day {
        display: block;
        width: 100%;
        height: 100%;
      }
      .time-cadge-box {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        .time-badge {
          border: none;
          display: inline-block;
          position: absolute;
          top: -13px;
          right: -13px;
          background-color: $red;
          width: 28px;
          height: 28px;
          text-align: center;
          line-height: 28px;
          font-size: 12px;
          border-radius: 50%;
          transform: scale(0.68);
          color: #fff;
        }
      }
    }

    .el-calendar-table {
      &:not(.is-range) td.prev,
      &:not(.is-range) td.next {
        cursor: not-allowed;
        pointer-events: none;

        p,
        &.next {
          /*display: none;*/
          color: rgba($bTitleCol, 30%);

          .time-badge {
            display: none;
          }
        }
      }

      td,
      tr:first-child td,
      tr td:first-child {
        border: 1px solid transparent;
      }
    }

    .el-calendar-table {
      .el-calendar-day {
        //height: 32px;
        //width: 32px;
        height: auto;
        width: auto;
        border-radius: 4px;
        text-align: center;
        border: 1px solid transparent;
        background: transparent;
        padding: 0;
        &:hover {
          background: transparent;
        }
      }

      thead {
        th {
          //&::before {
          //  content: "周";
          //}
          font-size: 14px;
          //padding-top: 26px;
          padding-top: 0;
          color: rgba($menuBg, 60%);
        }
      }

      thead th,
      tbody td {
        //padding-bottom: 26px;
        padding-bottom: 0;
        &.is-today {
          background: transparent;

          .el-calendar-day {
            background: transparent;
            .time-date {
              border: 1px solid rgba($blue, 100%);
              color: #2cabf8;
            }
          }
        }

        &.current {
          &.is-selected {
            background: transparent;
            .el-calendar-day {
              .time-date {
                background: rgba($blue, 100%);
                color: #fff;
                border: 1px solid #2cabf8;
              }
            }

            &.is-today {
              .el-calendar-day {
                .time-date {
                  color: #fff;
                }
                &:hover{
                  .time-date{
                    background: rgba(#e6f7ff, 100%);
                    border-color: rgba(#e6f7ff, 100%);
                    color: rgba(#242533, 100%);
                  }
                }
              }

            }

          }

         .el-calendar-day:hover  {
            .time-date {
              background: rgba(#e6f7ff, 100%);
              border-color: rgba(#e6f7ff, 100%);
              color: rgba(#242533, 100%);
            }
          }
        }

        &.current.is-selected.is-today  {
          .el-calendar-day:hover  .time-date{

            background: rgba($blue, 100%);
            color: #fff;

          }

        }
      }
    }
  }
}

.calendar-today {
  display: inline-block;
  height: 20px;
  width: 40px;
  cursor: pointer;
  &:hover {
    background: rgba(#e6f7ff, 100%);
    border-color: rgba(#e6f7ff, 100%);
    color: rgba(#242533, 100%);
  }
}

</style>

```