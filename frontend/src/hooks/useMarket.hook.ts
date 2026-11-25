import { binance } from "@/lib/binanceApi";
import { useQuery } from "@tanstack/react-query";

type Market = {
    symbol: string;
    lastPrice: string;
    priceChangePercent: string;
};

async function fatchMarket(symbol: string[]): Promise<Market[]> {
    const { data } = await binance.get('/ticker/24hr', {
        params: { symbols: JSON.stringify(symbol) }
    })
    return data;
}

export function useMarket(symbol: string[]) {
    return useQuery({
        queryKey: ['markets', symbol],
        queryFn: () => fatchMarket(symbol),
        refetchInterval: 2000
    })
}