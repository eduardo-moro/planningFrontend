import Api from "@/api/api";

export default {
    listTransactions: () => Api.post("/transactions").then(data => {
        return data
    }),
    listByWallet: id => Api.post("/transactions", {id}).then(data => {
        return data
    }),
    updateTransactions: transactions => Api.post("/transactions/update", {transactions}).then(data => {
        return data
    }),
    createTransactions: transactions => Api.post("/transactions/create", {transactions}).then(data => {
        return data
    }),
}
