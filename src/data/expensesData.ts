import {
  IExpense,
  IExpenseCategories,
  ITodayExpense,
} from "@/types/commonType";

export const todayExpenses: ITodayExpense[] = [
  {
    icon: "/icons/Grocery.png",
    name: "Grocery",
    details: "5:12 pm • Naik bus umum",
    amount: "-326.800",
  },
  {
    icon: "/icons/Transportation.png",
    name: "Transportation",
    details: "5:12 pm  •  Naik bus umum",
    amount: "-15.000",
  },
  {
    icon: "/icons/Housing.png",
    name: "Housing",
    details: "5:12 pm  •  Bayar Listrik",
    amount: "-185.750",
  },
];

export const expenses: IExpense[] = [
  {
    icon: "/icons/FoodDrink.png",
    name: "Food and Drink",
    details: "5:12 pm  •  Makan Steak",
    amount: "-156.000",
  },
  {
    icon: "/icons/Entertainment.png",
    name: "Entertainment",
    details: "5:12 pm  •  Nonton Bioskop",
    amount: "-35.200",
  },
];

export const expenseCategories: IExpenseCategories[] = [
  { name: "Food and Drinks", amount: "872.400", percentage: "50%" },
  { name: "Shopping", amount: "1.378.200", percentage: "75%" },
  { name: "Housing", amount: "928.500", percentage: "60%" },
  { name: "Transportation", amount: "420.700", percentage: "30%" },
  { name: "Vehicle", amount: "520.000", percentage: "40%" },
];
