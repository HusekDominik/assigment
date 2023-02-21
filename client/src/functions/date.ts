import moment from "moment";

export const formatDateFunc = (date: string): string => {
    const d = new Date(date);
    const currentTime = new Date();

    const timeFromNow = moment(d).fromNow();

    const diffTime = moment(currentTime).diff(moment(d), 'days');

    if (diffTime > 7) {
        const data = moment(d).format('LLL'); // February 26, 2021 2:11 PM

        const dateArray = data.split(' ');

        return `${dateArray[0]} ${dateArray[1]} ${dateArray[3]}  ${dateArray[4]}`;
    }

    return timeFromNow;
};