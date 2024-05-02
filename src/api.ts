export const apiGetCoinList = async () => {
  return (
    await (await fetch("https://api.coinpaprika.com/v1/tickers")).json()
  ).slice(0, 10);
};

export const apiGetCoinInfo = async (coinId: string) => {
  return await (
    await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  ).json();
};

export const apiGetCoinPrice = async (coinId: string) =>
  await (
    await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  ).json();
