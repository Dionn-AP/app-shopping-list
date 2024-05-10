

export function getHeaders(iToken?: string) {
    const headers = {
        headers: {
            Authorization: `Bearer ${iToken}`
        }
    };
    return headers;
}