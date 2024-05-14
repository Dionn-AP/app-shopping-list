
export const formatPrice = (prices?: number, quant?: number) => {
    if (isNaN(prices!)) { return parseFloat("0.00") }

    if (quant) {
        const totalValue = (Number(prices) * quant)*10;
        return totalValue;
    } else {
        return parseFloat("0.00")
    }

    return prices
};

export const formatNumber = (value: string): string => {
    // Remove todos os caracteres não numéricos
    value = String(value).replace(/^(0+)/g, "")
    value = value.replace(/[^\w\s]|\s|[A-Z]/gi, '')
    var len = value.length;

    len == 1 ? value = value.replace(/(\d)/, "0,0$1") : '';
    len == 2 ? value = value.replace(/(\d)/, "0,$1") : ''
    len > 2 ? value = value.replace(/(\d{2})$/, ',$1') : '';
    len == 6 ? value = value.replace(/(\d{1})/, '$1.') : '';
    len == 7 ? value = value.replace(/(\d{2})/, '$1.') : '';
    len == 8 ? value = value.replace(/(\d{3})/, '$1.') : '';
    len == 9 ? value = value.replace(/(\d{1})(\d{3})/, '$1.$2.') : '';
    len == 10 ? value = value.replace(/(\d{2})(\d{3})/, '$1.$2.') : '';
    len == 11 ? value = value.replace(/(\d{3})(\d{3})/, '$1.$2.') : '';
    len == 12 ? value = value.replace(/(\d{1})(\d{3})(\d{3})/, '$1.$2.$3.') : '';
    len == 13 ? value = value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3.') : '';
    parseFloat(value)
    return value;
};


export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().substr(-2);
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
};