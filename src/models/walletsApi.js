import Api from "@/api/api";

export default {
    listWallets: () => Api.post("/wallets"),
    getWallet: id => Api.post("/wallets/view", {id}),
    updateWallet: wallet => Api.post("/wallets/update", {wallet}),
}
