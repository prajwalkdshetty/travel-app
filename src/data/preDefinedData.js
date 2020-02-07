export const User = {
    firstname: 'John',
    lastname: 'Doe',
    role: 'Admin',
    email: 'johndoe@gmail.com',
    userId: 'arf786546f'
}


const date = getCheckInOutDateHardCoded();
export const SearchData = {
    checkIn: date.checkIn,
    checkOut: date.checkOut,
    location: 'Leipzig, Germany'
}

function getCheckInOutDateHardCoded() {
    const d = new Date();
    const cin = (d.getMonth()+1)+'/'+(d.getDate()+1)+'/'+d.getFullYear()+' 01:00 PM';
    const cout = (d.getMonth()+1)+'/'+(d.getDate()+2)+'/'+d.getFullYear()+' 11:00 AM';
    return {
        checkIn: cin,
        checkOut: cout
    }
}