export const BL_RATE = 'BL_RATE';
export const RCF_RATE = 'RCF_RATE';
export const COMMON_AMOUNT = 'COMMON_AMOUNT';
export const COMMON_DURATION = 'COMMON_DURATION';

export const blAction = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.value, 10);

    return {
        type: 'BL_RATE',
        value
    }
}

export const rcfAction = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.value, 10);

    return {
        type: 'RCF_RATE',
        value
    }
}

export const amountAction = (e) => {
 e.preventDefault();
    const value = parseInt(e.target.value, 10);

    return {
        type: 'COMMON_AMOUNT',
        value
    }
}

export const durationAction = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.value, 10);

    return {
        type: 'COMMON_DURATION',
        value
    }
}