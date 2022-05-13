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

export const EVENT_RENDERING_TYPE = {
  EVENT_SPAN_WITH_SINGLE_EVENT: 'EVENT_SPAN_WITH_SINGLE_EVENT',
  EVENT_SPAN_WITH_MULTIPLE_EVENTS: 'EVENT_SPAN_WITH_MULTIPLE_EVENTS',
  EVENT_SINGLE_SPAN_WITH_MULTIPLE_EVENTS: 'EVENT_SINGLE_SPAN_WITH_MULTIPLE_EVENTS',
};

export const CALENDAR_EVENTS = [
  {
    cityId: 1,
    events: [
      {
        cityEventId: 1,
        startDate: "28/03/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 0,
        description: "hello",
        eventId: 1,
        eventName: "Event overlap with prev month",
        eventTypeId: 0
      },
      // event overlapping with next month
      {
        cityEventId: 2,
        startDate: "28/04/2022",
        endDate: "03/05/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 2,
        eventName: "Event overlap with next month",
        eventTypeId: 1
      },
      // multiple events on same day with different impact and type
      {
        cityEventId: 3,
        startDate: "02/04/2022",
        endDate: "02/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 3,
        eventName: "Diwali",
        eventTypeId: 0
      },
      {
        cityEventId: 4,
        startDate: "02/04/2022",
        endDate: "02/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 2,
        description: "hello",
        eventId: 4,
        eventName: "Diwali",
        eventTypeId: 1
      },
      {
        cityEventId: 5,
        startDate: "02/04/2022",
        endDate: "02/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 3,
        description: "hello",
        eventId: 5,
        eventName: "Diwali",
        eventTypeId: 2
      },
      {
        cityEventId: 6,
        startDate: "02/04/2022",
        endDate: "02/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 4,
        description: "hello",
        eventId: 6,
        eventName: "Diwali",
        eventTypeId: 3
      },
      // multiple events on same day with same impact and different type
      {
        cityEventId: 7,
        startDate: "02/04/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 7,
        eventName: "Diwali",
        eventTypeId: 0
      },
      {
        cityEventId: 8,
        startDate: "02/04/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 8,
        eventName: "Diwali",
        eventTypeId: 1
      },
      {
        cityEventId: 9,
        startDate: "02/04/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 9,
        eventName: "Diwali",
        eventTypeId: 2
      },
      {
        cityEventId: 10,
        startDate: "02/04/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 10,
        eventName: "Diwali",
        eventTypeId: 3
      },
      // event with more than 1 day span
      {
        cityEventId: 11,
        startDate: "04/04/2022",
        endDate: "06/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 11,
        eventName: "Diwali",
        eventTypeId: 1
      },
      {
        cityEventId: 12,
        startDate: "05/04/2022",
        endDate: "06/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 2,
        description: "hello",
        eventId: 12,
        eventName: "Diwali",
        eventTypeId: 2
      },
      {
        cityEventId: 13,
        startDate: "05/04/2022",
        endDate: "08/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 3,
        description: "hello",
        eventId: 13,
        eventName: "Diwali",
        eventTypeId: 3
      },
      // single event per day
      {
        cityEventId: 14,
        startDate: "08/04/2022",
        endDate: "08/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 14,
        eventName: "Diwali 2",
        eventTypeId: 1
      },
      {
        cityEventId: 15,
        startDate: "09/04/2022",
        endDate: "09/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 2,
        description: "hello",
        eventId: 15,
        eventName: "Diwali 2",
        eventTypeId: 2
      },
      {
        cityEventId: 16,
        startDate: "10/04/2022",
        endDate: "10/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 3,
        description: "hello",
        eventId: 16,
        eventName: "Diwali",
        eventTypeId: 3
      },
      {
        cityEventId: 17,
        startDate: "11/04/2022",
        endDate: "11/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 3,
        description: "hello",
        eventId: 17,
        eventName: "Diwali",
        eventTypeId: 4
      },
      {
        cityEventId: 18,
        startDate: "12/04/2022",
        endDate: "12/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 3,
        description: "hello",
        eventId: 18,
        eventName: "Diwali",
        eventTypeId: 5
      },
      {
        cityEventId: 19,
        startDate: "13/04/2022",
        endDate: "13/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 19,
        eventName: "Diwali",
        eventTypeId: 6
      },
    ]
  },
  {
    cityId: 2,
    events: [
      {
        cityEventId: 20,
        startDate: "13/04/2022",
        endDate: "13/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 19,
        eventName: "Diwali",
        eventTypeId: 6
      },
      {
        cityEventId: 21,
        startDate: "03/04/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 20,
        eventName: "Diwali",
        eventTypeId: 1
      },
      {
        cityEventId: 22,
        startDate: "03/04/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 2,
        description: "hello",
        eventId: 21,
        eventName: "Diwali",
        eventTypeId: 2
      },
      {
        cityEventId: 23,
        startDate: "03/04/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 3,
        description: "hello",
        eventId: 22,
        eventName: "Diwali",
        eventTypeId: 1
      },
      {
        cityEventId: 24,
        startDate: "03/04/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 0,
        description: "hello",
        eventId: 22,
        eventName: "Diwali",
        eventTypeId: 4
      }
    ]
  },
  {
    cityId: 4,
    events: [
      {
        cityEventId: 25,
        startDate: "28/03/2022",
        endDate: "03/04/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 0,
        description: "hello",
        eventId: 1,
        eventName: "Event overlap with prev month",
        eventTypeId: 0
      },
      // event overlapping with next month
      {
        cityEventId: 26,
        startDate: "28/04/2022",
        endDate: "03/05/2022",
        startTime: "09:00",
        endTime: "22:00",
        categoryId: [1, 2, 3],
        impactId: 1,
        description: "hello",
        eventId: 2,
        eventName: "Event overlap with next month",
        eventTypeId: 1
      },
    ]
  }
];