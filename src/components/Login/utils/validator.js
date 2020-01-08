export const required = value => value ? undefined : ' ';

export const maxLengthCreator = (maxLength) => value => {
    return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
};

