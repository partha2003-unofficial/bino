export function formatPair(symbol: string) {
    return symbol.replace(/USD$/, '/USDT');
}

export function formatPrice(value: number | string) {
    const price = Number(value)

    return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: price < 1 ? 5 : 2,
    })
}