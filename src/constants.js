export const CELL_MIN_WIDTH = 194.7; // table cell min width
export const CELL_MIN_HEIGHT = 60; // table cell min height
export const PADDING = 10; // left and right margin for cell event
export const HEIGHT = 36; // event height
export const TOP_PADDING = 10; // top margin for event
export const TOTAL_CITIES = 10; // number of cities
export const MAX_ROWS_ON_UI = 2; // max number of events to be shown for single date and city on UI

export const CITIES = new Array(TOTAL_CITIES).fill(1).map((each, index) => ({
  name: `City ${index + 1}`,
  id: index
}));

export const CALENDAR_EVENTS = [
  {
    cityId: [1],
    startDate: "28/03/2022",
    endDate: "03/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 0,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 2
    }
  },
  {
    cityId: [1],
    startDate: "02/04/2022",
    endDate: "02/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 2
    }
  },
  {
    cityId: [1],
    startDate: "02/04/2022",
    endDate: "03/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 2
    }
  },
  {
    cityId: [1],
    startDate: "02/04/2022",
    endDate: "04/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 2,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 2
    }
  },
  {
    cityId: [1],
    startDate: "03/04/2022",
    endDate: "03/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 3,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 2
    }
  },
  {
    cityId: [1],
    startDate: "03/04/2022",
    endDate: "03/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 2
    }
  },
  {
    cityId: [1, 2],
    startDate: "03/04/2022",
    endDate: "03/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 2
    }
  },
  {
    cityId: [1, 2],
    startDate: "18/04/2022",
    endDate: "22/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 2
    }
  },
  {
    cityId: [1, 2],
    startDate: "29/04/2022",
    endDate: "01/05/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali overlapping",
      typeId: 2
    }
  },
  {
    cityId: [3],
    startDate: "01/04/2022",
    endDate: "01/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali ",
      typeId: 2
    }
  },
  {
    cityId: [3],
    startDate: "01/04/2022",
    endDate: "01/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 2,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 1
    }
  },
  {
    cityId: [3],
    startDate: "01/04/2022",
    endDate: "01/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 3,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 1
    }
  },
  {
    cityId: [3],
    startDate: "02/04/2022",
    endDate: "02/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 3,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 1
    }
  },
  {
    cityId: [1, 2, 3],
    startDate: "30/04/2022",
    endDate: "30/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 3,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 1
    }
  },
  {
    cityId: [1, 2, 3],
    startDate: "28/04/2022",
    endDate: "30/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 0,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 1
    }
  }
];

// let list = events;
//   let showMoreList = [];
//   const showMoreStartIndex = events.indexOf(
//     (each, index) => index > MAX_ROWS_ON_UI - 1 && each.span === 1
//   );
//   if (showMoreStartIndex > -1) {
//     showMoreList = events.slice(showMoreStartIndex);
//     list = events.slice(0, showMoreStartIndex);
//   }
//   console.log(rowIndex, list, showMoreList);
