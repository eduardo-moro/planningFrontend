import Api from "@/api/api";

export default {
    listWallets: () => Api.post("/wallets").then(data => {
        return data
    }),
    getWallet: id => Api.post("/wallets/view", {id}),
    updateWallet: wallet => Api.post("/wallets/update", {wallet}),
}
