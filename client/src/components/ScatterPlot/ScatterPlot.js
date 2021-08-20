import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import "./ScatterPlot.scss";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default () => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: "linear", min: 0, max: "auto" }}
    xFormat={function (e) {
      return e + " kg";
    }}
    yScale={{ type: "linear", min: 0, max: "auto" }}
    yFormat={function (e) {
      return e + " cm";
    }}
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "weight",
      legendPosition: "middle",
      legendOffset: 46,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "size",
      legendPosition: "middle",
      legendOffset: -60,
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 12,
        itemsSpacing: 5,
        itemDirection: "left-to-right",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

const data = [
  {
    id: "group A",
    data: [
      {
        x: 10,
        y: 55,
      },
      {
        x: 77,
        y: 80,
      },
      {
        x: 18,
        y: 31,
      },
      {
        x: 18,
        y: 93,
      },
      {
        x: 66,
        y: 0,
      },
      {
        x: 91,
        y: 23,
      },
      {
        x: 4,
        y: 15,
      },
      {
        x: 45,
        y: 7,
      },
      {
        x: 56,
        y: 59,
      },
      {
        x: 37,
        y: 12,
      },
      {
        x: 90,
        y: 48,
      },
      {
        x: 55,
        y: 46,
      },
      {
        x: 72,
        y: 71,
      },
      {
        x: 74,
        y: 27,
      },
      {
        x: 81,
        y: 14,
      },
      {
        x: 7,
        y: 42,
      },
      {
        x: 35,
        y: 21,
      },
      {
        x: 7,
        y: 35,
      },
      {
        x: 29,
        y: 102,
      },
      {
        x: 32,
        y: 1,
      },
      {
        x: 25,
        y: 12,
      },
      {
        x: 4,
        y: 20,
      },
      {
        x: 86,
        y: 109,
      },
      {
        x: 54,
        y: 67,
      },
      {
        x: 10,
        y: 98,
      },
      {
        x: 93,
        y: 78,
      },
      {
        x: 11,
        y: 39,
      },
      {
        x: 16,
        y: 20,
      },
      {
        x: 21,
        y: 26,
      },
      {
        x: 5,
        y: 53,
      },
      {
        x: 9,
        y: 51,
      },
      {
        x: 13,
        y: 86,
      },
      {
        x: 40,
        y: 14,
      },
      {
        x: 39,
        y: 83,
      },
      {
        x: 6,
        y: 71,
      },
      {
        x: 31,
        y: 46,
      },
      {
        x: 61,
        y: 98,
      },
      {
        x: 78,
        y: 55,
      },
      {
        x: 86,
        y: 62,
      },
      {
        x: 33,
        y: 69,
      },
      {
        x: 45,
        y: 26,
      },
      {
        x: 89,
        y: 93,
      },
      {
        x: 63,
        y: 91,
      },
      {
        x: 72,
        y: 77,
      },
      {
        x: 79,
        y: 57,
      },
      {
        x: 23,
        y: 39,
      },
      {
        x: 64,
        y: 33,
      },
      {
        x: 15,
        y: 98,
      },
      {
        x: 2,
        y: 115,
      },
      {
        x: 43,
        y: 9,
      },
    ],
  },
  {
    id: "group B",
    data: [
      {
        x: 20,
        y: 99,
      },
      {
        x: 96,
        y: 84,
      },
      {
        x: 9,
        y: 114,
      },
      {
        x: 96,
        y: 30,
      },
      {
        x: 42,
        y: 92,
      },
      {
        x: 77,
        y: 15,
      },
      {
        x: 28,
        y: 111,
      },
      {
        x: 23,
        y: 2,
      },
      {
        x: 30,
        y: 46,
      },
      {
        x: 81,
        y: 107,
      },
      {
        x: 66,
        y: 74,
      },
      {
        x: 86,
        y: 83,
      },
      {
        x: 77,
        y: 61,
      },
      {
        x: 3,
        y: 94,
      },
      {
        x: 35,
        y: 91,
      },
      {
        x: 21,
        y: 80,
      },
      {
        x: 72,
        y: 61,
      },
      {
        x: 9,
        y: 22,
      },
      {
        x: 89,
        y: 49,
      },
      {
        x: 8,
        y: 38,
      },
      {
        x: 55,
        y: 85,
      },
      {
        x: 35,
        y: 109,
      },
      {
        x: 62,
        y: 117,
      },
      {
        x: 54,
        y: 91,
      },
      {
        x: 49,
        y: 56,
      },
      {
        x: 47,
        y: 65,
      },
      {
        x: 41,
        y: 76,
      },
      {
        x: 47,
        y: 91,
      },
      {
        x: 65,
        y: 38,
      },
      {
        x: 34,
        y: 3,
      },
      {
        x: 14,
        y: 80,
      },
      {
        x: 59,
        y: 55,
      },
      {
        x: 62,
        y: 53,
      },
      {
        x: 30,
        y: 58,
      },
      {
        x: 11,
        y: 70,
      },
      {
        x: 47,
        y: 20,
      },
      {
        x: 17,
        y: 17,
      },
      {
        x: 43,
        y: 17,
      },
      {
        x: 0,
        y: 101,
      },
      {
        x: 17,
        y: 68,
      },
      {
        x: 5,
        y: 45,
      },
      {
        x: 81,
        y: 21,
      },
      {
        x: 57,
        y: 118,
      },
      {
        x: 91,
        y: 63,
      },
      {
        x: 0,
        y: 109,
      },
      {
        x: 30,
        y: 13,
      },
      {
        x: 23,
        y: 99,
      },
      {
        x: 33,
        y: 33,
      },
      {
        x: 8,
        y: 98,
      },
      {
        x: 5,
        y: 24,
      },
    ],
  },
  {
    id: "group C",
    data: [
      {
        x: 68,
        y: 31,
      },
      {
        x: 62,
        y: 114,
      },
      {
        x: 66,
        y: 119,
      },
      {
        x: 27,
        y: 11,
      },
      {
        x: 1,
        y: 20,
      },
      {
        x: 90,
        y: 36,
      },
      {
        x: 2,
        y: 118,
      },
      {
        x: 17,
        y: 70,
      },
      {
        x: 17,
        y: 82,
      },
      {
        x: 11,
        y: 89,
      },
      {
        x: 14,
        y: 3,
      },
      {
        x: 68,
        y: 56,
      },
      {
        x: 82,
        y: 107,
      },
      {
        x: 81,
        y: 52,
      },
      {
        x: 11,
        y: 5,
      },
      {
        x: 74,
        y: 33,
      },
      {
        x: 28,
        y: 8,
      },
      {
        x: 90,
        y: 112,
      },
      {
        x: 47,
        y: 65,
      },
      {
        x: 9,
        y: 93,
      },
      {
        x: 71,
        y: 32,
      },
      {
        x: 33,
        y: 69,
      },
      {
        x: 66,
        y: 0,
      },
      {
        x: 14,
        y: 68,
      },
      {
        x: 43,
        y: 72,
      },
      {
        x: 58,
        y: 98,
      },
      {
        x: 10,
        y: 52,
      },
      {
        x: 41,
        y: 11,
      },
      {
        x: 73,
        y: 81,
      },
      {
        x: 91,
        y: 90,
      },
      {
        x: 93,
        y: 24,
      },
      {
        x: 35,
        y: 107,
      },
      {
        x: 44,
        y: 17,
      },
      {
        x: 19,
        y: 79,
      },
      {
        x: 53,
        y: 48,
      },
      {
        x: 11,
        y: 108,
      },
      {
        x: 83,
        y: 81,
      },
      {
        x: 58,
        y: 55,
      },
      {
        x: 65,
        y: 25,
      },
      {
        x: 94,
        y: 74,
      },
      {
        x: 83,
        y: 29,
      },
      {
        x: 21,
        y: 26,
      },
      {
        x: 48,
        y: 72,
      },
      {
        x: 29,
        y: 116,
      },
      {
        x: 3,
        y: 84,
      },
      {
        x: 76,
        y: 93,
      },
      {
        x: 27,
        y: 50,
      },
      {
        x: 64,
        y: 85,
      },
      {
        x: 5,
        y: 69,
      },
      {
        x: 96,
        y: 0,
      },
    ],
  },
  {
    id: "group D",
    data: [
      {
        x: 60,
        y: 14,
      },
      {
        x: 55,
        y: 4,
      },
      {
        x: 3,
        y: 2,
      },
      {
        x: 12,
        y: 17,
      },
      {
        x: 73,
        y: 5,
      },
      {
        x: 33,
        y: 65,
      },
      {
        x: 94,
        y: 76,
      },
      {
        x: 3,
        y: 56,
      },
      {
        x: 11,
        y: 20,
      },
      {
        x: 40,
        y: 114,
      },
      {
        x: 30,
        y: 46,
      },
      {
        x: 4,
        y: 78,
      },
      {
        x: 13,
        y: 6,
      },
      {
        x: 43,
        y: 50,
      },
      {
        x: 53,
        y: 6,
      },
      {
        x: 85,
        y: 24,
      },
      {
        x: 11,
        y: 40,
      },
      {
        x: 72,
        y: 92,
      },
      {
        x: 37,
        y: 62,
      },
      {
        x: 40,
        y: 17,
      },
      {
        x: 24,
        y: 114,
      },
      {
        x: 27,
        y: 104,
      },
      {
        x: 14,
        y: 90,
      },
      {
        x: 2,
        y: 79,
      },
      {
        x: 21,
        y: 15,
      },
      {
        x: 60,
        y: 65,
      },
      {
        x: 98,
        y: 10,
      },
      {
        x: 12,
        y: 23,
      },
      {
        x: 38,
        y: 0,
      },
      {
        x: 51,
        y: 69,
      },
      {
        x: 79,
        y: 111,
      },
      {
        x: 4,
        y: 1,
      },
      {
        x: 22,
        y: 24,
      },
      {
        x: 25,
        y: 16,
      },
      {
        x: 79,
        y: 22,
      },
      {
        x: 13,
        y: 106,
      },
      {
        x: 72,
        y: 63,
      },
      {
        x: 89,
        y: 3,
      },
      {
        x: 33,
        y: 10,
      },
      {
        x: 25,
        y: 45,
      },
      {
        x: 76,
        y: 85,
      },
      {
        x: 56,
        y: 83,
      },
      {
        x: 64,
        y: 40,
      },
      {
        x: 96,
        y: 106,
      },
      {
        x: 63,
        y: 47,
      },
      {
        x: 68,
        y: 76,
      },
      {
        x: 92,
        y: 39,
      },
      {
        x: 9,
        y: 35,
      },
      {
        x: 41,
        y: 39,
      },
      {
        x: 11,
        y: 1,
      },
    ],
  },
  {
    id: "group E",
    data: [
      {
        x: 81,
        y: 80,
      },
      {
        x: 23,
        y: 105,
      },
      {
        x: 2,
        y: 83,
      },
      {
        x: 23,
        y: 95,
      },
      {
        x: 83,
        y: 17,
      },
      {
        x: 8,
        y: 54,
      },
      {
        x: 36,
        y: 7,
      },
      {
        x: 77,
        y: 97,
      },
      {
        x: 64,
        y: 94,
      },
      {
        x: 6,
        y: 118,
      },
      {
        x: 61,
        y: 87,
      },
      {
        x: 96,
        y: 15,
      },
      {
        x: 56,
        y: 79,
      },
      {
        x: 13,
        y: 95,
      },
      {
        x: 98,
        y: 61,
      },
      {
        x: 9,
        y: 87,
      },
      {
        x: 20,
        y: 3,
      },
      {
        x: 28,
        y: 38,
      },
      {
        x: 72,
        y: 106,
      },
      {
        x: 32,
        y: 119,
      },
      {
        x: 2,
        y: 36,
      },
      {
        x: 92,
        y: 117,
      },
      {
        x: 64,
        y: 19,
      },
      {
        x: 45,
        y: 98,
      },
      {
        x: 25,
        y: 38,
      },
      {
        x: 1,
        y: 95,
      },
      {
        x: 10,
        y: 88,
      },
      {
        x: 79,
        y: 4,
      },
      {
        x: 58,
        y: 17,
      },
      {
        x: 46,
        y: 12,
      },
      {
        x: 10,
        y: 97,
      },
      {
        x: 47,
        y: 4,
      },
      {
        x: 88,
        y: 64,
      },
      {
        x: 76,
        y: 51,
      },
      {
        x: 84,
        y: 25,
      },
      {
        x: 87,
        y: 101,
      },
      {
        x: 26,
        y: 99,
      },
      {
        x: 48,
        y: 9,
      },
      {
        x: 90,
        y: 30,
      },
      {
        x: 0,
        y: 20,
      },
      {
        x: 33,
        y: 13,
      },
      {
        x: 26,
        y: 78,
      },
      {
        x: 94,
        y: 88,
      },
      {
        x: 33,
        y: 55,
      },
      {
        x: 47,
        y: 60,
      },
      {
        x: 79,
        y: 48,
      },
      {
        x: 60,
        y: 2,
      },
      {
        x: 53,
        y: 13,
      },
      {
        x: 13,
        y: 52,
      },
      {
        x: 94,
        y: 72,
      },
    ],
  },
];
