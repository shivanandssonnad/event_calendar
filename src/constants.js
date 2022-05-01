export const CELL_MIN_WIDTH = 172; // table cell min width
export const CELL_MIN_HEIGHT = 60; // table cell min height
export const PADDING = 10; // left and right margin for cell event
export const EVENT_HEIGHT = 36; // event height
export const TOP_PADDING = 10; // top margin for event
export const TOTAL_CITIES = 10; // number of cities
export const MAX_ROWS_ON_UI = 2; // max number of events to be shown for single date and city on UI
export const API_DATE_FORMAT = "dd/MM/yyyyy";
export const UI_DISPLAY_MONTH_FORMAT = "MMM yyyy";

export const EVENT_IMPACT_ENUM_MAPPING = {
  0: "POSITIVE",
  1: "LOW",
  2: "MEDIUM",
  3: "HIGH"
};

export const EVENT_IMPACT = {
  LOW: {
    value: "LOW",
    label: "Mild",
    color: "#FFE066"
  },
  MEDIUM: {
    value: "MEDIUM",
    label: "Modarate",
    color: "#EFA17E"
  },
  HIGH: {
    value: "HIGH",
    label: "High",
    color: "#E899B2"
  },
  POSITIVE: {
    value: "POSITIVE",
    label: "Positive",
    color: "#72B5A8"
  }
};

export const EVENT_TYPE = {
  0: {
    name: "Festival",
    icon: "Festival"
  },
  1: {
    name: "National Holiday",
    icon: "NationalHoliday"
  },
  2: {
    name: "Auspecious Day",
    icon: "AuspeciousDay"
  },
  3: {
    name: "Meat Ban",
    icon: "MeatBanDay"
  },
  4: {
    name: "Consumer Behaviour",
    icon: "ConsumerBehaviour"
  },
  5: {
    name: "Eclipse",
    icon: "Eclipse"
  },
  6: {
    name: "Other",
    icon: "Other"
  }
};

export const CITIES = new Array(TOTAL_CITIES).fill(1).map((each, index) => ({
  name: `City ${index + 1}`,
  id: index
}));

export const CALENDAR_EVENTS = [
  // event overlapping with prev month
  {
    cityId: [0, 4],
    startDate: "28/03/2022",
    endDate: "03/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 0,
    description: "hello",
    event: {
      eventId: 1,
      name: "Event overlap with prev month",
      typeId: 0
    }
  },
  // event overlapping with next month
  {
    cityId: [0, 4],
    startDate: "28/04/2022",
    endDate: "03/05/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Event overlap with next month",
      typeId: 1
    }
  },
  // multiple events on same day with different impact and type
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
      typeId: 0
    }
  },
  {
    cityId: [1],
    startDate: "02/04/2022",
    endDate: "02/04/2022",
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
    cityId: [1],
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
    impactId: 4,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 3
    }
  },
  // multiple events on same day with same impact and different type
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
      typeId: 0
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
      typeId: 1
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
    endDate: "03/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 3
    }
  },
  // event with more than 1 day span
  {
    cityId: [1],
    startDate: "04/04/2022",
    endDate: "06/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 1
    }
  },
  {
    cityId: [1],
    startDate: "05/04/2022",
    endDate: "06/04/2022",
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
    startDate: "05/04/2022",
    endDate: "08/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 3,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 3
    }
  },
  // single event per day
  {
    cityId: [1],
    startDate: "08/04/2022",
    endDate: "08/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali 2",
      typeId: 1
    }
  },
  {
    cityId: [1],
    startDate: "09/04/2022",
    endDate: "09/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 2,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali 2",
      typeId: 2
    }
  },
  {
    cityId: [1],
    startDate: "10/04/2022",
    endDate: "10/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 3,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 3
    }
  },
  {
    cityId: [1],
    startDate: "11/04/2022",
    endDate: "11/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 3,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 4
    }
  },
  {
    cityId: [1],
    startDate: "12/04/2022",
    endDate: "12/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 3,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 5
    }
  },
  {
    cityId: [1, 2],
    startDate: "13/04/2022",
    endDate: "13/04/2022",
    startTime: "09:00",
    endTime: "22:00",
    categoryId: [1, 2, 3],
    impactId: 1,
    description: "hello",
    event: {
      eventId: 2,
      name: "Diwali",
      typeId: 6
    }
  }
];
