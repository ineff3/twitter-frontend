const monthMap = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
}

const daysOfWeek: { [key: number]: string } = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
}

export const convertPostDate = (date: Date) => {
    const currentDate = new Date()
    if (currentDate.getDate() === date.getDate()) {
        if (currentDate.getHours() === date.getHours()) {
            return currentDate.getMinutes() - date.getMinutes() + 'm ago'
        }
        return currentDate.getHours() - date.getHours() + 'h ago'
    } else {
        return daysOfWeek[date.getDay()] + ' ' + date.getDate()
    }
}
// monthMap[date.getMonth() as keyof typeof monthMap]
