export const selectedUser = (addressId) => {
    return {
        type: 'select_user',
        payload: addressId
    };
};
