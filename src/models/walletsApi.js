import Api from "@/api/api";

export default {
    listWallets: () => Api.post("/wallets").then(data => {
        return data
    }),
    getWallet: id => Api.post("/wallets/view", {id}).then(data => {
        return data
    }),
    updateWallet: wallet => Api.post("/wallets/update", {wallet}).then(data => {
        return data
    }),
    createWallet: wallet => Api.post("/wallets/create", {wallet}).then(data => {
        return data
    }),
}
