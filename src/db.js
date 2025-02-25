

// Income data scheme:
// name: string (inherits from users)
// records: -> array of objects
//   date: string
//   income: number
//   expense: number


export const test_data = []
export const test_data1 = [
  {
    id: 1,
    name: "Ikrom",
    records: [
      {
        month: "January",
        details: [
          {
            income: 200000,
            expense: 0,
            date: "2025-01-01"
          },
          {
            income: 200000,
            expense: 10000,
            date: "2025-01-02"
          },
        ]
      },
      {
        month: "February",
        details: [
          {
            income: 200000,
            expense: 2000,
            date: "2025-01-01"
          },
          {
            income: 200000,
            expense: 10000,
            date: "2025-01-02"
          },
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Samandar",
    records: [
      {
        month: "January",
        details: [
          {
            income: 200000,
            expense: 0,
            date: "2025-01-01"
          },
          {
            income: 200000,
            expense: 10000,
            date: "2025-01-02"
          }
        ]
      },
      {
        month: "February",
        details: [
          {
            income: 200000,
            expense: 15000,
            date: "2025-01-01"
          },
          {
            income: 200000,
            expense: 10000,
            date: "2025-01-02"
          },
        ]
      }
    ]
  }
]

// Users data scheme:
// name: string
// is_manager: boolean
export const users = []


// Local storage
const INCOME_DATA_KEY = "income_data"
export const SET_INCOME_DATA = (data) => {
  localStorage.setItem(INCOME_DATA_KEY, JSON.stringify(data));
}
export const GET_INCOME_DATA = (data) => {
  return JSON.parse(localStorage.getItem(INCOME_DATA_KEY));
}