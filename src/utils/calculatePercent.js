const calculatePercent = (value, percent) => {

    value = parseInt(value);
    percent = parseInt(percent);

    if (percent <= 0) {
        return value;
    }

    return value - Math.ceil(value * percent / 100);
}

export default calculatePercent;