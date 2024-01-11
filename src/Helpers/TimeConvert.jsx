export default function TimeConvert (time) {
    let currentDate = new Date(time);

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Adding 1 to get the correct month
    let year = currentDate.getFullYear();

    // Formatting the date as "day/month/year"
    let formattedDate = day + '/' + month + '/' + year;

    return formattedDate;
}