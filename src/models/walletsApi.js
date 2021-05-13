import Api from "@/api/api";

export default {
    listWallets: () => Api.post("/wallets").then(data => {
        return data
    }),
    updateWallet: wallet => Api.post("/wallets/update", {wallet}).then(data => {
        return data
    }),
    createWallet: wallet => Api.post("/wallets/create", {wallet}).then(data => {
        return data
    }),
    deleteWallet: id => Api.post("/wallets/update", {wallet: {id:id, ativa: false}}).then(data => {
        return data
    }),
}
