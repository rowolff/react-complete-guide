declare global {
  interface Expense extends ExpenseInputData {
    id: string;
  }

  interface ExpenseInputData {
    date: Date;
    title: string;
    amount: number;
  }
}

export {};
