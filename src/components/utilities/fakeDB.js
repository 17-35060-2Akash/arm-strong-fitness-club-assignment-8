const addToDB = (breakTimeValue) => {
    let timeList = {};
    const storedTimeList = localStorage.getItem('time-list');
    if (storedTimeList) {
        timeList = JSON.parse(storedTimeList);
    }

    timeList['break-time'] = breakTimeValue;
    localStorage.setItem('time-list', JSON.stringify(timeList));

}

const getTimeList = () => {
    let timeList = {};
    const storedTimeList = localStorage.getItem('time-list');
    if (storedTimeList) {
        timeList = JSON.parse(storedTimeList);
    }
    return timeList;
}

export { addToDB, getTimeList };