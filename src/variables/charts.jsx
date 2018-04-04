// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const objectiveValueChart = {
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    series: [[38.7, 17.4, 10.1, 7.5, 6.4, 5.3, 5.0]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Email Subscriptions
// #############################

const objectiveItemsChart = {
  data: {
    labels: [
      "Energy",
      "Gradient",
      "Frequency",
      "Binding"
    ],
    series: [[1.1, 0.5, 1.3, 2.1]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 2.5,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Completed Tasks
// #############################

const parameterChangesChart = {
  data: {
    labels: ["OH/l", "HOH/a", "O/c", "O/σ", "O/ɛ"],
    series: [[0.3, 0.1, -0.7, 0.6, -0.2]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: -1,
    high: 1,
    horizontalBars: true,
    chartPadding: {
      top: 5,
      right: 15,
      bottom: 0,
      left: 20
    },
  },
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          x2: {
            begin: 500,
            dur: 800,
            from: data.x1,
            to: data.x2,
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    }
  }
};

module.exports = {
  objectiveValueChart,
  objectiveItemsChart,
  parameterChangesChart
};
