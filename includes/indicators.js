const isPaidRide = `(total_amount IS NOT NULL AND total_amount > 0)`
const isEmptyCar = `(passenger_count IS NULL OR passenger_count = 0)`
const isNonFraudRide = `(${isPaidRide} AND NOT ${isEmptyCar})`

module.exports = {
    isPaidRide,
    isEmptyCar,
    isNonFraudRide
}