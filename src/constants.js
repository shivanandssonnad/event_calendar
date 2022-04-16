export const CELL_MIN_WIDTH = 160;
export const CELL_MIN_HEIGHT = 50;
export const PADDING = 10;
export const HEIGHT = 30;
export const TOP_PADDING = 10;

export const CITIES = new Array(30).fill(1).map((each, index) => ({
  name: `City ${index + 1}`,
  id: index
}));

export const CALENDAR_EVENTS = [
  {
    cityId: [1, 2],
    startDate: "28/03/2022",
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
    cityId: [1, 2],
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
    cityId: [1, 2],
    startDate: "02/04/2022",
    endDate: "04/04/2022",
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
  }
];
