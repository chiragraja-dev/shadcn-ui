// sorting.ts

interface Booking {
    slotdate: any;
    bookingID: number;
    customerID: number;
    customerInfo: any; // Replace 'any' with the actual type
    bookingStatusId: number;
    // ... (add other fields based on your actual data structure)
    practitionerDtoInfo: {
        fullName: string;
    };
}

export const sortBookings = (
    bookings: Booking[],
    sortBy: 'fullName' | 'slotDate',
    sortOrder: 'asc' | 'desc'
): Booking[] => {
    return [...bookings].sort((a, b) => {
        if (sortBy === 'fullName') {
            const nameA = a.practitionerDtoInfo.fullName.toLowerCase();
            const nameB = b.practitionerDtoInfo.fullName.toLowerCase();
            return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        } else if (sortBy === 'slotDate') {
            const dateA = new Date(a.slotdate).getTime();
            const dateB = new Date(b.slotdate).getTime();
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        }
        return 0;
    });
};
