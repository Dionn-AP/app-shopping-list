
export const formatPrice = (prices: number, quant?: number) => {
    if (quant) {
        const totalValue = prices * quant;
        return totalValue;
    }
};

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().substr(-2);
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
};