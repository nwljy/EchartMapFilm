//example link https://echarts.apache.org/examples/zh/editor.html?c=bar-race-country
//数据初始化
var years = [
  "2001年",
  "2002年",
  "2003年",
  "2004年",
  "2005年",
  "2006年",
  "2007年",
  "2008年",
  "2009年",
  "2010年",
  "2011年",
  "2012年",
  "2013年",
  "2014年",
  "2015年",
  "2016年",
  "2017年",
  "2018年",
  "2019年",
];
var dataset = [
  [
    "北京市",
    3861.5,
    4525.7,
    5267.2,
    6252.5,
    7149.8,
    8387,
    10425.5,
    11813.1,
    12900.9,
    14964,
    17188.8,
    19024.7,
    21134.6,
    22926,
    24779.1,
    27041.2,
    29883,
    33106,
    35445.1,
  ],
  [
    "天津市",
    1756.9,
    1926.9,
    2257.8,
    2621.1,
    3158.6,
    3538.2,
    4158.4,
    5182.4,
    5709.6,
    6830.8,
    8112.5,
    9043,
    9945.4,
    10640.6,
    10879.5,
    11477.2,
    12450.6,
    13362.9,
    14055.5,
  ],
  [
    "河北省",
    5062.9,
    5518.9,
    6333.6,
    7588.6,
    8773.4,
    10043,
    12152.9,
    14200.1,
    15306.9,
    18003.6,
    21384.7,
    23077.5,
    24259.6,
    25208.9,
    26398.4,
    28474.1,
    30640.8,
    32494.6,
    34978.6,
  ],
  [
    "山西省",
    2029.5,
    2324.8,
    2854.3,
    3496,
    4079.4,
    4713.6,
    5935.6,
    7223,
    7147.6,
    8903.9,
    10894.4,
    11683.1,
    11987.2,
    12094.7,
    11836.4,
    11946.4,
    14484.3,
    15958.1,
    16961.6,
  ],
  [
    "内蒙古自治区",
    1713.8,
    1940.9,
    2388.4,
    2942.4,
    3523.7,
    4161.8,
    5166.9,
    6242.4,
    7104.2,
    8199.9,
    9458.1,
    10470.1,
    11392.4,
    12158.2,
    12949,
    13789.3,
    14898.1,
    16140.8,
    17212.5,
  ],
  [
    "辽宁省",
    5033.1,
    5458.2,
    5906.3,
    6469.8,
    7260.8,
    8390.3,
    10292.2,
    12137.7,
    12815.7,
    13896.3,
    16354.9,
    17848.6,
    19208.8,
    20025.7,
    20210.3,
    20392.5,
    21693,
    23510.5,
    24855.3,
  ],
  [
    "吉林省",
    1900.9,
    2043.1,
    2141,
    2455.2,
    2776.5,
    3226.5,
    4080.3,
    4834.7,
    5434.8,
    6410.5,
    7734.6,
    8678,
    9427.9,
    9966.5,
    10018,
    10427,
    10922,
    11253.8,
    11726.8,
  ],
  [
    "黑龙江省",
    3043.4,
    3242.7,
    3609.7,
    4134.7,
    4756.4,
    5329.8,
    6126.3,
    7134.2,
    7218.9,
    8308.3,
    9935,
    11015.8,
    11849.1,
    12170.8,
    11690,
    11895,
    12313,
    12846.5,
    13544.4,
  ],
  [
    "上海市",
    5257.7,
    5795,
    6804,
    8101.6,
    9197.1,
    10598.9,
    12878.7,
    14536.9,
    15742.4,
    17915.4,
    20009.7,
    21305.6,
    23204.1,
    25269.8,
    26887,
    29887,
    32925,
    36011.8,
    37987.6,
  ],
  [
    "江苏省",
    9456.8,
    10606.9,
    12442.9,
    14823.1,
    18121.3,
    21240.8,
    25988.4,
    30945.5,
    34471.7,
    41383.9,
    48839.2,
    53701.9,
    59349.4,
    64830.5,
    71255.9,
    77350.9,
    85869.8,
    93207.6,
    98656.8,
  ],
  [
    "浙江省",
    6927.7,
    8040.7,
    9753.4,
    11482.1,
    13028.3,
    15302.7,
    18640,
    21284.6,
    22833.7,
    27399.9,
    31854.8,
    34382.4,
    37334.6,
    40023.5,
    43507.7,
    47254,
    52403.1,
    58002.8,
    62462,
  ],
  [
    "安徽省",
    3502.8,
    3827.7,
    4307.8,
    5129.1,
    5675.9,
    6500.3,
    7941.6,
    9517.7,
    10864.7,
    13249.8,
    16284.9,
    18341.7,
    20584,
    22519.7,
    23831.2,
    26307.7,
    29676.2,
    34010.9,
    36845.5,
  ],
  [
    "福建省",
    4072.9,
    4467.6,
    4999.6,
    5712.1,
    6415.5,
    7468.6,
    9325.6,
    10931.8,
    12418.1,
    15002.5,
    17917.7,
    20190.7,
    22503.8,
    24942.1,
    26819.5,
    29609.4,
    33842.4,
    38687.8,
    42326.6,
  ],
  [
    "江西省",
    2175.7,
    2450.5,
    2812.7,
    3398.1,
    3941.2,
    4696.8,
    5777.6,
    6934.2,
    7630,
    9383.2,
    11584.5,
    12807.7,
    14300.2,
    15667.8,
    16780.9,
    18388.6,
    20210.8,
    22716.5,
    24667.3,
  ],
  [
    "山东省",
    9076.2,
    10076.5,
    10903.2,
    13308.1,
    15947.5,
    18967.8,
    22718.1,
    27106.2,
    29540.8,
    33922.5,
    39064.9,
    42957.3,
    47344.3,
    50774.8,
    55288.8,
    58762.5,
    63012.1,
    66648.9,
    70540.5,
  ],
  [
    "河南省",
    5533,
    6035.5,
    6942.4,
    8411.2,
    10243.5,
    11977.9,
    14824.5,
    17735.9,
    19181,
    22655,
    26318.7,
    28961.9,
    31632.5,
    34574.8,
    37084.1,
    40249.3,
    44824.9,
    49935.9,
    53717.8,
  ],
  [
    "湖北省",
    3880.5,
    4212.8,
    4757.5,
    5546.8,
    6469.7,
    7531.8,
    9451.4,
    11497.5,
    13192.1,
    16226.9,
    19942.5,
    22590.9,
    25378,
    28242.1,
    30344,
    33353,
    37235,
    42022,
    45429,
  ],
  [
    "湖南省",
    3831.9,
    4151.5,
    4660,
    5542.6,
    6369.9,
    7431.6,
    9285.5,
    11307.4,
    12772.8,
    15574.3,
    18915,
    21207.2,
    23545.2,
    25881.3,
    28538.6,
    30853.5,
    33828.1,
    36329.7,
    39894.1,
  ],
  [
    "广东省",
    12126.6,
    13601.9,
    15979.8,
    18658.3,
    21963,
    25961.2,
    31742.6,
    36704.2,
    39464.7,
    45944.6,
    53072.8,
    57007.7,
    62503.4,
    68173,
    74732.4,
    82163.2,
    91648.7,
    99945.2,
    107986.9,
  ],
  [
    "广西壮族自治区",
    2279.3,
    2523.7,
    2798.2,
    3305.1,
    3742.1,
    4417.8,
    5474.8,
    6455.4,
    7112.9,
    8552.4,
    10299.9,
    11303.6,
    12448.4,
    13587.8,
    14797.8,
    16116.6,
    17790.7,
    19627.8,
    21237.1,
  ],
  [
    "海南省",
    579.2,
    642.7,
    714,
    802.7,
    884.9,
    1027.5,
    1234,
    1474.7,
    1620.3,
    2020.5,
    2463.8,
    2789.4,
    3115.9,
    3449,
    3734.2,
    4090.2,
    4497.5,
    4910.7,
    5330.8,
  ],
  [
    "重庆市",
    2014.6,
    2279.8,
    2615.6,
    3059.5,
    3448.4,
    3900.3,
    4770.7,
    5899.5,
    6651.2,
    8065.3,
    10161.2,
    11595.4,
    13027.6,
    14623.8,
    16040.5,
    18023,
    20066.3,
    21588.8,
    23605.8,
  ],
  [
    "四川省",
    4293.5,
    4725,
    5346.2,
    6304,
    7195.9,
    8494.7,
    10562.1,
    12756.2,
    14190.6,
    17224.8,
    21050.9,
    23922.4,
    26518,
    28891.3,
    30342,
    33138.5,
    37905.1,
    42902.1,
    46363.8,
  ],
  [
    "贵州省",
    1133.3,
    1243.4,
    1429,
    1649.4,
    1939.9,
    2264.1,
    2847.5,
    3504.5,
    3856.7,
    4519,
    5615.6,
    6742.2,
    7973.1,
    9173.1,
    10541,
    11792.4,
    13605.4,
    15353.2,
    16769.3,
  ],
  [
    "云南省",
    2159,
    2358.7,
    2633.4,
    3136.4,
    3497.7,
    4090.7,
    5077.4,
    6016.6,
    6574.4,
    7735.3,
    9523.1,
    11097.4,
    12825.5,
    14041.7,
    14960,
    16369,
    18486,
    20880.6,
    23223.8,
  ],
  [
    "西藏自治区",
    139.2,
    162,
    186,
    217.9,
    243.1,
    285.9,
    344.1,
    398.2,
    445.7,
    512.9,
    611.5,
    710.2,
    828.2,
    939.7,
    1043,
    1173,
    1349,
    1548.4,
    1697.8,
  ],
  [
    "陕西省",
    2010.6,
    2253.4,
    2587.7,
    3141.6,
    3817.2,
    4595.6,
    5681.8,
    7177.8,
    7997.8,
    9845.2,
    12175.1,
    14142.4,
    15905.4,
    17402.5,
    17898.8,
    19045.8,
    21473.5,
    23941.9,
    25793.2,
  ],
  [
    "甘肃省",
    1125.4,
    1232,
    1399.9,
    1653.6,
    1864.6,
    2203,
    2675.1,
    3071.7,
    3268.3,
    3943.7,
    4816.9,
    5393.1,
    6014.5,
    6518.4,
    6556.6,
    6907.9,
    7336.7,
    8104.1,
    8718.3,
  ],
  [
    "青海省",
    300.1,
    340.7,
    385,
    443.7,
    499.4,
    585.2,
    720.1,
    896.9,
    939.7,
    1144.2,
    1370.4,
    1528.5,
    1713.3,
    1847.7,
    2011,
    2258.2,
    2465.1,
    2748,
    2941.1,
  ],
  [
    "宁夏回族自治区",
    337.4,
    377.2,
    442.6,
    519.9,
    579.9,
    683.3,
    877.6,
    1139.2,
    1266.7,
    1571.7,
    1931.8,
    2131,
    2327.7,
    2473.9,
    2579.4,
    2781.4,
    3200.3,
    3510.2,
    3748.5,
  ],
  [
    "新疆维吾尔自治区",
    1491.6,
    1612.6,
    1889.2,
    2170.4,
    2520.5,
    2957.3,
    3500,
    4142.5,
    4237,
    5360.2,
    6532,
    7411.8,
    8392.6,
    9264.5,
    9306.9,
    9630.8,
    11159.9,
    12809.4,
    13597.1,
  ],
];
var startIndex = 0;
var startYear = getStartYear();
var base64Strs = {};
var myChart = null;
var timeOut = 10;
var timer = null;
var maxRowShowInScreen = 31;
var run_status = 0; //1 开始 //2结束 //3暂停
var debug = true;
//base64 转化为jpg file 然后下载到本地
function base64ToJpgFile(year, base64Str) {
  var link = document.createElement("a");

  link.href = base64Str;
  var fileName = year + ".jpg";

  link.download = fileName;

  link.click();
}
//获取开始年
function getStartYear() {
  var startYear = "";
  if (startIndex <= years.length) {
    startYear = years[startIndex];
  }
  return startYear;
}
//做一些测试
function doTest() {}
//修改年份
function changeYear() {
  var startYear = getStartYear();
  base64Strs[startYear] = canvasToBase64();
  if (this.startIndex != this.years.length - 1) {
    startIndex += 1;

    if (!myChart) {
      myChart = echarts.init(document.getElementById("map_div"));
    }

    var option = getOption();
    // console.log(option);
    myChart.setOption(option, true);

    this.timer = createTimer(timeOut);
  } else {
    console.log("base64Strs==>", base64Strs);
    for (const key in base64Strs) {
      if (Object.hasOwnProperty.call(base64Strs, key)) {
        const element = base64Strs[key];
        base64ToJpgFile(key, element);
      }
    }
  }
}
//canvas转换为Base64
function canvasToBase64() {
  var canvasElement = $("#map_div").find("canvas")[0];
  console.log("canvasElement", canvasElement);
  var baseStr = canvasElement.toDataURL("image/jpg");
  console.log("baseStr", baseStr);

  return baseStr;
}
//获取y轴数据
function getYAxisData() {
  var outData = [];
  dataset.forEach(function (item, index) {
    outData.push(item[0]);
  });
  console.log(outData);
  return outData;
}
//获取系列化数据
function getSeriesData() {
  var outData = [];
  console.log("in====");
  dataset.forEach(function (item, index) {
    outData.push(item[startIndex + 1]);
  });
  console.log(outData);
  return outData;
}
//生成echarts option数据
function getOption() {
  var yAxisData = getYAxisData();
  var seriesData = getSeriesData();
  var startYear = getStartYear();
  var option = (option = {
    grid: {
      top: 10,
      bottom: 30,
      left: 150,
      right: 80,
    },
    xAxis: {
      max: "dataMax",
    },
    yAxis: {
      type: "category",

      data: yAxisData,
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: maxRowShowInScreen, // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: startYear,
        type: "bar",
        data: seriesData,
        label: {
          show: true,
          position: "right",
          valueAnimation: true,
        },
      },
    ],
    legend: {
      show: true,
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
    // Disable init animation.
    graphic: {
      elements: [
        {
          type: "text",
          right: 160,
          bottom: 60,
          style: {
            text: startYear,
            font: "bolder 80px monospace",
            fill: "rgba(100, 100, 100, 0.25)",
          },
          z: 100,
        },
      ],
    },
  });
  return option;
}
//生成timer
function createTimer(timeOut) {
  console.log("timeOut==>", timeOut);
  var this_ = this;
  console.log("createTimer");
  return setTimeout(function () {
    changeYear();
  }, Number(timeOut) * 1000);
}
//运行
function run() {
  run_status = 1;
  myChart = echarts.init(document.getElementById("map_div"));
  var option = getOption();
  console.log(option);
  myChart.setOption(option);
  var this_ = this;
  timeOut = $("#speed").val();
  console.log("timeOut==>", timeOut);
  if (timeOut && timeOut != "") {
    timer = createTimer(timeOut);
  }
}
//去运行
function doRun() {
  if (run_status != null && run_status != -1) {
    if (run_status == 2) {
      stopRun();
    }
  }
  run();
}
//暂停运行
function suspend() {
  run_status = 3;
  if (timer) {
    window.clearTimeout(timer);
  }
}
//停止运行
function stopRun() {
  run_status = 2;
  if (timer) {
    window.clearTimeout(timer);
  }
  if (myChart) {
    myChart && myChart.clear();
    myChart = null;
  }
  if (startIndex != 0) {
    startIndex = 0;
  }
  if (base64Strs) {
    base64Strs = {};
  }
  run_status = 0;
}
$(document).ready(function () {});
