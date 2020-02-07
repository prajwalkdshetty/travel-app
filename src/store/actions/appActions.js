/*
 * action types
 */
export const SET_HOTEL = 'SET_HOTEL';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_ROOM = 'SET_ROOM';
export const SET_BOOKING_INFO = 'SET_BOOKING_INFO';

/*
 * action creators
 */
export function setHotel(hotelData) {
    return { type: SET_HOTEL, payload: hotelData }
}

export function setSearch(searchData) {
    return { type: SET_SEARCH, payload: searchData }
}

export function setRoom(roomData) {
    return { type: SET_ROOM, payload: roomData }
}

export function setBookingInfo(bookingData) {
    return { type: SET_BOOKING_INFO, payload: bookingData }
}
