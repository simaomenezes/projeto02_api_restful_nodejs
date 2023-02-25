// eslint-disable-next-line
import { Knex } from "knex";

declare module 'Knex/types/table' {
  export interface table {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id: string
    }
  }
}
