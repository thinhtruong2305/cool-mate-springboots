export const getResponseError = (error) => {
    if (error === null || error === undefined) {
        return null;
    }

    if (error.response) {
        if (error.response.status === 400 && error.response.data.errors) {
            const responseErrors = error.response.data.errors;
            console.log(responseErrors);
            if (responseErrors && Array.isArray(responseErrors)) {
                const errorData = new Map();
                for (const errorItem of responseErrors.values()) {
                    if (errorData.get(errorItem.field) !== null && errorData.get(errorItem.field) !== undefined) {
                        errorData.get(errorItem.field).push(errorItem.defaultMessage);
                    } else {
                        errorData.set(errorItem.field, Array.of(errorItem.defaultMessage));
                    }
                    console.log(errorData);
                }
                return errorData;
            }
            return null;
        }
    }
};
